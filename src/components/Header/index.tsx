import { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { ThemeButton } from '../../styles/buttons';
import { ThemeTitle } from '../../styles/typography';
import { StyledHeader } from './styles';

export const Header = () => {
  const navigate = useNavigate();
  const { setOpenModalUpdateUser } = useContext(UserContext);
  function logout() {
    localStorage.removeItem('@usercontacts:token');
    localStorage.removeItem('@usercontacts:userId');
    navigate('/login');
  }

  return (
    <StyledHeader>
      <Toaster
        position='top-center'
        toastOptions={{
          style: {
            background: '#343b41',
            color: 'white',
          },
        }}
      />
      <div className='container_header'>
        <ThemeTitle className='' tag='h1' titleSize='title1' color='primary'>
          User Contacts
        </ThemeTitle>

        <div className='header__user'>
          <FaUserCircle color='#6328A4' fontSize={80} />

          <div className='header_buttons'>
            <ThemeButton
              size='small'
              buttonColor='gray-3'
              onClick={() => setOpenModalUpdateUser(true)}
            >
              Atualizar
            </ThemeButton>

            <ThemeButton
              size='small'
              buttonColor='gray-3'
              onClick={() => logout()}
            >
              Logout
            </ThemeButton>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};
