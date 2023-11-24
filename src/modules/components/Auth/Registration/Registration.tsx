import { FormEvent, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Form, Input, Label } from '../Auth.styled';
import { AuthBtn, RegistrBtn } from './Registration.styled';
import { useRegistrationMutation } from 'services';
import { Loader } from 'modules/components/Loader/Loader';

interface RegistrationProps {
  handleCloseRegistModal: () => void;
  handleOpenLoginModal: () => void;
}

export const Registration = ({
  handleCloseRegistModal,
  handleOpenLoginModal,
}: RegistrationProps) => {
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [fetchReg, { isLoading, isSuccess }] = useRegistrationMutation();

  useEffect(() => {
    if (isSuccess) {
      handleCloseRegistModal();
    }
  }, [isSuccess]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== repeatPassword) {
      return;
    }

    fetchReg({ nickname, password, username });
  };

  const handleOpenRegModal = () => {
    handleCloseRegistModal();
    handleOpenLoginModal();
  };

  return (
    <>
      {isLoading && <Loader />}
      <Form onSubmit={handleSubmit}>
        <Label>
          {t('username')}
          <Input
            placeholder={t('placeholderUsername')}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Label>
        <Label>
          {t('login')}
          <Input
            placeholder={t('placeholderLogin')}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
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
        <Label>
          {t('repeatPassword')}
          <Input
            placeholder={t('placeholderPassword')}
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </Label>
        <RegistrBtn>{t('registration')}</RegistrBtn>
      </Form>
      <AuthBtn onClick={handleOpenRegModal}>{t('authorization')}</AuthBtn>
    </>
  );
};
