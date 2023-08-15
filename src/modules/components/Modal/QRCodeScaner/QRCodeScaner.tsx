import { useTranslation } from 'react-i18next';

import { CloseModalBtn, Subtitle, Title } from '../Modal.styled';
import {
  Wrapper,
  Button,
  Input,
  InputsWrap,
  StyledQRCodeSVG,
  QRCodeWrap,
} from './QRCodeScaner.styled';

interface QRCodeScanerProps {
  closeModal: () => void;
}

export const QRCodeScaner = ({ closeModal }: QRCodeScanerProps) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <CloseModalBtn onClick={closeModal} />
      <Title>scan qr code</Title>
      <QRCodeWrap>
        <StyledQRCodeSVG value="https://reactjs.org/" />
      </QRCodeWrap>
      <Subtitle>{t('enterCodeFromApp')}</Subtitle>
      <InputsWrap>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </InputsWrap>
      <Button>{t('connect')}</Button>
    </Wrapper>
  );
};
