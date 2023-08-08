import styled from 'styled-components';

import {
  fontStyleSmallBold,
  fontStyleXSmallBemiBold,
  fontStyleXSmallNormal,
} from 'styles/typography';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
  background: ${({ theme }) => theme.colors.bgTertiary};
  width: auto;
`;

export const Title = styled.div`
  ${fontStyleSmallBold}
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
`;

export const InfoText = styled.div`
  margin-top: 0.6rem;
  ${fontStyleXSmallNormal}
  text-transform: uppercase;
`;

export const Count = styled.div`
  ${fontStyleXSmallBemiBold}
  text-transform: uppercase;
`;
