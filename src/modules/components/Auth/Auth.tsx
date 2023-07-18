import {
  Wrapper,
  Form,
  Input,
  Label,
  Subtitle,
  Title,
  AuthBtn,
  RegistrBtn,
  OtherAuth,
  OtherSubtitle,
  OtherTitle,
  RestorPassLink,
} from './Auth.styled';

export const Auth = () => {
  return (
    <Wrapper>
      <Title>Authorization</Title>
      <Subtitle>welcome to spin!</Subtitle>
      <Form>
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
      <RegistrBtn>registration</RegistrBtn>
      <OtherAuth to={'#'}>
        <OtherSubtitle>Authorization</OtherSubtitle>
        <OtherTitle>metamask</OtherTitle>
      </OtherAuth>
    </Wrapper>
  );
};
