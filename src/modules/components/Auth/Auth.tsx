import { CloseModalBtn } from 'styles/components';
import { Wrapper, Subtitle, Title, OtherAuth, OtherSubtitle, OtherTitle } from './Auth.styled';

interface AuthProps {
  children: JSX.Element;
  title: string;
  subtitle: string;
  closeModal: () => void;
}

export const Auth = ({ title, subtitle, closeModal, children }: AuthProps) => {
  return (
    <Wrapper>
      <CloseModalBtn onClick={closeModal} />
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      {children}
      <OtherAuth to={'#'}>
        <OtherSubtitle>Authorization</OtherSubtitle>
        <OtherTitle>metamask</OtherTitle>
      </OtherAuth>
    </Wrapper>
  );
};
