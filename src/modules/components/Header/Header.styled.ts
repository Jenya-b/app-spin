import { Link, NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { btnRightIcon, languageIcon, logo, soundIcon } from 'constants/images';
import { colors } from 'styles/colors';
import { ButtonPrimary } from 'styles/components';
import { fontStyleXXSmallDemiBold } from 'styles/typography';

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
  grid-column: 1/4;
  grid-row: 1/2;
  display: grid;
  grid-template-columns: 270px 1fr 270px;
  column-gap: 32px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  width: 110px;
  height: 31px;
  background: url(${logo}) no-repeat;
`;

export const AuxiliaryButtons = styled.div`
  display: flex;
  column-gap: 8px;
`;

export const SoundBtn = styled.button<SoundBtnProps>`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 32px;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  background: ${({ theme }) => theme.colors.bgSecondary};

  ::before {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    width: 18px;
    height: 18px;
    background: url(${({ isactive }) =>
      isactive ? `${soundIcon.active}` : `${soundIcon.noActive}`});
    transform: translate(-50%, -50%);
    transition: ${({ theme }) => theme.transition};
  }
`;

export const LanguageBtn = styled.button<LanguageBtnProps>`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 32px;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  background: ${({ theme }) => theme.colors.bgSecondary};

  ::before {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    width: 18px;
    height: 18px;
    background: url(${({ language }) =>
      language === 'ru' ? `${languageIcon.ru}` : `${languageIcon.en}`});
    transform: translate(-50%, -50%);
    transition: ${({ theme }) => theme.transition};
  }
`;

export const StyledNavLink = styled(NavLink)<StyledNavLinkProps>`
  position: relative;
  padding: 3px;
  display: flex;
  align-items: end;
  justify-content: center;
  width: 100%;
  height: 100%;
  ${fontStyleXXSmallDemiBold}
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.bgPrimary};
  transition: ${({ theme }) => theme.transition};

  ::before {
    width: 24px;
    height: 24px;
    position: absolute;
    content: '';
    top: 4px;
    left: 50%;
    transform: translateX(-50%);
    background: url(${({ icon }) => icon.noActive}) no-repeat;
    transition: ${({ theme }) => theme.transition};
  }

  &.active,
  :hover {
    border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
    background: ${({ theme }) => theme.colors.bgSecondary};

    ::before {
      background: url(${({ icon }) => icon.active}) no-repeat;
    }
  }
`;

export const navMenuListCss = css`
  display: flex;
  column-gap: 10px;

  li {
    width: 64px;
    height: 48px;
  }
`;

export const socialMenuListCss = css`
  display: flex;
  align-items: center;
  column-gap: 12px;

  li {
    svg {
      :hover {
        path {
          transition: all 0.3s;
          fill-opacity: 1;
        }
      }
    }
  }
`;

export const SettingLink = styled(Link)`
  position: relative;
  width: 21px;
  height: 21px;
  transition: ${({ theme }) => theme.transition};

  :hover {
    transform: rotate(-90deg);

    svg {
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
  column-gap: 12px;
`;

export const AuthBtn = styled(ButtonPrimary)`
  width: 235px;
  padding: 13px 12px;

  ::after {
    background: url(${btnRightIcon}) no-repeat;
  }

  :hover {
    padding: 13px 17px;

    ::after {
      right: 17px;
    }
  }
`;
