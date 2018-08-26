import styled from 'styled-components';

export const NavigationItem = styled.div`
    margin: 0; 
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 100%;
    & > a {
        text-decoration: none;
        color: white;
        height: 100%;
        padding: 16px 10px;
        border-bottom: 4px solid transparent;
        box-sizing: border-box;
        display: block;
    }
    & > a:hover,
    & > a:active,
    & > a.active {
        background-color: #b3b32a;
        border-bottom: 4px solid #53c75c;
    }
`;