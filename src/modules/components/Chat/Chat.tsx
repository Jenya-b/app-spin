import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Wrapper,
  ControlBlock,
  MessageBlock,
  TitleBlock,
  Title,
  ModalBtn,
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
import { IChatData } from 'data/chat';
import { List } from '../List/List';
import { getRandomIntInclusive } from 'utils/randomInt';
import { useModal } from 'hooks/useModal';
import { BasicModal } from '../Modal/Modal';
import { ChatRules } from '../Modal/ChatRules/ChatRules';

interface ChatProps {
  chatData: IChatData[];
}

export const Chat = ({ chatData }: ChatProps) => {
  const { t } = useTranslation();
  const [messageData, setMessageData] = useState<IChatData[]>(chatData);
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = messagesRef.current?.querySelectorAll('li');
    if (!(list && list.length)) return;

    const lastItem = list[list?.length - 1];
    lastItem.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }, [messageData]);

  useEffect(() => {
    const interval = setInterval(updateMessage, 2000);
    return () => clearInterval(interval);
  }, []);

  const updateMessage = () =>
    setMessageData((state) => [...state, state[getRandomIntInclusive(0, state.length - 1)]]);

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
        <ModalBtn onClick={openModal}>{t('chatRules')}</ModalBtn>
        <BasicModal open={isOpenModal} handleClose={closeModal}>
          <>
            <ChatRules handleClose={closeModal} />
          </>
        </BasicModal>
      </TitleBlock>
      <MessageBlock ref={messagesRef}>
        <List data={messageData} renderItem={renderItem} styles={listMessageCss} />
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
