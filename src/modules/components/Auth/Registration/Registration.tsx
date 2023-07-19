import { FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

import { Form, Input, Label } from '../Auth.styled';
import { AuthBtn, RegistrBtn } from './Registration.styled';

interface RegistrationProps {
  handleCloseRegistModal: () => void;
  handleOpenLoginModal: () => void;
}

export const Registration = ({
  handleCloseRegistModal,
  handleOpenLoginModal,
}: RegistrationProps) => {
  const { t } = useTranslation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleOpenRegModal = () => {
    handleCloseRegistModal();
    handleOpenLoginModal();
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
        <Label>
          {t('repeatPassword')}
          <Input placeholder={t('placeholderPassword')} />
        </Label>
        <RegistrBtn>{t('registration')}</RegistrBtn>
      </Form>
      <AuthBtn onClick={handleOpenRegModal}>{t('authorization')}</AuthBtn>
    </>
  );
};
