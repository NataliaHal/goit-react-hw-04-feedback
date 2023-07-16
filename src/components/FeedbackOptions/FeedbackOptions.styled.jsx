import styled from 'styled-components';

export const ButtonsBox = styled.div`
  margin-top: 40px;
  display: flex;
  width: 400px;
  justify-content: space-around;
`;

export const Button = styled.button`
  padding: 5px;
  width: 100px;
  border: none;
  font-weight: 900;
  border-radius: 10px;
  text-transform: capitalize;

  &:hover,
  &:focus {
    color: white;
    scale: 1.1;
    cursor: pointer;
    background-color: #47a1ff;
    transition: background-color 200ms linear;
    transition: scale 200ms linear;
  }
`;
