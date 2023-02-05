import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { ContactContext } from './ContactContext,';

interface IUserProviderProps {
  children: ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface ISignIn {
  email: string;
  password: string;
}

interface ISignInResponse {
  user: IUser;
  token: string;
}

export interface IRegisterUser {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
  phone: string;
}

export interface IRegisterUserResponse {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  created_at: Date;
  updated_at: Date;
  avatar_url: string | null;
}

interface IUserContext {
  openModalUpdateUser: boolean;
  setOpenModalUpdateUser: Dispatch<SetStateAction<boolean>>;
  user: IUser | null;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  signIn: (data: ISignIn) => void;
  registerUser: (data: IRegisterUser) => void;
  updateUser: (data: IRegisterUser) => void;
  loading: boolean;
  deleteUser: () => void;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const { rechargeContact, setRechargeContact } = useContext(ContactContext);
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  const [openModalUpdateUser, setOpenModalUpdateUser] = useState(false);

  const { setContacts } = useContext(ContactContext);

  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem('@usercontacts:token');
      if (token) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`;

          const { data } = await api.get('/contact');

          await api.get('/user').then((response) => setUser(response.data));

          setContacts(data);

          const userData = await api.get('/user');
          setUser(userData.data);
        } catch (error) {
          localStorage.removeItem('@usercontacts:token');
          localStorage.removeItem('@usercontacts:userId');
        }
      }

      setLoading(false);
    }

    loadUser();
  }, [rechargeContact]);

  const signIn = async (data: ISignIn) => {
    const responseSignIn = api.post<ISignInResponse>('/login', data);

    toast.promise(responseSignIn, {
      loading: 'Carregando...',
      success: (response) => {
        const { user: userResponse, token } = response.data;
        api.defaults.headers.common.authorization = `Bearer ${token}`;

        api.get(`/contact`).then((responsee) => {
          setContacts(responsee.data);
        });

        setUser(userResponse);

        localStorage.setItem('@usercontacts:token', token);
        localStorage.setItem('@usercontacts:userId', userResponse.id);

        const toNavigate = '/dashboard';

        navigate(toNavigate, { replace: true });

        return `Seja bem-vindo(a) ao User Contacts ${userResponse.name}`;
      },
      error: (error) => `${error.response.data.message}`,
    });
  };

  function registerUser(data: IRegisterUser) {
    const { name, email, password, phone } = data;
    const dataUser = {
      name,
      email,
      password,
      phone,
    };

    const promisseRegister = api
      .post<IRegisterUserResponse>('/user', dataUser)
      .then((response) => response);

    toast.promise(promisseRegister, {
      loading: 'Carregando...',
      success: () => {
        navigate('/login');
        return 'Registrado com sucesso, realize o login.';
      },
      error: (error) => `${error.response.data.message}`,
    });
  }

  function updateUser(data: IRegisterUser) {
    const { name, email, password, phone } = data;
    const dataUser = {
      id: 'uuid',
      name,
      email,
      password,
      phone,
    };

    const promisseRegister = api
      .patch<IRegisterUserResponse>('/user', dataUser)
      .then((response) => response);

    setUser(dataUser);

    toast.promise(promisseRegister, {
      loading: 'Carregando...',
      success: () => {
        setOpenModalUpdateUser(false);
        setRechargeContact(!rechargeContact);
        return 'Atualizado com sucesso.';
      },
      error: (error) => `${error.response.data.message}`,
    });
  }

  const deleteUser = async () => {
    const token = localStorage.getItem('@usercontacts:token');
    api.defaults.headers.common.authorization = `Bearer ${token}`;

    const responseDeleteContact = api.delete(`/user`);

    toast.promise(responseDeleteContact, {
      loading: 'Deletando...',
      success: () => {
        setOpenModalUpdateUser(false);
        setRechargeContact(!rechargeContact);
        navigate('/login');
        return 'Usuário deletado com sucesso!';
      },
      error: (error) => `${error.response.data.message}`,
    });
  };

  return (
    <UserContext.Provider
      value={{
        openModalUpdateUser,
        setOpenModalUpdateUser,
        user,
        setUser,
        signIn,
        loading,
        registerUser,
        updateUser,
        deleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
