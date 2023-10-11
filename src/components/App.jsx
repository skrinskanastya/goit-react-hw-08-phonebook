import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { Layout } from './Layout';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Layout>
      <h1> Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <b>Loading...</b>}
      <ContactsList />
    </Layout>
  );
};
