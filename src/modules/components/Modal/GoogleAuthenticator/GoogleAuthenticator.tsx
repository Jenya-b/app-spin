import { useTranslation } from 'react-i18next';

import { Wrapper, Button, Input, InputsWrap } from './GoogleAuthenticator.styled';
import { CloseModalBtn, Subtitle, Title } from '../Modal.styled';

interface GoogleAuthenticatorProps {
  handleClose: () => void;
}

export const GoogleAuthenticator = ({ handleClose }: GoogleAuthenticatorProps) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <CloseModalBtn onClick={handleClose} />
      <Title>
        <p>google</p>
        authenticator
      </Title>
      <Subtitle>{t('googleAuthInfo')}</Subtitle>
      <InputsWrap>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </InputsWrap>
      <Button>{t('continue')}</Button>
    </Wrapper>
  );
};
