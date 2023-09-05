import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { addIcon, btnRightIcon, logo, logoutIcon } from 'constants/images';
import { ButtonPrimary } from 'styles/components';
import {
  fontStyleMediumBold,
  fontStyleXSmallBemiBold,
  fontStyleXXSmallBold,
} from 'styles/typography';
import { mainMediaSize } from 'styles/fragments';
import { theme } from 'styles/theme';

interface StyledNavLinkProps {
  icon: { active: string; noActive: string };
}

interface BurgerProps {
  isActiveBurger: boolean;
}

export const StyledHeader = styled.header`
  padding: 1.6rem 0;
  grid-column: 1/4;
  grid-row: 1/2;
  display: grid;
  grid-template-columns: 27rem 1fr 27rem;
  column-gap: 2.3rem;

  ${mainMediaSize}

  @media (max-width: 1023px) {
    display: flex;
    column-gap: 0rem;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1023px) {
    :first-child {
      margin-right: auto;
    }
  }
`;

export const Logo = styled.div`
  width: 11rem;
  height: 2.9rem;
  background: url(${logo}) no-repeat;
  background-size: contain;

  @media (max-width: 1200px) {
    margin-left: 0.5rem;
  }
  @media (max-width: 1023px) {
    margin-left: 0rem;
  }
  @media (max-width: 480px) {
    width: 9rem;
    height: 2.3rem;
  }
`;

export const Nav = styled.nav`
  @media (max-width: 1023px) {
    padding: 0.3rem 0;
    background: ${({ theme }) => theme.colors.bgSecondary};
    border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    z-index: ${({ theme }) => theme.order.mainIndex};
  }
`;

export const StyledNavLink = styled(NavLink)<StyledNavLinkProps>`
  position: relative;
  padding: 0.3rem;
  display: flex;
  align-items: end;
  justify-content: center;
  width: 100%;
  height: 100%;
  ${fontStyleXSmallBemiBold}
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  border: 1px solid ${({ theme }) => theme.colors.bgPrimary};
  transition: ${({ theme }) => theme.transition};

  @media (max-width: 1023px) {
    border: none;
  }

  ::before {
    width: 2rem;
    height: 2rem;
    position: absolute;
    content: '';
    top: 4px;
    left: 50%;
    transform: translateX(-50%);
    background: url(${({ icon }) => icon.noActive}) no-repeat;
    background-position: center;
    background-size: contain;
    transition: ${({ theme }) => theme.transition};
  }

  &.active,
  :hover {
    border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
    background: ${({ theme }) => theme.colors.bgSecondary};

    @media (max-width: 1023px) {
      border: none;
    }

    ::before {
      background: url(${({ icon }) => icon.active}) no-repeat;
      background-position: center;
      background-size: contain;
    }
  }
`;

export const navMenuListCss = css`
  display: flex;
  column-gap: 0.72rem;

  li {
    width: 6rem;
    height: 4rem;

    @media (max-width: 479px) {
      width: 4.9rem;
    }
  }
`;

export const AuthBtn = styled(ButtonPrimary)`
  width: 16.8rem;
  padding: 0.93rem 0.85rem;

  ::after {
    background: url(${btnRightIcon}) no-repeat;
    background-size: contain;
    background-position: center;
  }

  @media (min-width: 1024px) {
    :hover {
      padding: 0.93rem 1.21rem;

      ::after {
        right: 1.21rem;
      }
    }
  }

  @media (max-width: 479px) {
    text-transform: capitalize;
    width: 11rem;
    padding: 0.65rem 0.9rem;
  }
`;

export const Burger = styled.div<BurgerProps>`
  display: flex;
  height: 23px;
  width: 35px;
  align-items: center;
  position: relative;
  margin-left: 1.5rem;
  z-index: ${({ theme }) => theme.order.mainIndex};

  span {
    display: ${({ isActiveBurger }) => (isActiveBurger ? 'none' : 'block')};
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.colors.textPrimary};
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.colors.textPrimary};
    left: 0;
    transition: all 0.1s;
  }

  &::after {
    transform: rotate(${({ isActiveBurger }) => (isActiveBurger ? 45 : 0)}deg);
    bottom: ${({ isActiveBurger }) => (isActiveBurger ? 10 : 0)}px;
  }

  &::before {
    transform: rotate(${({ isActiveBurger }) => (isActiveBurger ? -45 : 0)}deg);
    top: ${({ isActiveBurger }) => (isActiveBurger ? 10 : 0)}px;
  }
`;
