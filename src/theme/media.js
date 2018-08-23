import { css } from 'styled-components';

const sizes = {
   phone: 300,
   tablet: 451,
   desktopL: 769,
   desktopXL: 1025
};

function phone(...args) {
 return css`
    @media(min-width: ${sizes.phone}px) {
     ${css(...args)}
    }
 `;
}

function tablet(...args) {
 return css`
    @media(min-width: ${sizes.tablet}px) {
     ${css(...args)}
    }
 `;
}

function desktop(...args) {
 return css`
    @media(min-width: ${sizes.desktopL}px) {
     ${css(...args)}
    }
 `;
}

function monitor(...args) {
 return css`
    @media(min-width: ${sizes.desktopXL}px) {
     ${css(...args)}
    }
 `;
}

const media = {
 phone,
 tablet,
 desktopL,
 desktopXL
};

export default media;