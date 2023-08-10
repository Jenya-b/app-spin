import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { searchIcon } from 'constants/images';
import { colors } from 'styles/colors';
import {
  fontStyleSmallDemiBold,
  fontStyleSmallNormal,
  fontStyleXSmallBemiBold,
} from 'styles/typography';

interface StyledNavLinkProps {
  icon: { active: string; noActive: string };
}

export const Wrapper = styled.div`
  height: 100vh;
  padding: 0 2.3rem 1.43rem 2.3rem;
  display: grid;
  grid-template: auto 1fr / 27rem 1fr 27rem;
  column-gap: 2.3rem;
`;

export const Sidebar = styled.aside`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  grid-column: 1/2;
  grid-row: 2/3;
  margin-bottom: 0.85rem;
  display: grid;
  grid-template-rows: auto 1fr;
`;

export const SearchBlock = styled.div`
  padding: 1.5rem 2rem;
`;

export const SearchTitle = styled.h2`
  ${fontStyleSmallDemiBold}
`;

export const Label = styled.label`
  margin-top: 0.85rem;
  display: block;
  position: relative;
  width: 100%;
  height: 2.85rem;
`;

export const SearchBtn = styled.button`
  position: absolute;
  top: 50%;
  left: 0.4rem;
  transform: translateY(-50%);
  background: ${colors.blueLight200};
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  width: 2.2rem;
  height: 2.2rem;

  ::before {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(${searchIcon}) no-repeat;
    background-position: center;
    background-size: contain;
    width: 1.43rem;
    height: 1.43rem;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 3.3rem;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  background: ${({ theme }) => theme.colors.bgTertiary};
  color: ${({ theme }) => theme.colors.textPrimary};
  ${fontStyleSmallNormal}
`;

export const StyledNavLink = styled(NavLink)<StyledNavLinkProps>`
  position: relative;
  padding: 1rem 0.85rem 1rem 3.2rem;
  display: flex;
  align-items: center;
  width: 100%;
  ${fontStyleXSmallBemiBold}
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  transition: ${({ theme }) => theme.transition};

  ::before {
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    content: '';
    top: 50%;
    left: 0.85rem;
    transform: translateY(-50%);
    background: url(${({ icon }) => icon.noActive}) no-repeat;
    background-position: center;
    background-size: contain;
    transition: ${({ theme }) => theme.transition};
  }

  &.active {
    background: ${({ theme }) => theme.colors.buttonPrimary};

    ::before {
      background: url(${({ icon }) => icon.active}) no-repeat;
      background-position: center;
      background-size: contain;
    }
  }
`;

export const listMenuCss = css`
  padding: 1.5rem 2rem;
  border-radius: 1.15rem;
  background: ${colors.blue500};
`;
