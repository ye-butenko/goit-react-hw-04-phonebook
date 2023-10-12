import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 24px;
`;

export const StyledField = styled(Field)`
  padding: 5px 10px;
  width: 100%;

  text-align: center;
  font-size: 24px;
  border-radius: 5px;
`;

export const StyledBtn = styled.button`
  margin-top: 12px;

  padding: 5px 15px;
  flex-basis: 15%;

  font-size: 18px;
  font-weight: 500;

  background-color: transparent;
  border-radius: 5px;

  cursor: pointer;
`;
