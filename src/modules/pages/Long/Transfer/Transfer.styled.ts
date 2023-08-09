import styled from 'styled-components';

import { forwardIcon } from 'constants/images';
import { fontStyleMediumBold, fontStyleXSmallBold } from 'styles/typography';

export const TransferBlock = styled.div`
  display: flex;
  column-gap: 1.7rem;
  align-items: center;
`;

export const TransferWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.15rem;
`;

export const TransferCount = styled.div`
  ${fontStyleMediumBold}
  text-transform: uppercase;
`;

export const TransferInfo = styled.div`
  color: rgba(255, 255, 255, 0.5);
  ${fontStyleXSmallBold}
  text-transform: uppercase;
`;

export const Icon = styled.div`
  background: url(${forwardIcon}) no-repeat;
  background-position: center;
  background-size: contain;
  width: 1.7rem;
  height: 1.7rem;
`;
