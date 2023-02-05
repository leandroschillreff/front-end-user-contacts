import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai';
import { ThemeButton } from '../../../styles/buttons';
import { ThemeErrorForm, ThemeTitle } from '../../../styles/typography';
import { schema } from '../../../validators/registerContact';
import { Form, ThemeInput, ThemeLabel } from '../../Form';
import { StyledModal } from '../../Modal';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { ContactContext, IContact } from '../../../contexts/ContactContext,';

export const EditContact = () => {
  const { setOpenModalEdit, currentContact, editContact, deleteContact } =
    useContext(ContactContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContact>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: currentContact?.name,
      email: currentContact?.email,
      phone: currentContact?.phone,
    },
  });

  const modalRef = useOutsideClick(() => {
    setOpenModalEdit(false);
  });

  return (
    <StyledModal>
      <Form onSubmit={handleSubmit(editContact)} ref={modalRef}>
        <div className='header'>
          <ThemeTitle className='' tag='h3' titleSize='title3' color='white'>
            Detalhes Contato
          </ThemeTitle>

          <button type='button' onClick={() => setOpenModalEdit(false)}>
            <AiOutlineClose />
          </button>
        </div>
        <div className='form'>
          <ThemeLabel htmlFor='name'> Nome:</ThemeLabel>
          <ThemeInput
            type='text'
            id='name'
            {...register('name')}
            placeholder='Digite aqui a tecnologia'
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

          <div className='buttons'>
            <ThemeButton size='large' buttonColor='primary' type='submit'>
              Salvar
            </ThemeButton>
            <ThemeButton
              size='large'
              buttonColor='gray-1'
              onClick={() => deleteContact()}
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
