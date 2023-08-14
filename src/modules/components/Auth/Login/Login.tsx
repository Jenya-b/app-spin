import { FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Form, Input, Label } from '../Auth.styled';
import { AuthBtn, RegistrBtn, RestorPassLink } from './Login.styled';
import { BasicModal } from 'modules/components/Modal/Modal';
import { GoogleAuthenticator } from 'modules/components/Modal/GoogleAuthenticator/GoogleAuthenticator';

interface LoginProps {
  handleCloseLoginModal: () => void;
  handleOpenRegistModal: () => void;
}

export const Login = ({ handleCloseLoginModal, handleOpenRegistModal }: LoginProps) => {
  const [isOpenChildModal, setOpenChildModal] = useState(false);
  const { t } = useTranslation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpenChildModal(true);
  };

  const handleOpenRegModal = () => {
    handleCloseLoginModal();
    handleOpenRegistModal();
  };

  const handleCloseChildModal = () => setOpenChildModal(false);

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
        <BasicModal open={isOpenChildModal} handleClose={handleCloseChildModal}>
          <>
            <GoogleAuthenticator handleClose={handleCloseChildModal} />
          </>
        </BasicModal>
      </Form>
      <RegistrBtn onClick={handleOpenRegModal}>{t('registration')}</RegistrBtn>
    </>
  );
};
