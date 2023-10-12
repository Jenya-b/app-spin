import { useTranslation } from 'react-i18next';

import { CloseModalBtn } from 'styles/components';
import { Wrapper, Subtitle, Title, OtherAuth, OtherSubtitle, OtherTitle } from './Auth.styled';

interface AuthProps {
  children: JSX.Element;
  title: string;
  subtitle: string;
  closeModal: () => void;
}

export const Auth = ({ title, subtitle, closeModal, children }: AuthProps) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <CloseModalBtn onClick={closeModal} />
      <Title>{t(title)}</Title>
      <Subtitle>{t(subtitle)}!</Subtitle>
      {children}
      <OtherAuth to={'#'}>
        <OtherSubtitle>{t('authorization')}</OtherSubtitle>
        <OtherTitle>metamask</OtherTitle>
      </OtherAuth>
    </Wrapper>
  );
};
