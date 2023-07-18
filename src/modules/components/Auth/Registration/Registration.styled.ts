import styled from 'styled-components';

import { ButtonPrimary } from 'styles/components';
import { btnPlusIcon, btnRightIcon } from 'constants/images';

export const AuthBtn = styled(ButtonPrimary)`
  width: 100%;
  padding: 17px 12px;
  background: rgba(255, 255, 255, 0.05);

  ::after {
    background: url(${btnRightIcon}) no-repeat;
  }

  :hover {
    padding: 17px 17px;

    ::after {
      right: 17px;
    }
  }
`;

export const RegistrBtn = styled(ButtonPrimary)`
  width: 100%;
  padding: 17px 12px;

  ::after {
    background: url(${btnPlusIcon}) no-repeat;
    background-size: contain;
  }

  :hover {
    padding: 17px 17px;

    ::after {
      right: 17px;
    }
  }
`;
