import { useTranslation } from 'react-i18next';

import {
  Wrapper,
  Title,
  TitleBlock,
  UpdateBtn,
  MoneyBlock,
  walletListCss,
  MoneyWrap,
  CountCripto,
  CountTitle,
  CountUsd,
  CountWrap,
  MoneyCount,
  MoneyTitle,
  Icon,
  ControlBlock,
  TransferBtn,
} from './Wallet.styled';
import { IWallet } from 'data/wallet';
import { List } from '../List/List';
import { cryptoIcon } from 'constants/images';
import { BasicModal } from '../Modal/Modal';
import { TransferModal } from '../Modal/Transfer/Transfer';
import { useModal } from 'hooks/useModal';
import { useResize } from 'hooks/useResize';
import { useGetBalanceQuery } from 'services';
import { useEffect, useState } from 'react';
import { CriptoEnum } from 'store/reducers/currencySlice';

interface WalletProps {
  activeBlock: boolean;
}

export const Wallet = ({ activeBlock }: WalletProps) => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const { data: balanceInfo, isSuccess } = useGetBalanceQuery(null);
  const [balance, setBalance] = useState<IWallet[]>([]);
  const [windowWidth] = useResize();
  const { t } = useTranslation();

  useEffect(() => {
    if (!(isSuccess && balanceInfo !== undefined)) {
      return;
    }

    const newBalanceInfo = Object.entries(balanceInfo).map(([key, object]) => ({
      cryptoName: key,
      available: object.val - object.ingame,
      ...object,
    }));

    setBalance(newBalanceInfo);
  }, [isSuccess]);

  const renderItem = ({ cryptoName, val, available, ingame }: IWallet) => (
    <MoneyWrap>
      <MoneyTitle active={activeBlock}>
        <Icon active={activeBlock} src={cryptoIcon[`${cryptoName as unknown as CriptoEnum}`]} />
        {windowWidth >= 1024 && cryptoName}
      </MoneyTitle>
      <MoneyCount>
        <CountWrap>
          {windowWidth >= 1024 && <CountTitle active={activeBlock}>{t('amount')}</CountTitle>}
          <CountCripto active={activeBlock}>{val}</CountCripto>
          <CountUsd active={activeBlock}>?</CountUsd>
        </CountWrap>
        {windowWidth >= 1024 && (
          <>
            <CountWrap>
              <CountTitle active={activeBlock}>{t('inGame')}</CountTitle>
              <CountCripto active={activeBlock}>{ingame}</CountCripto>
              <CountUsd active={activeBlock}>?</CountUsd>
            </CountWrap>
            <CountWrap>
              <CountTitle active={activeBlock}>{t('available')}</CountTitle>
              <CountCripto active={activeBlock}>{available}</CountCripto>
              <CountUsd active={activeBlock}>?</CountUsd>
            </CountWrap>
          </>
        )}
      </MoneyCount>
    </MoneyWrap>
  );

  return (
    <Wrapper>
      <TitleBlock>
        <Title active={activeBlock}>{t('wallet')}</Title>
        <UpdateBtn active={activeBlock}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M12.4917 0.666687H5.50841C2.47508 0.666687 0.666748 2.47502 0.666748 5.50835V12.4834C0.666748 15.525 2.47508 17.3334 5.50841 17.3334H12.4834C15.5167 17.3334 17.3251 15.525 17.3251 12.4917V5.50835C17.3334 2.47502 15.5251 0.666687 12.4917 0.666687ZM3.37508 8.90835C3.40008 7.44169 3.98341 6.05835 5.01675 5.02502C6.08341 3.95835 7.50008 3.37502 9.00008 3.37502C10.5001 3.37502 11.9167 3.95835 12.9751 5.02502C13.0001 5.05002 13.0251 5.08335 13.0501 5.11669V4.40002C13.0501 4.05835 13.3334 3.77502 13.6751 3.77502C14.0167 3.77502 14.3001 4.05835 14.3001 4.40002V6.60835C14.3001 6.95002 14.0167 7.23335 13.6751 7.23335H11.4667C11.1251 7.23335 10.8417 6.95002 10.8417 6.60835C10.8417 6.26669 11.1251 5.98335 11.4667 5.98335H12.1584C12.1334 5.95835 12.1167 5.93335 12.0917 5.90835C11.2667 5.08335 10.1667 4.62502 9.00008 4.62502C7.83341 4.62502 6.73341 5.08335 5.90841 5.90835C5.10008 6.71669 4.65008 7.79169 4.63341 8.93335C4.62508 9.26669 4.34175 9.54169 4.00008 9.54169H3.99175C3.65008 9.54169 3.37508 9.25002 3.37508 8.90835ZM12.9751 12.975C11.9167 14.0334 10.5001 14.625 9.00008 14.625C7.50008 14.625 6.08341 14.0417 5.02508 12.975C5.00008 12.95 4.97508 12.9167 4.95008 12.8834V13.5917C4.95008 13.9334 4.66675 14.2167 4.32508 14.2167C3.98341 14.2167 3.70008 13.9334 3.70008 13.5917V11.3834C3.70008 11.0417 3.98341 10.7584 4.32508 10.7584H6.53341C6.87508 10.7584 7.15841 11.0417 7.15841 11.3834C7.15841 11.725 6.87508 12.0084 6.53341 12.0084H5.84175C5.86675 12.0334 5.88341 12.0584 5.90841 12.0834C6.73341 12.9084 7.83341 13.3667 9.00008 13.3667C10.1667 13.3667 11.2667 12.9084 12.0917 12.0834C12.9084 11.2667 13.3667 10.175 13.3667 9.00835C13.3667 8.66669 13.6501 8.38335 13.9917 8.38335C14.3334 8.38335 14.6167 8.66669 14.6167 9.00835C14.6167 10.5167 14.0334 11.925 12.9751 12.975Z"
              fill="white"
              fillOpacity="0.25"
            />
          </svg>
        </UpdateBtn>
      </TitleBlock>
      <MoneyBlock>
        <List data={balance} renderEmpty={<></>} renderItem={renderItem} styles={walletListCss} />
      </MoneyBlock>
      <ControlBlock>
        <TransferBtn onClick={openModal}>{t('transfer')}</TransferBtn>
        <BasicModal open={isOpenModal} handleClose={closeModal}>
          <>
            <TransferModal closeModal={closeModal} />
          </>
        </BasicModal>
      </ControlBlock>
    </Wrapper>
  );
};
