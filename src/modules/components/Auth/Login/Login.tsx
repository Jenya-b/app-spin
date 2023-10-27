import { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Form, Input, Label } from '../Auth.styled';
import { AuthBtn, RegistrBtn, RestorPassLink } from './Login.styled';
import { BasicModal } from 'modules/components/Modal/Modal';
import { GoogleAuthenticator } from 'modules/components/Modal/GoogleAuthenticator/GoogleAuthenticator';
import { useModal } from 'hooks/useModal';
import { authUser } from 'store/reducers/userSlice';
import { useAppDispatch } from 'store';
import { useSignInMutation } from 'services';

interface LoginProps {
  handleCloseLoginModal: () => void;
  handleOpenRegistModal: () => void;
}

export const Login = ({ handleCloseLoginModal, handleOpenRegistModal }: LoginProps) => {
  const dispatch = useAppDispatch();
  const [isOpenChildModal, openChildModal, closeChildModal] = useModal(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { t } = useTranslation();
  const [fetchSignIn] = useSignInMutation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!(username && password)) {
      return;
    }

    fetchSignIn({ username, password });
  };

  const handleOpenRegModal = () => {
    handleCloseLoginModal();
    handleOpenRegistModal();
  };

  const handleLogin = () => {
    dispatch(authUser(true));
    closeChildModal();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          {t('email')}
          <Input
            placeholder={t('placeholderEmail')}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Label>
        <Label>
          {t('password')}
          <Input
            placeholder={t('placeholderPassword')}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Label>
        <RestorPassLink to={'#'}>{t('forgotPassword')}</RestorPassLink>
        <AuthBtn>{t('authorization')}</AuthBtn>
        <BasicModal open={isOpenChildModal} handleClose={closeChildModal}>
          <>
            <GoogleAuthenticator handleLogin={handleLogin} handleClose={closeChildModal} />
          </>
        </BasicModal>
      </Form>
      <RegistrBtn onClick={handleOpenRegModal}>{t('registration')}</RegistrBtn>
    </>
  );
};
