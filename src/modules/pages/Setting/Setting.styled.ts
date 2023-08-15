import styled from 'styled-components';

import { settingIcon, infoIcon, card, chipIcon, copyIcon } from 'constants/images';
import {
  fontStyleMediumBold,
  fontStyleSmallDemiBold,
  fontStyleXSmallBemiBold,
  fontStyleXSmallBold,
  fontStyleXSmallNormal,
} from 'styles/typography';

export const Main = styled.main`
  overflow: auto;
  padding-top: 1.5rem;
  margin-bottom: 0.85rem;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  display: grid;
  grid-template-rows: auto 1fr;
`;

export const Title = styled.h2`
  margin-left: 2rem;
  padding-left: 1.5rem;
  position: relative;
  ${fontStyleMediumBold}

  ::before {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    content: '';
    width: 1.15rem;
    height: 1.15rem;
    background: url(${settingIcon}) no-repeat;
    background-size: contain;
    background-position: center;
  }
`;

export const Wrapper = styled.div`
  overflow: auto;
  padding: 1.5rem 2rem;
  margin-top: 1.2rem;
  background: ${({ theme }) => theme.colors.bgTertiary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
  display: grid;
  grid-template-rows: auto 1fr;
  row-gap: 1.15rem;
`;

export const Form = styled.form`
  display: grid;
  grid-template: auto 2.86rem / repeat(2, 1fr);
  gap: 1.15rem;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.3rem;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  ${fontStyleXSmallBold}
  text-transform: uppercase;

  p {
    span {
      margin-left: 0.36rem;
      display: inline-block;
      width: 0.85rem;
      height: 0.85rem;
      background: url(${infoIcon}) no-repeat;
      background-size: contain;
      background-position: center;
      cursor: ${({ theme }) => theme.cursor};
    }
  }
`;

export const Input = styled.input`
  margin-top: 0.6rem;
  height: 2.86rem;
  padding-left: 0.85rem;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  background: ${({ theme }) => theme.colors.inputPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-variant-numeric: lining-nums proportional-nums;
  ${fontStyleSmallDemiBold}
`;

export const InfoBlock = styled.div`
  background: url(${card}) no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  border: 1px solid rgba(255, 255, 255, 0.02);
  display: grid;
  grid-template: 6rem 1fr / 1fr;
`;

export const UserInfo = styled.div`
  position: relative;
  padding: 0 1.15rem;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  border: 1px solid rgba(255, 255, 255, 0.02);
  display: flex;
  align-items: center;
  justify-content: end;
  column-gap: 1.7rem;

  ::before {
    position: absolute;
    top: 50%;
    left: 1.15rem;
    transform: translateY(-50%);
    content: '';
    width: 3rem;
    height: 2.14rem;
    background: url(${chipIcon}) no-repeat;
    background-size: contain;
    background-position: center;
  }
`;

export const UserInfoTitle = styled.p`
  ${fontStyleXSmallNormal}
  text-transform: uppercase;
`;

export const UserInfoSubtitle = styled.p`
  margin-top: 0.15rem;
  ${fontStyleSmallDemiBold}
  text-transform: uppercase;
  display: flex;
  column-gap: 0.6rem;
`;

export const ReferalInfo = styled.div`
  padding: 0 1.15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ReferalHref = styled.div`
  position: relative;
  height: 2.85rem;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  background: ${({ theme }) => theme.colors.bgPrimary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.85rem;
  ${fontStyleXSmallBold}
  cursor: ${({ theme }) => theme.cursor};

  ::after {
    position: absolute;
    content: '';
    top: 50%;
    right: 0.85rem;
    transform: translateY(-50%);
    width: 1.3rem;
    height: 1.3rem;
    background: url(${copyIcon}) no-repeat;
    background-size: contain;
    background-position: center;
  }
`;

export const ReferalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'AberMono';
  ${fontStyleMediumBold}

  img {
    width: 4.28rem;
    height: 1.2rem;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

export const ControlBlock = styled.div`
  grid-column: 1/3;
`;

export const SubmitBtn = styled.button`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.buttonPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  ${fontStyleXSmallBemiBold}
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.72rem;
`;

export const TableBlock = styled.div`
  overflow: auto;
  display: grid;
  grid-template-rows: auto 1fr;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  border: 1px solid rgba(255, 255, 255, 0.02);
`;

export const Tabs = styled.div`
  padding: 0.85rem 0;
  display: flex;
  column-gap: 8px;
`;

export const TabBtn = styled.button`
  color: ${({ theme }) => theme.colors.textPrimary};
  ${fontStyleXSmallBold}
  text-transform: uppercase;
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  padding: 0.72rem 0.8rem;

  &.active {
    background: ${({ theme }) => theme.colors.buttonPrimary};
  }
`;
