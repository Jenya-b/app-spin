import styled, { css } from 'styled-components';

import { fontStyleSmallBold, fontStyleXSmallBold, fontStyleXXSmallBold } from 'styles/typography';

export const Wrapper = styled.div`
  padding: 16px;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  overflow: auto;
`;

export const ControlBlock = styled.div`
  height: 3.5rem;
  display: grid;
  grid-template-columns: 1fr 7.75rem 1fr;
  justify-items: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}px;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  ${fontStyleXSmallBold}
  text-transform: uppercase;

  &.blue {
    background: linear-gradient(
      180deg,
      rgba(148, 242, 255, 0.15) 0%,
      rgba(0, 59, 149, 0.15) 40.1%,
      rgba(0, 209, 255, 0.15) 100%
    );

    button {
      background: linear-gradient(182deg, #94f2ff 0%, #00d1ff 100%);
    }
  }
  &.orange {
    background: linear-gradient(
      180deg,
      rgba(255, 92, 0, 0.15) 0%,
      rgba(255, 55, 95, 0.15) 43.43%,
      rgba(255, 92, 0, 0.15) 100%
    );

    button {
      background: linear-gradient(182deg, #ff5c00 0%, #ff5c00 100%);
    }
  }
  &.purple {
    background: linear-gradient(
      181deg,
      rgba(170, 65, 251, 0.15) 0%,
      rgba(65, 63, 203, 0.15) 43.23%,
      rgba(187, 41, 255, 0.15) 100%
    );

    button {
      background: linear-gradient(181deg, #aa41fb 0%, #bb29ff 100%);
    }
  }

  img {
    background-position: center;
  }
`;

export const InfoBlock = styled.div`
  overflow: auto;
  padding: 16px;
  background: ${({ theme }) => theme.colors.bgTertiary};
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}px;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  display: grid;
  grid-template-rows: auto 1fr;
`;

export const Button = styled.button`
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}px;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  color: ${({ theme }) => theme.colors.textPrimary};
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${fontStyleXSmallBold}
  text-transform: uppercase;
`;
export const Long = styled.p`
  ${fontStyleSmallBold}
`;

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 24px;
  ${fontStyleXXSmallBold}
`;

export const InGameUser = styled.p`
  padding-left: 24px;
  position: relative;
  text-transform: uppercase;

  ::before {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }

  &.purple::before {
    background: linear-gradient(202deg, #aa41fb 0%, #bb29ff 100%);
  }

  &.blue::before {
    background: #00d1ff;
  }
  &.orange::before {
    background: rgba(255, 92, 0, 1);
  }
`;

export const Label = styled.label`
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

export const listRouletteData = css`
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 17px;
  height: 100%;

  li {
    overflow: auto;
    display: grid;
    grid-template-rows: auto 1fr;
    row-gap: 12px;
  }
`;

export const UserLogo = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: silver;
`;

export const UserName = styled.p`
  margin-left: 6px;
  margin-right: auto;
  ${fontStyleSmallBold}
`;

export const UserAmount = styled.p`
  &.purple {
    color: #bb29ff;
  }

  &.blue {
    color: #00d1ff;
  }
  &.orange {
    color: rgba(255, 92, 0, 1);
  }
`;

export const listRouletteUserData = css`
  overflow: auto;
  margin-top: 6px;

  li {
    display: flex;
    align-items: center;
    padding: 10px 0 10px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.02);
  }
`;

export const NoBids = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

export const NoBidsTitle = styled.p`
  margin-top: 8px;
  ${fontStyleXSmallBold}
  opacity: 0.5;
`;

export const NoBidsSubtitle = styled.p`
  margin-top: 4px;
  ${fontStyleXXSmallBold}
  opacity: 0.25;
`;
