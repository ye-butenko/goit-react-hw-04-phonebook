import { StyledList, StyledItem, StyledBtn } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <StyledList>
      {contacts.map(({ id, name, number }) => {
        return (
          <StyledItem key={id}>
            <span className="name">{name}</span>
            <span className="number">{number}</span>
            <StyledBtn type="button" onClick={() => deleteContact(id)}>
              Delete
            </StyledBtn>
          </StyledItem>
        );
      })}
    </StyledList>
  );
};
