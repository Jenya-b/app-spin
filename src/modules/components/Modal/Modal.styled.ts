import styled from 'styled-components';

import { closeModalIcon } from 'constants/images';
import { fontStyleXXLargeBold, fontStyleSmallBold } from 'styles/typography';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.7rem;
  background: ${({ theme }) => theme.colors.inputPrimary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
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
