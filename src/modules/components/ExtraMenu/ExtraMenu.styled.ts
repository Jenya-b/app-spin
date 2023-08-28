import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { colors } from 'styles/colors';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
  margin-right: 0.5rem;
`;

export const SettingLink = styled(Link)`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  transition: ${({ theme }) => theme.transition};

  :hover {
    transform: rotate(-90deg);

    svg {
      width: 100%;
      height: 100%;
      path {
        transition: ${({ theme }) => theme.transition};
        fill: ${colors.blueLight100};
      }
    }
  }
`;

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
