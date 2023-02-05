import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai';
import { ThemeButton } from '../../../styles/buttons';
import { ThemeErrorForm, ThemeTitle } from '../../../styles/typography';
import { schema } from '../../../validators/registerUser';
import { Form, ThemeInput, ThemeLabel } from '../../Form';
import { StyledModal } from '../../Modal';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { IRegisterUser, UserContext } from '../../../contexts/UserContext';

export const UpdateUser = () => {
  const { setOpenModalUpdateUser, user, updateUser, deleteUser } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUser>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: user?.name,
      email: user?.email,
      phone: user?.phone,
    },
  });

  const modalRef = useOutsideClick(() => {
    setOpenModalUpdateUser(false);
  });

  return (
    <StyledModal>
      <Form onSubmit={handleSubmit(updateUser)} ref={modalRef}>
        <div className='header'>
          <ThemeTitle className='' tag='h3' titleSize='title3' color='white'>
            Detalhes Usuário
          </ThemeTitle>

          <button type='button' onClick={() => setOpenModalUpdateUser(false)}>
            <AiOutlineClose />
          </button>
        </div>
        <div className='form'>
        
        <ThemeLabel htmlFor='name'>Nome:</ThemeLabel>
          <ThemeInput
            type='text'
            id='name'
            {...register('name')}
            placeholder='Digite aqui o seu nome'
          />
          <ThemeErrorForm>{errors.name?.message}</ThemeErrorForm>

          <ThemeLabel htmlFor='email'> Email:</ThemeLabel>
          <ThemeInput
            type='text'
            id='email'
            {...register('email')}
            placeholder='Digite aqui o seu email'
          />
          <ThemeErrorForm>{errors.email?.message}</ThemeErrorForm>

          <ThemeLabel htmlFor='password'>Senha:</ThemeLabel>
          <ThemeInput
            type='password'
            id='password'
            {...register('password')}
            placeholder='Digite aqui o sua senha'
          />
          <ThemeErrorForm>{errors.password?.message}</ThemeErrorForm>

          <ThemeLabel htmlFor='confirm_password'>Confirmar senha:</ThemeLabel>
          <ThemeInput
            type='password'
            id='confirm_password'
            {...register('confirm_password')}
            placeholder='Digite novamente a sua senha'
          />
          <ThemeErrorForm>{errors.confirm_password?.message}</ThemeErrorForm>

          <ThemeLabel htmlFor='phone'>Telefone:</ThemeLabel>
          <ThemeInput
            type='text'
            id='phone'
            {...register('phone')}
            placeholder='Opção de contato'
          />
          <ThemeErrorForm>{errors.phone?.message}</ThemeErrorForm>

          <div className='buttons'>
            <ThemeButton size='large' buttonColor='primary' type='submit'>
              Salvar
            </ThemeButton>
            <ThemeButton
              size='large'
              buttonColor='gray-1'
              onClick={() => deleteUser()}
              type='button'
            >
              Excluir
            </ThemeButton>
          </div>
        </div>
      </Form>
    </StyledModal>
  );
};
