import styled from 'styled-components';

import { languageIcon, soundIcon } from 'constants/images';

interface SoundBtnProps {
  isactive: boolean;
}

interface LanguageBtnProps {
  language: string;
}

export const Wrapper = styled.div`
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
