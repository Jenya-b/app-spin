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
  return (
    <Wrapper>
      <TitleBlock>
        <Title>Chat</Title>
        <Info>Chat Rules</Info>
      </TitleBlock>
      <MessageBlock></MessageBlock>
      <ControlBlock>
        <Label>
          <Input placeholder="Enter Message" />
          <InputBtn />
        </Label>
      </ControlBlock>
    </Wrapper>
  );
};
