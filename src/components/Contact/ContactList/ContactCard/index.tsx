import { useContext } from 'react';
import { ContactContext, ICont } from '../../../../contexts/ContactContext,';
import { ThemeText, ThemeTitle } from '../../../../styles/typography';
import { StyledContactCard } from './styles';



export const ContactCard = ({ contact }: ICont) => {
  const { setOpenModalEdit, setCurrentContact } = useContext(ContactContext);
  function handleClick() {
    setCurrentContact(contact);
    setOpenModalEdit(true);
  }
  return (
    <StyledContactCard onClick={() => handleClick()}>
      <ThemeTitle className='' tag='h4' titleSize='title4' color='white'>
        {contact.name}
      </ThemeTitle>
      <ThemeText>{contact.email}</ThemeText>
    </StyledContactCard>
  );
};
