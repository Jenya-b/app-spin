import { useEffect, useState } from 'react';
import { MessageFromChat } from 'services/api/chat';

export const useChatSocket = () => {
  const [messageData, setMessageData] = useState<MessageFromChat[]>([]);

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

  return messageData;
};
