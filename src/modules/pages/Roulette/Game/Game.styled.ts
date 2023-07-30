import { gameUserIcon } from 'constants/images';
import styled, { css } from 'styled-components';
import { fontStyleXXSmallBold } from 'styles/typography';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
`;

export const GameBlock = styled.div``;

export const TransferBlock = styled.div`
  padding: 16px;
  background: ${({ theme }) => theme.colors.bgTertiary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`;

export const ImageWrap = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.bgTertiary};
  border-radius: 50%;
  cursor: ${({ theme }) => theme.cursor};

  img {
    width: 1.6rem;
    height: 1.6rem;
  }

  &.active {
    border: 2px solid rgb(49, 93, 241);
  }
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 24px;
`;

export const InGameUser = styled.p`
  padding-left: 24px;
  position: relative;
  ${fontStyleXXSmallBold}
  text-transform: uppercase;

  ::before {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    content: '';
    width: 16px;
    height: 16px;
    background: url(${gameUserIcon}) no-repeat;
  }
`;

export const Label = styled.label`
  ${fontStyleXXSmallBold}
  text-transform: uppercase;
`;

export const Input = styled.input`
  margin-left: 6px;
  padding-left: 10px;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}px;
  color: ${({ theme }) => theme.colors.textPrimary};
  background: rgba(255, 255, 255, 0.05);
  height: 20px;
  width: 60px;
`;

export const criptoListCss = css`
  display: flex;
  column-gap: 4px;
`;
