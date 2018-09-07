import styled from 'styled-components';
import media from '../../../theme/media';

export const SideDrawer = styled.div`
    position: fixed;
    width: 280px;
    max-width: 70%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 2;
    background-color: green;
    opacity: 0.9;
    padding: 32px 16px;
    box-sizing: border-box;
    transition: transform 0.3s ease-out;
`;

export const SideDrawerLogoContainer = styled.div`
    height: 11%;
    margin-bottom: 32px;
`;