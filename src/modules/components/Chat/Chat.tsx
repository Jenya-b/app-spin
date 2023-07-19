import { useTranslation } from 'react-i18next';

import {
  Wrapper,
  ControlBlock,
  MessageBlock,
  TitleBlock,
  Title,
  Info,
  Input,
  InputBtn,
  Label,
} from './Chat.styled';

export const Chat = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <TitleBlock>
        <Title>{t('chat')}</Title>
        <Info>{t('chatRules')}</Info>
      </TitleBlock>
      <MessageBlock></MessageBlock>
      <ControlBlock>
        <Label>
          <Input placeholder={t('placeholderMessage')} />
          <InputBtn />
        </Label>
      </ControlBlock>
    </Wrapper>
  );
};
