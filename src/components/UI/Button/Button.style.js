import styled from 'styled-components';

export const Button = styled.a`
    background-color: #5C9210;
    border: none;
    border-radius: 10px;
    text-align: center;
    color: white;
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    &:first-of-type {
        margin-left: 0;
        padding-left: 0;
    }
`;