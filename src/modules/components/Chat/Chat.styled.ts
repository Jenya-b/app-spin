import styled, { css } from 'styled-components';

import { diamondIcon, infoIcon, inputBtnIcon, messageChatIcon } from 'constants/images';
import {
  fontStyleMediumDemiBold,
  fontStyleSmallBold,
  fontStyleSmallDemiBold,
  fontStyleXSmallNormal,
  fontStyleXXSmallBold,
} from 'styles/typography';
import { mainMediaPadding } from 'styles/fragments';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  display: grid;
  grid-template: auto 1fr auto / 1fr;
  overflow: auto;

  @media (max-width: 1200px) {
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  @media (max-width: 1200px) {
    border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  }
`;

export const TitleBlock = styled.div`
  padding: 1.5rem 2rem 0px 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mainMediaPadding}
`;

export const Title = styled.h2`
  position: relative;
  padding-left: 2.1rem;
  ${fontStyleMediumDemiBold}

  ::before {
    position: absolute;
    content: '';
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1.6rem;
    height: 1.6rem;
    background: url(${messageChatIcon}) no-repeat;
    background-size: contain;
    background-position: center;
  }
`;

export const ModalBtn = styled.button`
  position: relative;
  padding: 0.41rem 0.72rem 0.4rem 2rem;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  background: ${({ theme }) => theme.colors.buttonPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  ${fontStyleXXSmallBold}
  text-transform: uppercase;

  ::before {
    position: absolute;
    content: '';
    left: 0.72rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    background: url(${infoIcon}) no-repeat;
    background-position: center;
    background-size: contain;
  }
`;

export const MessageBlock = styled.div`
  margin-top: 0.85rem;
  background: ${({ theme }) => theme.colors.bgTertiary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
  padding: 1.2rem 2rem;
  overflow: auto;

  ${mainMediaPadding}
`;

export const ControlBlock = styled.div`
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  position: relative;
  width: 100%;
  height: 2.8rem;
`;

export const Input = styled.input`
  padding-left: 0.85rem;
  padding-right: 2.9rem;
  width: 100%;
  height: 100%;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  background: ${({ theme }) => theme.colors.inputPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: 'Raleway', sans-serif;
  ${fontStyleSmallDemiBold}
`;

export const InputBtn = styled.button`
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 1.6rem;
  height: 1.6rem;
  background: url(${inputBtnIcon}) no-repeat;
  background-position: center;
  background-size: contain;
`;

export const listMessageCss = css`
  display: flex;
  flex-direction: column;
  row-gap: 1.15rem;
`;

export const MessageWrap = styled.div`
  display: grid;
  grid-template-columns: 3rem 1fr;
  column-gap: 0.72rem;
`;

export const MessageIcon = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;
  background-color: rgba(255, 255, 255, 0.06);
  border-radius: 50%;

  ::before {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1.7rem;
    height: 1.7rem;
    background: url(${diamondIcon.orange}) no-repeat;
    background-position: center;
    background-size: contain;
  }
`;

export const MessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
`;

export const UserName = styled.div`
  ${fontStyleSmallBold}
`;

export const UserPost = styled.div`
  ${fontStyleXSmallNormal}
  line-height: 1.5;
`;

export const TimePost = styled.div`
  ${fontStyleXSmallNormal}
  opacity: 0.25;
`;
