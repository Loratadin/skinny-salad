import styled from 'styled-components';
import media from '../../../theme/media';

/*eslint-disable */
export const Salad = styled.div`
	width: 100%;
	margin: auto;
	height: 250px;
	overflow: scroll;
	text-align: center;
	font-size: 1.2rem;
	${media.tablet`
    width: 350px;
	height: 300px;
    `}
    ${media.desktopL`
    width: 450px;
	height: 400px;
    `}
`;