import styled from 'styled-components';
import media from '../../../theme/media';

export const Modal = styled.div`
 position: fixed;
 z-index: 500;
 background-color: white;
 width: 70%;
 border: 1px solid #ccc;
 border-radius: 20px;
 color: green;
 padding: 16px;
 left: 15%;
 top: 30%;
 box-sizing: border-box;
 transition: all 0.3s ease-out;
 ${media.desktopL`
  width: 500px;
  left: calc(50% - 250px);
 `}
`;