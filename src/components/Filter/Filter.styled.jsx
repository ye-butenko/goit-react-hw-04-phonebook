import styled from 'styled-components';

export const StyledLabel = styled.label`
  margin-bottom: 10px;
  margin-right: 10px;
  font-weight: 500;
  font-size: 24px;

  + input {
    padding: 5px 10px;
    width: 100%;
    max-width: 300px;
    text-align: center;
    font-size: 24px;
    border-radius: 5px;
  }
`;
