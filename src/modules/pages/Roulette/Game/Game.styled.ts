import { diamondIcon, gameUserIcon, pointerIcon } from 'constants/images';
import styled, { css } from 'styled-components';
import { fontStyleXXSmallBold } from 'styles/typography';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  overflow: auto;
`;

export const GameBlock = styled.div`
  overflow: auto;
`;

export const Roulette = styled.div`
  position: relative;
  padding: 16px 16px 0 16px;
  overflow: auto;
`;

export const RouletteWrap = styled.div`
  /* position: relative; */
  padding: 4px 0;
  background: ${({ theme }) => theme.colors.bgPrimary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
  overflow: auto;
`;

export const Pointer = styled.div`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  width: 15px;
  height: 20px;
  background: url(${pointerIcon}) no-repeat;
`;

export const Slider = styled.div`
  position: relative;
  transform: translateX(-25px);
  display: inline-flex;
  align-items: center;
  column-gap: 4px;

  @keyframes go-left-right {
    from {
      right: 0px;
    }
    to {
      right: calc(100% - 50px);
    }
  }
  animation: go-left-right 4s infinite alternate;
`;

export const Slide = styled.div`
  position: relative;
  width: 62px;
  height: 62px;
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}px;

  ::before {
    position: absolute;
    content: '';
    width: 34px;
    height: 34px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  &.blue {
    background: linear-gradient(
      180deg,
      rgba(148, 242, 255, 0.15) 0%,
      rgba(0, 59, 149, 0.15) 40.1%,
      rgba(0, 209, 255, 0.15) 100%
    );
    ::before {
      background: url(${diamondIcon.blue});
    }
  }
  &.orange {
    background: linear-gradient(
      180deg,
      rgba(255, 92, 0, 0.15) 0%,
      rgba(255, 55, 95, 0.15) 43.43%,
      rgba(255, 92, 0, 0.15) 100%
    );
    ::before {
      background: url(${diamondIcon.orange});
    }
  }

  &.purple {
    background: linear-gradient(
      181deg,
      rgba(170, 65, 251, 0.15) 0%,
      rgba(65, 63, 203, 0.15) 43.23%,
      rgba(187, 41, 255, 0.15) 100%
    );
    ::before {
      background: url(${diamondIcon.purple});
    }
  }
`;

export const TransferBlock = styled.div`
  margin-top: 13px;
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
