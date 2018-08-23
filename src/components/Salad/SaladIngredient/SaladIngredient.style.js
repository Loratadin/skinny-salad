import styled from 'styled-components';

export const SaladBed = styled.div`
	height: 13%;
 	width: 80%;
 	background: linear-gradient(#5bec65, #368c3c);
 	border-radius: 0 0 30px 30px;
 	box-shadow: inset -15px 0 #0e6514;
 	margin: 2% auto;
`;

export const Topping = styled.div`
	width: 80%;
    height: 3%;
    background: linear-gradient(#bf3813, #815a07);
    margin: 2% auto;
`;

export const BerryContainer = styled.div`
	height: 20%;
    width: 80%;
    border-radius: 50% 50% 0 0;
    margin: 2% auto;
    position: relative;
`;

export const BlueBerry = styled.div`
	width: 10%;
	height: 15%;
	position: absolute;
	background-color: #1c124d;
	left: 30%;
	top: 50%;
	border-radius: 40%;
	transform: rotate(-20deg);
	box-shadow: inset -2px -3px #140d36;
	&:after {
		content: "";
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: #1c124d;
		left: -170%;
		top: -260%;
		border-radius: 40%;
		transform: rotate(60deg);
		box-shadow: inset -1px 2px #140d36;
	}
	&:before {
		content: "";
		width: 100%;
		height: 100%;
		position: absolute;
		background-color: #1c124d;
		left: 180%;
		top: -50%;
		border-radius: 40%;
		transform: rotate(60deg);
		box-shadow: inset -1px -3px #140d36;
	}
`;

export const CranBerry = styled.div`
	width: 10%;
    height: 15%;
    position: absolute;
    background-color: white;
    left: 64%;
    top: 50%;
    border-radius: 40%;
    transform: rotate(10deg);
	box-shadow: inset -3px 0 #c9c9c9;
	&:before {
		content: "";
    	width: 100%;
    	height: 100%;
    	position: absolute;
    	background-color: #670318;
    	left: 150%;
    	top: -130%;
    	border-radius: 40%;
    	transform: rotate(90deg);
    	box-shadow: inset 1px 3px #38040f;
	}
`;