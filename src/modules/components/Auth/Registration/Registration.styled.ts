import styled from 'styled-components';

import { ButtonPrimary } from 'styles/components';
import { btnPlusIcon, btnRightIcon } from 'constants/images';

export const AuthBtn = styled(ButtonPrimary)`
  width: 100%;
  padding: 1.2rem 0.85rem;
  background: rgba(255, 255, 255, 0.05);

  ::after {
    background: url(${btnRightIcon}) no-repeat;
    background-size: contain;
    background-position: center;
  }

  :hover {
    padding: 1.2rem 1.2rem;

    ::after {
      right: 1.2rem;
    }
  }
`;

export const RegistrBtn = styled(ButtonPrimary)`
  width: 100%;
  padding: 1.2rem 0.85rem;

  ::after {
    background: url(${btnPlusIcon}) no-repeat;
    background-size: contain;
    background-position: center;
  }

  :hover {
    padding: 1.2rem 1.2rem;

    ::after {
      right: 1.2rem;
    }
  }
`;
