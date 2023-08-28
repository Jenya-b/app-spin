import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { colors } from 'styles/colors';
import { fontStyleXSmallNormal } from 'styles/typography';

export const StyledLink = styled(Link)`
  color: ${colors.whiteTransparent200};
  ${fontStyleXSmallNormal}
  text-transform: uppercase;
  transition: ${({ theme }) => theme.transition};

  :hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const menuListCss = css`
  display: flex;
  column-gap: 1.3rem;

  @media (max-width: 1200px) {
    column-gap: 1rem;
  }

  @media (max-width: 1023px) {
    column-gap: 0;
    flex-direction: column;
    row-gap: 1.2rem;
  }
`;
