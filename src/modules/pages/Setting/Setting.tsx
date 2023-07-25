import { FormEvent, useState, MouseEvent } from 'react';

import { googleAuthIcon, logo } from 'constants/images';
import {
  Main,
  Form,
  Input,
  InputWrap,
  Label,
  Title,
  Wrapper,
  InfoBlock,
  UserInfo,
  UserInfoSubtitle,
  UserInfoTitle,
  ReferalBtn,
  ReferalHref,
  ReferalInfo,
  ReferalText,
  ReferalTitle,
  SubmitBtn,
  TableBlock,
  TabBtn,
  Tabs,
} from './Setting.styled';
import { settingTableMenu } from 'constants/menu';
import { Table } from './Table/Table';

export const SettingPage = () => {
  const [filter, setFilter] = useState('Trans history');

  const updateFilter = (event: MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget;
    setFilter(id);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => event.preventDefault();

  return (
    <Main>
      <Title>Settings</Title>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <InputWrap>
            <Label>
              <p>
                username <span />
              </p>

              <Input placeholder="Enter new username" />
            </Label>
            <Label>
              <p>
                new password <span />
              </p>
              <Input placeholder="Enter new password" />
            </Label>
            <Label>
              <p>
                repeat password <span />
              </p>
              <Input placeholder="Repeat new password" />
            </Label>
          </InputWrap>
          <InfoBlock>
            <UserInfo>
              <div>
                <UserInfoTitle>username</UserInfoTitle>
                <UserInfoSubtitle>goodplayer</UserInfoSubtitle>
              </div>
              <div>
                <UserInfoTitle>registration date</UserInfoTitle>
                <UserInfoSubtitle>
                  <span>01</span>
                  <span>/</span>
                  <span>12</span>
                  <span>/</span>
                  <span>23</span>
                </UserInfoSubtitle>
              </div>
            </UserInfo>
            <ReferalInfo>
              <ReferalHref>
                <ReferalText>https://spin.com/reflink/45465456ue4q344623r2dfew</ReferalText>
                <ReferalBtn />
              </ReferalHref>
              <ReferalTitle>
                <p>referral program</p>
                <img src={logo} alt="logo" />
              </ReferalTitle>
            </ReferalInfo>
          </InfoBlock>
          <SubmitBtn>
            <img src={googleAuthIcon} />
            <p>connect google Authenticator</p>
          </SubmitBtn>
        </Form>
        <TableBlock>
          <Tabs>
            {settingTableMenu.map((item) => (
              <TabBtn
                key={item}
                id={item}
                onClick={updateFilter}
                className={item === filter ? 'active' : ''}
              >
                {item}
              </TabBtn>
            ))}
          </Tabs>
          <Table />
        </TableBlock>
      </Wrapper>
    </Main>
  );
};

export default SettingPage;
