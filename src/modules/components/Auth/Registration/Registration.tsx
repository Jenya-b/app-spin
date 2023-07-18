import { FormEvent } from 'react';

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
          login
          <Input placeholder="Enter your login" />
        </Label>
        <Label>
          password
          <Input placeholder="Enter your password" />
        </Label>
        <Label>
          repeat password
          <Input placeholder="Enter your password" />
        </Label>
        <RegistrBtn>registration</RegistrBtn>
      </Form>
      <AuthBtn onClick={handleOpenRegModal}>Authorization</AuthBtn>
    </>
  );
};
