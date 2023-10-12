import { StyledLabel } from './Filter.styled';

export const Filter = ({ value, onFilter }) => {
  return (
    <div>
      <StyledLabel htmlFor="filter">Find contacts by name</StyledLabel>
      <input
        name="filter"
        type="text"
        id="filter"
        value={value}
        onChange={onFilter}
      />
    </div>
  );
};
