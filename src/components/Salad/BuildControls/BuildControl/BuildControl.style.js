import styled from 'styled-components';

export const BuildControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`;

export const BCButton = styled.a`
  display: block;
  font: inherit;
  text-align: center;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #ebed24;
  border-radius: 15px;
  cursor: pointer;
  outline: none;
  color: green;
  background-color: #ebed24;
  &:hover,
  &:active {
    background-color: #8cf72e;
  }
  &:disabled,
  &:hover:disabled {
    background-color: #ac9980;
    border: 1px solid #7e7365;
    color: #ccc;
    cursor: default;
  }
`;

export const Label = styled.div`
  padding: 10px;
  width: 80px;
  color: green;
`;
