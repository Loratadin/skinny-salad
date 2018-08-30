import styled from 'styled-components';
import media from '../../../theme/media';

export const NavigationItems = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: column;
    align-items: center;
    height: 100%;
    ${media.desktopL`
        flex-flow: row;
    `}
`;