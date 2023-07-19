import { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { Form, Input, Label } from '../Auth.styled';
import { AuthBtn, RegistrBtn, RestorPassLink } from './Login.styled';

interface LoginProps {
  handleCloseLoginModal: () => void;
  handleOpenRegistModal: () => void;
}

export const Login = ({ handleCloseLoginModal, handleOpenRegistModal }: LoginProps) => {
  const { t } = useTranslation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleOpenRegModal = () => {
    handleCloseLoginModal();
    handleOpenRegistModal();
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
      </Form>
      <RegistrBtn onClick={handleOpenRegModal}>{t('registration')}</RegistrBtn>
    </>
  );
};
