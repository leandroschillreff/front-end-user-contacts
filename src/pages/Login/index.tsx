import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/Container';
import { Form, ThemeInput, ThemeLabel } from '../../components/Form';
import { ISignIn, UserContext } from '../../contexts/UserContext';
import { ThemeButton } from '../../styles/buttons';
import { ThemeErrorForm, ThemeText, ThemeTitle } from '../../styles/typography';
import { schema } from '../../validators/loginUser';
import { StyledLogin } from './styles';

export const Login = () => {
  const { signIn } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignIn>({ resolver: yupResolver(schema) });

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
      <StyledLogin>
        <ThemeTitle className='' tag='h1' titleSize='title1' color='primary'>
          User Contacts
        </ThemeTitle>
        <Form onSubmit={handleSubmit(signIn)}>
          <div className='title'>
            <ThemeTitle className='' tag='h3' titleSize='title3' color='white'>
              Login
            </ThemeTitle>
          </div>

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
            placeholder='Digite aqui a sua senha'
          />

          <ThemeErrorForm>{errors.password?.message}</ThemeErrorForm>

          <ThemeButton size='large' buttonColor='primary' type='submit'>
            Entrar
          </ThemeButton>

          <ThemeText>Ainda não possui uma conta?</ThemeText>

          <ThemeButton
            size='large'
            buttonColor='gray-1'
            onClick={() => navigate('/register')}
          >
            Cadastrar
          </ThemeButton>
        </Form>
      </StyledLogin>
    </Container>
  );
};
