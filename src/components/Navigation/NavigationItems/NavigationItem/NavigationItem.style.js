import styled from 'styled-components';
import media from '../../../../theme/media';

export const NavigationItem = styled.div`
    margin: 10px 0; 
    box-sizing: border-box;
    display: block;
    width: 100%;
    & > a {
        text-decoration: none;
        color: white;
        width: 100%;
        box-sizing: border-box;
        display: block;
    }
    ${media.desktopL`
        margin: 0; 
        height: 100%;
        width: auto;
        display: flex;
        align-items: center;
        & > a {
            height: 100%;
            padding: 16px 10px;
            border-bottom: 4px solid transparent;
        }
        & > a:hover,
        & > a:active,
        & > a.active {
            background-color: #b3b32a;
            border-bottom: 4px solid #53c75c;
        }
    `}
`;