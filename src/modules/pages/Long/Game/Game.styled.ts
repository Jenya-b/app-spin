import { forwardIcon } from 'constants/images';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  padding: 16px;
  display: flex;
  justify-content: space-between;
`;

export const GameBlock = styled.div`
  height: 100%;
  display: inline-block;
  padding: 10px;
  border-radius: 8px;
  background: #1d1d2c;
  width: 253px;
`;

export const InGameTitle = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const InGameList = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

export const InGameInfoText = styled.div`
  margin-top: 9px;
  font-size: 7px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
`;

export const InGameCount = styled.div`
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
`;

export const Form = styled.form`
  margin-top: 6px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;

  label:nth-child(2) {
    input {
      padding-left: 12px;
    }

    &::before {
      position: absolute;
      content: 'x';
      bottom: 13.5px;
      left: 22px;
      color: ${({ theme }) => theme.colors.textPrimary};
      font-size: 10px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.11px;
      text-transform: uppercase;
      z-index: 10;
    }
  }
`;

export const Lable = styled.label`
  position: relative;
  width: 70px;
  font-size: 10px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
`;

export const Input = styled.input`
  margin-top: 8px;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  font-variant-numeric: lining-nums proportional-nums;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: ${({ theme }) => theme.colors.inputPrimary};
  text-align: center;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const Button = styled.button`
  height: 40px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.buttonPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-variant-numeric: lining-nums proportional-nums;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 2px;

  span:nth-child(1) {
    font-size: 12px;
    text-transform: uppercase;
  }

  span:nth-child(2) {
    font-size: 8px;
  }
`;

export const TransferBlock = styled.div`
  display: flex;
  column-gap: 24px;
  align-items: center;
`;

export const TransferWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2px;
`;

export const TransferCount = styled.div`
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
`;

export const TransferInfo = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;

export const Icon = styled.div`
  background: url(${forwardIcon}) no-repeat;
  background-position: center;
  width: 24px;
  height: 24px;
`;
