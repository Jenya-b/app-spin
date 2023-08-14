import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ModalBtn, Wrapper } from './Footer.styled';
import { BasicModal } from '../Modal/Modal';
import { NavInfo } from '../NavInfo/NavInfo';
import { HashRound } from '../Modal/HashRound/HashRound';

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
          <>
            <HashRound handleClose={handleClose} />
          </>
        </BasicModal>
      </div>
      <nav>
        <NavInfo />
      </nav>
    </Wrapper>
  );
};
