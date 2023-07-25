import styled from 'styled-components';

import { settingIcon, infoIcon, card, chipIcon, copyIcon } from 'constants/images';

export const Main = styled.main`
  padding-top: 17px;
  margin-bottom: 12px;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
`;

export const Title = styled.h2`
  margin-left: 16px;
  padding-left: 20px;
  position: relative;
  font-size: 16px;
  font-weight: 700;
  line-height: normal;

  ::before {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    content: '';
    width: 16px;
    height: 16px;
    background: url(${settingIcon}) no-repeat;
    background-size: contain;
    background-position: center;
  }
`;

export const Wrapper = styled.div`
  padding: 16px;
  margin-top: 17px;
  background: ${({ theme }) => theme.colors.bgTertiary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
`;

export const Form = styled.form`
  display: grid;
  grid-template: auto 40px / repeat(2, 1fr);
  gap: 16px;
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 10px;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;

  p {
    span {
      margin-left: 5px;
      display: inline-block;
      width: 11px;
      height: 11px;
      background: url(${infoIcon}) no-repeat;
      background-size: contain;
      background-position: center;
      cursor: ${({ theme }) => theme.cursor};
    }
  }
`;

export const Input = styled.input`
  margin-top: 8px;
  height: 40px;
  padding-left: 12px;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}px;
  background: ${({ theme }) => theme.colors.inputPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 10px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.11px;
`;

export const InfoBlock = styled.div`
  background: url(${card}) no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}px;
  border: 1px solid rgba(255, 255, 255, 0.02);
  display: grid;
  grid-template: 84px 1fr / 1fr;
`;

export const UserInfo = styled.div`
  position: relative;
  padding: 0 16px;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}px;
  border: 1px solid rgba(255, 255, 255, 0.02);
  display: flex;
  align-items: center;
  justify-content: end;
  column-gap: 24px;

  ::before {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    content: '';
    width: 42px;
    height: 30px;
    background: url(${chipIcon}) no-repeat;
  }
`;

export const UserInfoTitle = styled.p`
  font-size: 8px;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
`;

export const UserInfoSubtitle = styled.p`
  margin-top: 2px;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 10px;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  display: flex;
  column-gap: 7px;
`;

export const ReferalInfo = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const ReferalHref = styled.div`
  height: 40px;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}px;
  background: ${({ theme }) => theme.colors.bgPrimary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
`;

export const ReferalText = styled.p`
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 10px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.11px;
`;

export const ReferalBtn = styled.button`
  width: 18px;
  height: 18px;
  background: url(${copyIcon}) no-repeat;
`;

export const ReferalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'AberMono';
  font-size: 16px;
  font-weight: 700;
  line-height: normal;

  img {
    width: 60px;
    height: 17px;
    background-repeat: no-repeat;
    background-size: contain;
  }
`;

export const SubmitBtn = styled.button`
  grid-column: 1/3;
  background: ${({ theme }) => theme.colors.buttonPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}px;
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
`;
