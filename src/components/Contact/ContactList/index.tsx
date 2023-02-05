import { useContext } from 'react';
import { ContactContext } from '../../../contexts/ContactContext,';
import { ThemeTitle } from '../../../styles/typography';
import { ContactCard } from './ContactCard';
import { StyledContactList } from './styles';

export const ContactList = () => {
  const { contacts } = useContext(ContactContext);
  return (
    <StyledContactList>
      {contacts.length === 0 ? (
        <ThemeTitle className='' tag='h3' titleSize='title3' color='white'>
          No momento você não têm nenhum contato cadastrado!
        </ThemeTitle>
      ) : (
        contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))
      )}
    </StyledContactList>
  );
};
