import { FormEvent, useState, MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import useClipboard from 'react-use-clipboard';

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
  ReferalHref,
  ReferalInfo,
  ReferalTitle,
  ControlBlock,
  SubmitBtn,
  TableBlock,
  TabBtn,
  Tabs,
  CardBlock,
  Select,
  CardWrap,
  Card,
  CardId,
  CardDate,
  CardWallet,
  CardAmount,
  cardListCss,
} from './Setting.styled';
import { settingTableMenu } from 'constants/menu';
import { Table } from './Table/Table';
import { ITransactionData, transactionData } from 'data/transaction';
import { transactionTHead } from 'constants/table';
import { BasicModal } from 'modules/components/Modal/Modal';
import { QRCodeScaner } from 'modules/components/Modal/QRCodeScaner/QRCodeScaner';
import { useModal } from 'hooks/useModal';
import { useResize } from 'hooks/useResize';
import { List } from 'modules/components/List/List';
import { useUpdateNickMutation, useUpdatePasswordMutation } from 'services';
import { Loader } from 'modules/components/Loader/Loader';

export const SettingPage = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const [filter, setFilter] = useState(settingTableMenu[0]);
  const [newNick, setNewNick] = useState('');
  const [newPass, setNewPass] = useState('');
  const [newRepeatPass, setNewRepeatPass] = useState('');
  const [referal] = useState('https://spin.com/reflink/45465456ue4q344623r2dfew');
  const [isCopied, setCopied] = useClipboard(referal);
  const { t } = useTranslation();
  const [windowWidth] = useResize();
  const [fetchUpdateNick, { isLoading: isLoadingNick, isSuccess: isSuccessNick }] =
    useUpdateNickMutation();
  const [fetchUpdatePassword, { isLoading: isLoadingPass, isSuccess: isSuccessPass }] =
    useUpdatePasswordMutation();

  const renderItem = ({
    id,
    walletCurrency,
    amountMain,
    amountAdditional,
    data,
  }: ITransactionData) => (
    <>
      <td>{id}</td>
      <td>{walletCurrency}</td>
      <td>
        <span>{amountMain}</span>
        <span>{amountAdditional}</span>
      </td>
      <td>{data}</td>
    </>
  );

  const renderCardItem = ({
    id,
    walletCurrency,
    amountMain,
    amountAdditional,
    data,
  }: ITransactionData) => (
    <Card>
      <CardId>{id}</CardId>
      <CardDate>{data}</CardDate>
      <CardWallet>
        <p>{t('walletCurrency')}</p>
        <h2>
          <span>{walletCurrency}</span>
        </h2>
      </CardWallet>
      <CardAmount>
        <p>{t('amount')}</p>
        <h2>{amountMain}</h2>
        <p>{amountAdditional}</p>
      </CardAmount>
    </Card>
  );

  const updateFilter = (event: MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget;
    setFilter(id);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => event.preventDefault();

  return (
    <Main>
      {(isLoadingNick || isLoadingPass) && <Loader />}
      <Title>{t('setting')}</Title>
      <Wrapper>
        <Form onSubmit={handleSubmit}>
          <InputWrap>
            <Label>
              <p>
                {t('username')} <span />
              </p>
              <Input
                placeholder={t('enterNewUser')}
                value={newNick}
                onChange={(e) => setNewNick(e.target.value)}
              />
            </Label>
            <Label>
              <p>
                {t('newPassword')} <span />
              </p>
              <Input
                placeholder={t('enterNewPass')}
                value={newPass}
                onChange={(e) => setNewPass(e.target.value)}
              />
            </Label>
            <Label>
              <p>
                {t('repeatPassword')} <span />
              </p>
              <Input
                placeholder={t('repeatNewPassword')}
                value={newRepeatPass}
                onChange={(e) => setNewRepeatPass(e.target.value)}
              />
            </Label>
          </InputWrap>
          <InfoBlock>
            <UserInfo>
              <div>
                <UserInfoTitle>{t('username')}</UserInfoTitle>
                <UserInfoSubtitle>goodplayer</UserInfoSubtitle>
              </div>
              <div>
                <UserInfoTitle>{t('registrationDate')}</UserInfoTitle>
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
              <ReferalHref onClick={setCopied}>{referal}</ReferalHref>
              <ReferalTitle>
                <p>{t('referalProgram')}</p>
                <img src={logo} alt="logo" />
              </ReferalTitle>
            </ReferalInfo>
          </InfoBlock>
          <ControlBlock>
            <SubmitBtn onClick={openModal}>
              <img src={googleAuthIcon} />
              <p>{t('googleAuth')}</p>
            </SubmitBtn>
            <BasicModal open={isOpenModal} handleClose={closeModal}>
              <>
                <QRCodeScaner closeModal={closeModal} />
              </>
            </BasicModal>
          </ControlBlock>
        </Form>
        {windowWidth > 767 ? (
          <TableBlock>
            <Tabs>
              {settingTableMenu.map((item) => (
                <TabBtn
                  key={item}
                  id={item}
                  onClick={updateFilter}
                  className={item === filter ? 'active' : ''}
                >
                  {t(item)}
                </TabBtn>
              ))}
            </Tabs>
            <Table data={transactionData} renderItem={renderItem} headData={transactionTHead} />
          </TableBlock>
        ) : (
          <CardBlock>
            <Select>
              {settingTableMenu.map((item) => (
                <option key={item}>{t(item)}</option>
              ))}
            </Select>
            <CardWrap>
              <List renderItem={renderCardItem} data={transactionData} styles={cardListCss} />
            </CardWrap>
          </CardBlock>
        )}
      </Wrapper>
    </Main>
  );
};

export default SettingPage;
