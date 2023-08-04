import { Link, NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { btnRightIcon, languageIcon, logo, soundIcon } from 'constants/images';
import { colors } from 'styles/colors';
import { ButtonPrimary } from 'styles/components';
import { fontStyleXSmallBemiBold, fontStyleXXSmallDemiBold } from 'styles/typography';

interface SoundBtnProps {
  isactive: boolean;
}

interface LanguageBtnProps {
  language: string;
}

interface StyledNavLinkProps {
  icon: { active: string; noActive: string };
}

export const StyledHeader = styled.header`
  padding: 1.6rem 0;
  grid-column: 1/4;
  grid-row: 1/2;
  display: grid;
  grid-template-columns: 27rem 1fr 27rem;
  column-gap: 2.3rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  width: 11rem;
  height: 2.9rem;
  background: url(${logo}) no-repeat;
  background-size: contain;
`;

export const AuxiliaryButtons = styled.div`
  display: flex;
  column-gap: 0.57rem;
`;

export const SoundBtn = styled.button<SoundBtnProps>`
  position: relative;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  background: ${({ theme }) => theme.colors.bgSecondary};

  ::before {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    width: 1.6rem;
    height: 1.6rem;
    background: url(${({ isactive }) =>
      isactive ? `${soundIcon.active}` : `${soundIcon.noActive}`});
    background-repeat: no-repeat;
    background-size: contain;
    transform: translate(-50%, -50%);
    transition: ${({ theme }) => theme.transition};
  }
`;

export const LanguageBtn = styled.button<LanguageBtnProps>`
  position: relative;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  background: ${({ theme }) => theme.colors.bgSecondary};

  ::before {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    width: 1.6rem;
    height: 1.6rem;
    background: url(${({ language }) =>
      language === 'ru' ? `${languageIcon.ru}` : `${languageIcon.en}`});
    background-repeat: no-repeat;
    background-size: contain;
    transform: translate(-50%, -50%);
    transition: ${({ theme }) => theme.transition};
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
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}px;
  border: 1px solid ${({ theme }) => theme.colors.bgPrimary};
  transition: ${({ theme }) => theme.transition};

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

export const Controls = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

export const AuthBtn = styled(ButtonPrimary)`
  width: 16.8rem;
  padding: 0.93rem 0.85rem;

  ::after {
    background: url(${btnRightIcon}) no-repeat;
    background-size: contain;
    background-position: center;
  }

  :hover {
    padding: 0.93rem 1.21rem;

    ::after {
      right: 1.21rem;
    }
  }
`;
