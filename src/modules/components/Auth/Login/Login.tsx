import { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { Form, Input, Label } from '../Auth.styled';
import { AuthBtn, RegistrBtn, RestorPassLink } from './Login.styled';
import { BasicModal } from 'modules/components/Modal/Modal';
import { GoogleAuthenticator } from 'modules/components/Modal/GoogleAuthenticator/GoogleAuthenticator';
import { useModal } from 'hooks/useModal';
import { authUser } from 'store/reducers/userSlice';
import { useAppDispatch } from 'store';

interface LoginProps {
  handleCloseLoginModal: () => void;
  handleOpenRegistModal: () => void;
}

export const Login = ({ handleCloseLoginModal, handleOpenRegistModal }: LoginProps) => {
  const dispatch = useAppDispatch();
  const [isOpenChildModal, openChildModal, closeChildModal] = useModal(false);
  const { t } = useTranslation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    openChildModal();
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
          {t('login')}
          <Input placeholder={t('placeholderLogin')} />
        </Label>
        <Label>
          {t('password')}
          <Input placeholder={t('placeholderPassword')} />
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
