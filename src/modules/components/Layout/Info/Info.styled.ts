import styled from 'styled-components';

import { ButtonPrimary } from 'styles/components';
import { btnRightIcon } from 'constants/images';
import { mainMediaSize } from 'styles/fragments';

export const Wrapper = styled.div`
  height: 100vh;
  padding: 0 2.3rem 1.43rem 2.3rem;
  display: grid;
  grid-template: auto 1fr / 27rem 1fr 27rem;
  column-gap: 2.3rem;

  ${mainMediaSize}

  @media (max-width: 1650px) {
    padding: 0 1.5rem 1.43rem 1.5rem;
  }

  @media (max-width: 1500px) {
    padding: 0 1rem 1rem 1rem;
  }

  @media (max-width: 1200px) {
    padding: 0;
  }
`;

export const Main = styled.main`
  position: relative;
  grid-column: 1/3;
  grid-row: 2/3;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  padding: 1.5rem 2rem;

  @media (max-width: 1200px) {
    background: none;
    border-radius: none;
    border: none;
  }
`;

export const NavWrap = styled.nav`
  position: absolute;
  top: 1.5rem;
  right: 2rem;
`;

export const Button = styled(ButtonPrimary)`
  position: absolute;
  left: 2rem;
  bottom: 1.5rem;
  width: 16.8rem;
  padding: 0.93rem 0.85rem;

  ::after {
    background: url(${btnRightIcon}) no-repeat;
    background-size: contain;
    background-position: center;
  }

  :hover {
    padding: 0.93rem 1.21rem;

    ::after {
      right: 1.21rem;
    }
  }
`;
