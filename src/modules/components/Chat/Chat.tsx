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
import { List } from '../List/List';
import { useModal } from 'hooks/useModal';
import { BasicModal } from '../Modal/Modal';
import { ChatRules } from '../Modal/ChatRules/ChatRules';
import { MessageFromChat } from 'services/api/chat';
import { useAddMessageMutation } from 'services';
import { useAppSelector } from 'store';
import { userSelector } from 'store/selectors';

export const Chat = () => {
  const { t } = useTranslation();
  const [messageData, setMessageData] = useState<MessageFromChat[]>([]);
  const [currentMessage, setCurrentMessage] = useState<string>('');
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const { currentUser } = useAppSelector(userSelector);
  const messagesRef = useRef<HTMLDivElement>(null);
  const [fetchMessage] = useAddMessageMutation();

  useEffect(() => {
    const ws = new WebSocket(`${process.env.REACT_APP_WEB_SOCKET_URL}/chat/last_messages/ws`);

    ws.onopen = function () {
      console.log('ws opened');
    };

    ws.onmessage = function (event) {
      try {
        const json: { [key: string]: MessageFromChat } = JSON.parse(event.data);
        const messages = Object.values(json);
        setMessageData((state) => [...state, ...messages]);
      } catch {
        throw new Error();
      }
    };

    return () => ws.close();
  }, []);

  useEffect(() => {
    const list = messagesRef.current?.querySelectorAll('li');
    if (!(list && list.length)) return;

    const lastItem = list[list?.length - 1];
    lastItem.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }, [messageData]);

  const renderItem = ({ nickname, text, timestamp }: MessageFromChat) => (
    <MessageWrap key={timestamp}>
      <MessageIcon />
      <MessageInfo>
        <UserName>{nickname}</UserName>
        <UserPost>{text}</UserPost>
        <TimePost>{timestamp}</TimePost>
      </MessageInfo>
    </MessageWrap>
  );

  const handleSubmit = () => {
    if (!currentMessage) {
      return;
    }

    fetchMessage({ text: currentMessage });
    setCurrentMessage('');
  };

  const handleKeywordKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!currentMessage) {
      return;
    }

    if (e.key == 'Enter') {
      fetchMessage({ text: currentMessage });
      setCurrentMessage('');
    }
  };

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
          <Input
            disabled={!currentUser}
            placeholder={t('placeholderMessage')}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyDown={handleKeywordKeyPress}
            value={currentMessage}
            style={{ cursor: !currentUser ? 'not-allowed' : 'auto' }}
          />
          <InputBtn
            onClick={handleSubmit}
            disabled={!currentUser}
            style={{ cursor: !currentUser ? 'not-allowed' : 'pointer' }}
          />
        </Label>
      </ControlBlock>
    </Wrapper>
  );
};
