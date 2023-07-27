import styled, { css } from 'styled-components';

import { transferIcon, walletIcon } from 'constants/images';
import { ButtonPrimary } from 'styles/components';
import {
  fontStyleMediumDemiBold,
  fontStyleSmallBold,
  fontStyleSmallDemiBold,
  fontStyleXSmallBemiBold,
  fontStyleXSmallNormal,
  fontStyleXXSmallNormal,
} from 'styles/typography';

interface AnimationElemProps {
  active: boolean;
}

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  display: grid;
  grid-template: auto 1fr 60px / 1fr;
  overflow-y: auto;
`;

export const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px 0px 16px;
`;

export const Title = styled.h2<AnimationElemProps>`
  position: relative;
  padding-left: ${({ active }) => (active ? '22px' : '0px')};
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
    width: 18px;
    height: 18px;
    background: url(${walletIcon}) no-repeat;
    background-position: center;
  }
`;

export const UpdateBtn = styled.div<AnimationElemProps>`
  svg {
    width: ${({ active }) => (active ? '17px' : '12px')};
    height: ${({ active }) => (active ? '17px' : '12px')};
    path {
      transition: ${({ theme }) => theme.transition};
      :hover {
        fill-opacity: 1;
      }
    }
  }
`;

export const MoneyBlock = styled.div`
  margin-top: 12px;
  background: ${({ theme }) => theme.colors.bgTertiary};
  border-top-right-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
  border-top-left-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
  padding: 14px 16px;
  overflow-y: auto;
`;

export const walletListCss = css`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const MoneyWrap = styled.div`
  position: relative;

  ::after {
    position: absolute;
    content: '';
    bottom: -10px;
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.02);
  }
`;

export const MoneyTitle = styled.h3<AnimationElemProps>`
  transition: ${({ theme }) => theme.transition};
  position: relative;
  font-variant-numeric: lining-nums proportional-nums;
  ${({ active }) => (active ? `${fontStyleMediumDemiBold}` : `${fontStyleSmallBold}`)};
  letter-spacing: -0.132px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

export const Icon = styled.img<AnimationElemProps>`
  transition: ${({ theme }) => theme.transition};
  width: ${({ active }) => (active ? '24px' : '16px')};
  height: ${({ active }) => (active ? '24px' : '16px')};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const MoneyCount = styled.div`
  margin-top: 6px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  & div:nth-child(2) {
    text-align: center;
  }

  & div:nth-child(3) {
    text-align: end;
  }
`;

export const CountWrap = styled.div``;

export const CountTitle = styled.h4<AnimationElemProps>`
  opacity: 0.5;
  font-variant-numeric: lining-nums proportional-nums;
  ${({ active }) => (active ? `${fontStyleXSmallNormal}` : `${fontStyleXXSmallNormal}`)};
  letter-spacing: -0.099px;
`;

export const CountCripto = styled.p<AnimationElemProps>`
  margin-top: 4px;
  font-variant-numeric: lining-nums proportional-nums;
  ${({ active }) => (active ? `${fontStyleSmallDemiBold}` : `${fontStyleXSmallBemiBold}`)};
  letter-spacing: -0.132px;
`;

export const CountUsd = styled.p<AnimationElemProps>`
  margin-top: 4px;
  display: ${({ active }) => (active ? 'block' : 'none')};
  opacity: 0.5;
  font-variant-numeric: lining-nums proportional-nums;
  ${fontStyleXXSmallNormal}
  letter-spacing: -0.11px;
`;

export const ControlBlock = styled.div`
  padding: 6px 16px 14px 16px;
  background: ${({ theme }) => theme.colors.bgTertiary};
`;

export const TransferBtn = styled(ButtonPrimary)`
  width: 100%;
  padding: 13px 12px;

  ::after {
    background: url(${transferIcon}) no-repeat;
  }

  :hover {
    padding: 13px 17px;

    ::after {
      right: 17px;
    }
  }
`;
