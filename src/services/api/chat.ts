import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { RootState } from 'store';

interface MessageFromChat {
  user_id: number;
  text: string;
  timestamp: string;
}

interface Message {
  message_id: number;
  chat_id: number;
  user_id: number;
  text: string;
  timestamp: string;
}

export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).userReducer.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
        return headers;
      }
    },
  }),
  endpoints: (build) => ({
    getMessagesByChatId: build.query<{ [key: string]: MessageFromChat }, number>({
      query: (chatId) => ({
        url: `chat/msg_all/${chatId}`,
      }),
    }),
    getMessageById: build.query<Message, number>({
      query: (messageId) => ({
        url: `chat/message_id/${messageId}`,
      }),
    }),
    createChat: build.mutation<{ chat_id: number }, { user1_id: number; user2_id: number }>({
      query: (body) => ({
        method: 'POST',
        url: 'chat/create',
        body,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    addMessage: build.mutation<
      { chat_id: number; message_id: number },
      { user1_id: number; text: string; chat_id: number }
    >({
      query: ({ chat_id, text, user1_id }) => ({
        method: 'POST',
        url: `chat/msg_all/${chat_id}`,
        body: { text, user1_id },
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});
