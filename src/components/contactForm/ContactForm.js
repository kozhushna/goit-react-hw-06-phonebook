import { useDispatch } from 'react-redux';

// import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';

import { addContact } from '../../redux/contactsSlice';

import './ContactForm.css';

function ContactForm() {
  const dispatch = useDispatch();
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // const handleChangeValue = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case 'name':
  //       setName(value);
  //       break;

  //     case 'number':
  //       setNumber(value);
  //       break;

  //     default:
  //       throw Error(`Does not supported '${name}'`);
  //   }
  // };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(
      addContact({
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="label">
        Name
        <input
          type="text"
          name="name"
          className="input"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className="label">
        Number
        <input
          type="tel"
          name="number"
          className="input"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className="button">
        Add contact
      </button>
    </form>
  );
}

// ContactForm.propTypes = {
//   onAddNewContact: PropTypes.func.isRequired,
// };

export default ContactForm;
