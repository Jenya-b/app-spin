import { Menu } from '@mui/material';
import styled from 'styled-components';

import { fontStyleMediumBold, fontStyleXXSmallDemiBold } from 'styles/typography';

export const StyledMenu = styled(Menu)`
  margin-top: 3.2rem;

  .MuiMenu-paper,
  .MuiMenu-list {
    background: ${({ theme }) => theme.colors.bgTertiary};
  }

  .MuiMenu-list {
    color: ${({ theme }) => theme.colors.textPrimary};

    li:hover {
      background: ${({ theme }) => theme.colors.bgSecondary};
    }
  }
`;

export const ProfileInfo = styled.div`
  margin-left: 0.85rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProfileLogo = styled.div`
  width: 2.85rem;
  height: 2.85rem;
  grid-row: 1/3;
  grid-column: 1/2;
  border-radius: 50%;
  background: silver;
`;

export const ProfileName = styled.div`
  ${fontStyleMediumBold}
`;

export const ProfileMoney = styled.div`
  ${fontStyleXXSmallDemiBold}
  margin-top: 0.2rem;
  opacity: 0.5;
`;
