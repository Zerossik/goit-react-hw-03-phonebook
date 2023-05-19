import PropTypes from 'prop-types';
import { ContactItem } from './ContactsList.styled';

export function ContactListItem({ name, number, children }) {
  return (
    <ContactItem>
      <p>
        {name}: {number}
      </p>
      {children}
    </ContactItem>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
