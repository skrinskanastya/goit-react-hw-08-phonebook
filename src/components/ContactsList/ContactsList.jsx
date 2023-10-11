import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from 'redux/operations';
import { selectContacts, selectStatusFilter } from 'redux/selectors';
import { StyledBtn } from './ContactsList.styled';
import { useEffect } from 'react';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filtered = useSelector(selectStatusFilter);

  const normalizedFilter = filtered.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <StyledBtn type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </StyledBtn>
        </li>
      ))}
    </ul>
  );
};
