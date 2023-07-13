import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { languageIcon, logo, soundIcon } from 'constants/images';

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
    transition: all 0.3s;
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
    transition: all 0.3s;
  }
`;

export const Nav = styled.nav``;

export const StyledNavLink = styled(NavLink)<StyledNavLinkProps>`
  position: relative;
  padding: 3px;
  display: flex;
  align-items: end;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 10px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.bgPrimary};

  ::before {
    width: 24px;
    height: 24px;
    position: absolute;
    content: '';
    top: 4px;
    left: 50%;
    transform: translateX(-50%);
    background: url(${({ icon }) => icon.noActive}) no-repeat;
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
