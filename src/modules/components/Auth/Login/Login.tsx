import { FormEvent } from 'react';

import { Form, Input, Label } from '../Auth.styled';
import { AuthBtn, RegistrBtn, RestorPassLink } from './Login.styled';

interface LoginProps {
  handleCloseLoginModal: () => void;
  handleOpenRegistModal: () => void;
}

export const Login = ({ handleCloseLoginModal, handleOpenRegistModal }: LoginProps) => {
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
          login
          <Input placeholder="Enter your login" />
        </Label>
        <Label>
          password
          <Input placeholder="Enter your password" />
        </Label>
        <RestorPassLink to={'#'}>forgot password?</RestorPassLink>
        <AuthBtn>Authorization</AuthBtn>
      </Form>
      <RegistrBtn onClick={handleOpenRegModal}>registration</RegistrBtn>
    </>
  );
};
