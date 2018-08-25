import styled from 'styled-components';

export const Button = styled.a`
    background-color: transparent;
    border: none;
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