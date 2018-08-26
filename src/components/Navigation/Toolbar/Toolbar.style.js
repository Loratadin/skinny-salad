import styled from 'styled-components';

export const Toolbar = styled.div`
    height: 56px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #ccce0b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-indez: 0;
    & > nav {
        height: 100%;
    }
`;

export const ToolbarLogoContainer = styled.div`
    height: 80%;
`;