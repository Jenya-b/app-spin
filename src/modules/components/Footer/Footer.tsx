import { useState } from 'react';

import {
  ModalBtn,
  ModalWrap,
  Wrapper,
  ModalCopyBlock,
  ModalSubtitle,
  ModalTitle,
} from './Footer.styled';
import { BasicModal } from '../Modal/Modal';
import { CloseModalBtn } from 'styles/components';
import { useTranslation } from 'react-i18next';
import { NavInfo } from '../NavInfo/NavInfo';

export const Footer = () => {
  const [isOpenModal, setOpenModal] = useState(false);
  const { t } = useTranslation();

  const handleOpen = () => setOpenModal(true);

  const handleClose = () => setOpenModal(false);

  return (
    <Wrapper>
      <div>
        <ModalBtn onClick={handleOpen}>{t('hashRound')}</ModalBtn>
        <BasicModal open={isOpenModal} handleClose={handleClose}>
          <ModalWrap>
            <CloseModalBtn onClick={handleClose} />
            <ModalTitle>{t('hashRound')}</ModalTitle>
            <ModalSubtitle>{t('hashRoundRules')}</ModalSubtitle>
            <ModalCopyBlock></ModalCopyBlock>
          </ModalWrap>
        </BasicModal>
      </div>
      <nav>
        <NavInfo />
      </nav>
    </Wrapper>
  );
};
