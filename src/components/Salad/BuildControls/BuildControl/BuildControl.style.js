import styled from 'styled-components';

export const BuildControl = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin: 5px 0;
`;

export const BCButton = styled.btn`
 display: block;
 font: inherit;
 padding: 5px;
 margin: 0 5px;
 width: 80px;
 border: 1px solid #717015;
 cursor: pointer;
 outline: none;
 color: white;
 background-color: #f4f22c;
 &:hover,
 &:active {
  background-color: #8cf72e;
 }
 &:disabled,
 &:hover:disabled {
  background-color: #AC9980;
  border: 1px solid #7E7365;
  color: #ccc;
  cursor: default;
 }
`;

export const Label = styled.div`
 padding: 10px;
 width: 80px;
`;