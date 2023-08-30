import styled from 'styled-components';

import { closeModalIcon } from 'constants/images';
import { fontStyleXXLargeBold, fontStyleSmallBold, fontStyleXSmallBold } from 'styles/typography';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.7rem;
  background: ${({ theme }) => theme.colors.inputPrimary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
  overflow: hidden;

  @media (max-width: 479px) {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translate(0, 0);
    border-radius: 0;
    padding: 1.7rem 1rem;
  }
`;

export const CloseModalBtn = styled.button`
  position: absolute;
  top: 1.7rem;
  right: 1.7rem;
  width: 1.7rem;
  height: 1.7rem;
  background: url(${closeModalIcon}) no-repeat;
  background-position: center;
  background-size: contain;
`;

export const Title = styled.h2`
  ${fontStyleXXLargeBold}
  text-transform: uppercase;
  text-align: center;
`;

export const Subtitle = styled.h3`
  margin-top: 0.5rem;
  opacity: 0.75;
  ${fontStyleSmallBold}
  text-transform: uppercase;
  text-align: center;
`;

export const Info = styled.p`
  padding: 0 2rem;
  margin-top: 0.4rem;
  color: rgba(255, 255, 255, 0.75);
  ${fontStyleXSmallBold}
  line-height: normal;
  text-align: center;
`;
