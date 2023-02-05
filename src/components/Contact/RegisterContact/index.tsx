import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai';
import { ContactContext, IContact } from '../../../contexts/ContactContext,';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { ThemeButton } from '../../../styles/buttons';
import { ThemeErrorForm, ThemeTitle } from '../../../styles/typography';
import { schema } from '../../../validators/registerContact';
import { Form, ThemeInput, ThemeLabel } from '../../Form';
import { StyledModal } from '../../Modal';

export const RegisterContact = () => {
  const { setOpenModal, registerContact } = useContext(ContactContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContact>({ resolver: yupResolver(schema) });

  const modalRef = useOutsideClick(() => {
    setOpenModal(false);
  });

  return (
    <StyledModal>
      <Form onSubmit={handleSubmit(registerContact)} ref={modalRef}>
        <div className='header'>
          <ThemeTitle className='' tag='h3' titleSize='title3' color='white'>
            Cadastrar Contato
          </ThemeTitle>
          <button type='button' onClick={() => setOpenModal(false)}>
            <AiOutlineClose />
          </button>
        </div>
        <div className='form'>
          <ThemeLabel htmlFor='name'> Nome:</ThemeLabel>
          <ThemeInput
            type='text'
            id='name'
            {...register('name')}
            placeholder='Digite aqui o nome'
          />
          <ThemeErrorForm>{errors.name?.message}</ThemeErrorForm>

          <ThemeLabel htmlFor='email'> Email:</ThemeLabel>
          <ThemeInput
            type='text'
            id='email'
            {...register('email')}
            placeholder='Digite aqui o email'
          />
          <ThemeErrorForm>{errors.email?.message}</ThemeErrorForm>

          <ThemeLabel htmlFor='phone'> Telefone:</ThemeLabel>
          <ThemeInput
            type='text'
            id='phone'
            {...register('phone')}
            placeholder='Digite aqui o phone'
          />
          <ThemeErrorForm>{errors.phone?.message}</ThemeErrorForm>
          
          <ThemeButton size='large' buttonColor='primary' type='submit'>
            Cadastrar
          </ThemeButton>
        </div>
      </Form>
    </StyledModal>
  );
};
