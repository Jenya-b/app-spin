import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { colors } from 'styles/colors';
import { fontStyleXSmallBold } from 'styles/typography';

export const StyledLink = styled(Link)`
  color: ${colors.whiteTransparent200};
  ${fontStyleXSmallBold}
  text-transform: uppercase;
  transition: ${({ theme }) => theme.transition};

  :hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const menuListCss = css`
  display: flex;
  column-gap: 1.3rem;
`;
