import { css } from 'styled-components';

export const socialMenuListCss = css`
  display: flex;
  align-items: center;
  column-gap: 1rem;

  li {
    a {
      display: inline-block;
      width: 1.5rem;
      height: 1.5rem;
      svg {
        width: 100%;
        height: 100%;
        :hover {
          path {
            transition: all 0.3s;
            fill-opacity: 1;
          }
        }
      }
    }
  }
`;
