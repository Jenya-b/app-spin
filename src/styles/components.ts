import styled from 'styled-components';

import { closeModalIcon } from 'constants/images';
import { fontStyleSmallDemiBold } from './typography';

export const ButtonPrimary = styled.button`
  position: relative;
  text-align: left;
  color: ${({ theme }) => theme.colors.textPrimary};
  ${fontStyleSmallDemiBold}
  text-transform: uppercase;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.buttonPrimary};
  transition: ${({ theme }) => theme.transition};

  ::after {
    width: 1.3rem;
    height: 1.3rem;
    position: absolute;
    content: '';
    top: 50%;
    right: 0.85rem;
    transform: translateY(-50%);
    transition: ${({ theme }) => theme.transition};
  }
`;

export const CloseModalBtn = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 24px;
  height: 24px;
  background: url(${closeModalIcon}) no-repeat;
  background-position: center;
`;
