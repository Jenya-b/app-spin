import { Pagination } from '@mui/material';
import styled from 'styled-components';

import { colors } from 'styles/colors';
import { fontStyleSmallNormal } from 'styles/typography';

export const StyledPagination = styled(Pagination)`
  padding: 1.71rem 2rem 1.5rem 2rem;
  display: flex;
  justify-content: center;

  .MuiPagination-ul {
    column-gap: 0rem;
  }

  .css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root,
  .css-2gftvx {
    ${fontStyleSmallNormal}
    background: ${colors.blue400};
    border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
    color: white;
    width: 3rem;
    height: 3rem;
  }
  .css-19xm0h7-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected,
  .css-2gftvx.Mui-selected {
    background: ${colors.blueLight200};
    :active,
    :focus {
      background: ${colors.blueLight200};
    }
  }
  .css-1v2lvtn-MuiPaginationItem-root,
  .css-16y9h98 {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;
