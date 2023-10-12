import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import { StyledBtn, StyledForm, StyledField } from './ContactForm.styled';

export const ContactForm = ({ onSubmit: addContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: 'id-' + nanoid(),
      name: values.name,
      number: values.number,
    };
    addContact(newContact);

    resetForm();
  };

  const initialValues = {
    id: '',
    name: '',
    number: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <StyledForm>
        <>
          <label htmlFor="name">Name:</label>
          <StyledField
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            required
          />
        </>
        <>
          <label htmlFor="number">Number:</label>
          <StyledField type="tel" id="number" name="number" required />
        </>
        <StyledBtn type="submit">Add contact</StyledBtn>
      </StyledForm>
    </Formik>
  );
};
