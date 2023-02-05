import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/Container';
import { Form, ThemeInput, ThemeLabel } from '../../components/Form';
import { IRegisterUser, UserContext } from '../../contexts/UserContext';
import { ThemeButton } from '../../styles/buttons';
import { ThemeErrorForm, ThemeText, ThemeTitle } from '../../styles/typography';
import { schema } from '../../validators/registerUser';
import { StyledRegister } from './styles';

export const Register = () => {
  const { registerUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterUser>({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  return (
    <Container>
      <Toaster
        position='top-center'
        toastOptions={{
          style: {
            background: '#343b41',
            color: 'white',
          },
        }}
      />
      <StyledRegister>
        <div className='header_register'>
          <ThemeTitle className='' tag='h1' titleSize='title1' color='primary'>
            User Contacts
          </ThemeTitle>
          <ThemeButton
            size='small'
            buttonColor='gray-3'
            onClick={() => navigate('/login')}
          >
            Voltar
          </ThemeButton>
        </div>

        <Form onSubmit={handleSubmit(registerUser)}>
          <div className='title'>
            <ThemeTitle className='' tag='h3' titleSize='title3' color='white'>
              Crie a sua Conta
            </ThemeTitle>
            <ThemeText> Rápido e grátis, vamos nessa!</ThemeText>
          </div>

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

          <ThemeButton size='large' buttonColor='primary' type='submit'>
            Cadastrar
          </ThemeButton>
        </Form>
      </StyledRegister>
    </Container>
  );
};
