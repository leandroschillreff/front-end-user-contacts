import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import toast from 'react-hot-toast';
import { api } from '../services/api';

interface ITechProviderProps {
  children: ReactNode;
}

export interface ITech {
  id: string;
  title: string;
  status: string;
}

export interface IContact {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface ICont {
  contact: IContact;
}

interface IContactContext {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  openModalEdit: boolean;
  setOpenModalEdit: Dispatch<SetStateAction<boolean>>;
  currentContact: IContact | null;
  setCurrentContact: Dispatch<SetStateAction<IContact>>;

  contacts: IContact[] | [];
  setContacts: Dispatch<SetStateAction<IContact[] | []>>;

  rechargeContact: boolean;
  setRechargeContact: Dispatch<SetStateAction<boolean>>;

  registerContact: (data: IContact) => void;
  editContact: (data: IContact) => void;
  deleteContact: () => void;
}

export interface IRegisterContactResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
  created_at: string;
  updated_at: string;
}

export const ContactContext = createContext({} as IContactContext);

export const TechProvider = ({ children }: ITechProviderProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [currentContact, setCurrentContact] = useState<IContact>({
    id: 'uuid',
    name: 'Name',
    email: 'email@mail.com',
    phone: '0000000',
  });
  const [rechargeContact, setRechargeContact] = useState(false);

  const [contacts, setContacts] = useState<IContact[]>([]);

  const registerContact = async (data: IContact) => {
    const token = localStorage.getItem('@usercontacts:token');

    api.defaults.headers.common.authorization = `Bearer ${token}`;

    const responseRegisterContact = api.post<IRegisterContactResponse>(
      '/contact',
      data,
    );

    toast.promise(responseRegisterContact, {
      loading: 'Registrando...',
      success: () => {
        setOpenModal(false);
        setRechargeContact(!rechargeContact);
        return 'Contato registrado com sucesso!';
      },
      error: (error) => `${error.response.data.message}`,
    });
  };

  const editContact = async (data: IContact) => {
    const token = localStorage.getItem('@usercontacts:token');
    api.defaults.headers.common.authorization = `Bearer ${token}`;

    const { id } = currentContact;

    const { name, email, phone } = data;
    const responseEditContact = api.patch(`/contact/${id}`, {
      name,
      email,
      phone,
    });

    toast.promise(responseEditContact, {
      loading: 'Editando...',
      success: () => {
        setOpenModalEdit(false);
        setRechargeContact(!rechargeContact);
        return 'Contato alterado com sucesso!';
      },
      error: (error) => `${error.response.data.message}`,
    });
  };

  const deleteContact = async () => {
    const token = localStorage.getItem('@usercontacts:token');
    api.defaults.headers.common.authorization = `Bearer ${token}`;

    const { id } = currentContact;
    const responseDeleteContact = api.delete(`/contact/${id}`);

    toast.promise(responseDeleteContact, {
      loading: 'Deletando...',
      success: () => {
        setOpenModalEdit(false);
        setRechargeContact(!rechargeContact);
        return 'Contato deletado com sucesso!';
      },
      error: (error) => `${error.response.data.message}`,
    });
  };

  return (
    <ContactContext.Provider
      value={{
        openModal,
        setOpenModal,
        registerContact,
        rechargeContact,
        setRechargeContact,
        openModalEdit,
        setOpenModalEdit,
        currentContact,
        setCurrentContact,
        editContact,
        deleteContact,
        contacts,
        setContacts,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
