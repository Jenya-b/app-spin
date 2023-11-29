import styled from 'styled-components';

import { fontStyleSmallBold, fontStyleXXSmallNormal } from 'styles/typography';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  background: ${({ theme }) => theme.colors.bgTertiary};
  width: auto;

  @media (max-width: 1200px) {
    padding: 0;
    border-radius: none;
    background: none;
    grid-row: 1/2;
  }

  @media (max-width: 767px) {
    grid-row: 2/3;
    grid-column: 1/3;
  }
`;

export const Title = styled.div`
  ${fontStyleSmallBold}

  @media (max-width: 767px) {
    display: none;
  }
`;

export const List = styled.div`
  margin-top: 0.72rem;
  display: flex;
  column-gap: 0.72rem;
  justify-content: space-between;

  img {
    width: 1.43rem;
    height: 1.43rem;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }

  @media (max-width: 767px) {
    text-align: center;
  }
`;

export const InfoText = styled.div`
  margin-top: 0.7rem;
  text-transform: uppercase;
  text-align: left;
  ${fontStyleXXSmallNormal}
`;

export const Count = styled.div`
  margin-top: 0.2rem;
  text-transform: uppercase;
  text-align: left;
  ${fontStyleSmallBold}
`;
