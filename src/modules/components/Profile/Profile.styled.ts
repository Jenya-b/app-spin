import styled, { css } from 'styled-components';

import { addIcon, logoutIcon } from 'constants/images';
import { theme } from 'styles/theme';

import { fontStyleMediumBold, fontStyleXXSmallBold } from 'styles/typography';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileInfo = styled.div`
  display: grid;
  grid-template: repeat(2, auto) / 2.85rem auto;
  align-items: center;
  column-gap: 0.85rem;
  text-transform: uppercase;
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
  ${fontStyleXXSmallBold}
`;

export const ProfileControl = styled.div`
  margin-left: 3.2rem;
  display: flex;
  column-gap: 0.6rem;

  @media (max-width: 767px) {
    margin-left: 1.5rem;
  }
`;

const buttonCss = css`
  position: relative;
  width: 2.3rem;
  height: 2.3rem;
  border-radius: ${theme.borders.radiusSecondary}rem;

  ::before {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 1.1rem;
    height: 1.1rem;
  }
`;

export const ButtonAdd = styled.button`
  background: rgba(91, 201, 87, 0.15);
  ${buttonCss}

  ::before {
    background: url(${addIcon}) no-repeat;
    background-position: center;
    background-size: contain;
  }
`;

export const ButtonLogout = styled.button`
  background: rgba(255, 55, 95, 0.15);
  ${buttonCss}

  ::before {
    background: url(${logoutIcon}) no-repeat;
    background-position: center;
    background-size: contain;
  }
`;
