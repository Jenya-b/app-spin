import styled from 'styled-components';
import { colors } from 'styles/colors';
import { fontStyleXSmallBold, fontStyleXXSmallBold } from 'styles/typography';

export const Wrapper = styled.div`
  display: flex;
  column-gap: 0.5rem;
  row-gap: 0.2rem;
`;

export const Signal = styled.div`
  grid-row: 1/3;
  display: flex;
  column-gap: 0.2rem;
  align-items: center;

  span {
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: rgba(91, 201, 87, 0.15);
  }
`;

export const Info = styled.div`
  color: ${colors.green200};
  text-transform: uppercase;

  p:first-child {
    ${fontStyleXSmallBold}
  }

  p:last-child {
    ${fontStyleXXSmallBold}
    opacity: 0.25;
  }
`;
