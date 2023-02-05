import { useContext } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { UserContext } from '../../contexts/UserContext';
import { Header } from '../../components/Header';
import { ThemeText, ThemeTitle } from '../../styles/typography';
import { Container } from '../../components/Container';
import { StyledDashBoard } from './styles';
import { ThemeButton } from '../../styles/buttons';
import { RegisterContact } from '../../components/Contact/RegisterContact';
import { ContactList } from '../../components/Contact/ContactList';
import { ContactContext } from '../../contexts/ContactContext,';
import { EditContact } from '../../components/Contact/EditContact';
import { UpdateUser } from '../../components/User/UpdateUser';

export const DashBoard = () => {
  const { user, openModalUpdateUser } = useContext(UserContext);

  const { openModal, setOpenModal, openModalEdit } = useContext(ContactContext);

  return (
    <>
      {openModal && <RegisterContact />}
      {openModalEdit && <EditContact />}
      {openModalUpdateUser && <UpdateUser />}
      <Container>
        <StyledDashBoard>
          <Header />
          <div className='container_user'>
            <ThemeTitle className='' tag='h3' titleSize='title3' color='white'>
              {`Olá, ${user?.name}`}
            </ThemeTitle>
            <ThemeText> {user?.email}</ThemeText>
          </div>

          <div className='container_technology'>
            <ThemeTitle className='' tag='h3' titleSize='title3' color='white'>
              Contatos
            </ThemeTitle>
            <ThemeButton
              size='small'
              buttonColor='gray-3'
              onClick={() => setOpenModal(true)}
            >
              <BsPlusLg />
            </ThemeButton>
          </div>

          <ContactList />
        </StyledDashBoard>
      </Container>
    </>
  );
};
