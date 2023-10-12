import styled from 'styled-components';

export const StyledList = styled.ul`
  margin: 0 auto;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
`;

export const StyledItem = styled.li`
  padding: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  border-radius: 5px;

  .name {
    text-align: left;
    font-size: 22px;

    flex-basis: 33.333%;
  }

  .number {
    text-align: right;

    font-weight: 500;
    font-size: 22px;

    flex-basis: 33.333%;
  }
`;

export const StyledBtn = styled.button`
  padding: 5px 15px;
  flex-basis: 15%;

  font-size: 18px;
  font-weight: 500;

  background-color: transparent;
  border-radius: 5px;

  cursor: pointer;
`;
