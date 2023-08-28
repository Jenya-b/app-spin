import styled, { css } from 'styled-components';

import { transferIcon, walletIcon } from 'constants/images';
import { ButtonPrimary } from 'styles/components';
import {
  fontStyleMediumDemiBold,
  fontStyleSmallBold,
  fontStyleSmallDemiBold,
  fontStyleSmallNormal,
  fontStyleXSmallNormal,
} from 'styles/typography';
import { mainMediaPadding } from 'styles/fragments';

interface AnimationElemProps {
  active: boolean;
}

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  display: grid;
  grid-template: auto 1fr auto / 1fr;
  overflow-y: auto;

  @media (max-width: 1200px) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  @media (max-width: 1023px) {
    border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
    margin-bottom: auto;
  }
`;

export const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem 0px 2rem;

  ${mainMediaPadding}
`;

export const Title = styled.h2<AnimationElemProps>`
  position: relative;
  padding-left: ${({ active }) => (active ? '2.1rem' : '0px')};
  transition: ${({ theme }) => theme.transition};
  ${({ active }) => (active ? `${fontStyleMediumDemiBold}` : `${fontStyleSmallBold}`)};

  ::before {
    transition: ${({ theme }) => theme.transition};
    opacity: ${({ active }) => (active ? 1 : 0)};
    position: absolute;
    content: '';
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 1.6rem;
    height: 1.6rem;
    background: url(${walletIcon}) no-repeat;
    background-size: contain;
    background-position: center;
  }
`;

export const UpdateBtn = styled.div<AnimationElemProps>`
  svg {
    width: ${({ active }) => (active ? '1.5rem' : '1.15rem')};
    height: ${({ active }) => (active ? '1.5rem' : '1.15rem')};
    path {
      transition: ${({ theme }) => theme.transition};
      :hover {
        fill-opacity: 1;
      }
    }
  }
`;

export const MoneyBlock = styled.div`
  margin-top: 0.85rem;
  background: ${({ theme }) => theme.colors.bgTertiary};
  border-top-right-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
  border-top-left-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
  padding: 1.2rem 2rem;
  overflow-y: auto;

  ${mainMediaPadding}
`;

export const walletListCss = css`
  display: flex;
  flex-direction: column;
  row-gap: 1.8rem;

  @media (max-width: 1023px) {
    flex-direction: row;
    row-gap: 0rem;
    justify-content: space-between;
  }
`;

export const MoneyWrap = styled.div`
  position: relative;

  ::after {
    position: absolute;
    content: '';
    bottom: -1rem;
    width: 100%;
    height: 0.072rem;
    background: rgba(255, 255, 255, 0.02);
  }

  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const MoneyTitle = styled.h3<AnimationElemProps>`
  transition: ${({ theme }) => theme.transition};
  position: relative;
  ${({ active }) => (active ? `${fontStyleMediumDemiBold}` : `${fontStyleSmallBold}`)};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  column-gap: 0.7rem;
`;

export const Icon = styled.img<AnimationElemProps>`
  transition: ${({ theme }) => theme.transition};
  width: ${({ active }) => (active ? '1.7rem' : '1.15rem')};
  height: ${({ active }) => (active ? '1.7rem' : '1.15rem')};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const MoneyCount = styled.div`
  margin-top: 0.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  & div:nth-child(2) {
    text-align: center;
  }

  & div:nth-child(3) {
    text-align: end;
  }

  @media (max-width: 1023px) {
    display: block;
    text-align: center;
  }
`;

export const CountWrap = styled.div``;

export const CountTitle = styled.h4<AnimationElemProps>`
  opacity: 0.5;
  ${({ active }) => (active ? `${fontStyleSmallNormal}` : `${fontStyleXSmallNormal}`)};
`;

export const CountCripto = styled.p<AnimationElemProps>`
  margin-top: 0.33rem;
  ${({ active }) => (active ? `${fontStyleMediumDemiBold}` : `${fontStyleSmallDemiBold}`)};
`;

export const CountUsd = styled.p<AnimationElemProps>`
  margin-top: 0.33rem;
  display: ${({ active }) => (active ? 'block' : 'none')};
  opacity: 0.5;
  ${fontStyleXSmallNormal}
`;

export const ControlBlock = styled.div`
  padding: 0.7rem 2rem 1.7rem 2rem;
  background: ${({ theme }) => theme.colors.bgTertiary};

  ${mainMediaPadding}
`;

export const TransferBtn = styled(ButtonPrimary)`
  width: 100%;
  padding: 1.15rem 0.85rem;

  ::after {
    background: url(${transferIcon}) no-repeat;
    background-size: contain;
    background-position: center;
  }

  :hover {
    padding: 1.15rem 1.2rem;

    ::after {
      right: 1.2rem;
    }
  }
`;
