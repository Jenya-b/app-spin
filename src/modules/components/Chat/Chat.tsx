import { useEffect, useRef } from 'react';
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
  listMessageCss,
  MessageIcon,
  MessageInfo,
  MessageWrap,
  TimePost,
  UserName,
  UserPost,
} from './Chat.styled';
import { IChatData, chatData } from 'data/chat';
import { List } from '../List/List';

export const Chat = () => {
  const { t } = useTranslation();
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = messagesRef.current?.querySelectorAll('li');
    if (!(list && list.length)) return;

    const lastItem = list[list?.length - 1];
    lastItem.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }, []);

  const renderItem = ({ message, time, username }: IChatData) => (
    <MessageWrap>
      <MessageIcon />
      <MessageInfo>
        <UserName>{username}</UserName>
        <UserPost>{message}</UserPost>
        <TimePost>{time}</TimePost>
      </MessageInfo>
    </MessageWrap>
  );

  return (
    <Wrapper>
      <TitleBlock>
        <Title>{t('chat')}</Title>
        <Info>{t('chatRules')}</Info>
      </TitleBlock>
      <MessageBlock ref={messagesRef}>
        <List data={chatData} renderItem={renderItem} styles={listMessageCss} />
      </MessageBlock>
      <ControlBlock>
        <Label>
          <Input placeholder={t('placeholderMessage')} />
          <InputBtn />
        </Label>
      </ControlBlock>
    </Wrapper>
  );
};
