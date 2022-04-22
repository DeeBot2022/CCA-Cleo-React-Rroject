import { css } from "styled-components";

export const mobileScreenSize = (props) => {
  return css`
    @media only screen and (max-width: 480px) {
      ${props}
    }
  `;
};

export const tabletScreenSize = (props) => {
  return css`
    @media only screen and (max-width: 1024px) {
      ${props}
    }
  `;
};
