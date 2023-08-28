import { useTranslation } from 'react-i18next';

import { ModalBtn, Wrapper, ModalWrap } from './Footer.styled';
import { BasicModal } from '../Modal/Modal';
import { NavInfo } from '../NavInfo/NavInfo';
import { HashRound } from '../Modal/HashRound/HashRound';
import { useModal } from 'hooks/useModal';

export const Footer = () => {
  const [isOpenModal, openModal, closeModal] = useModal(false);
  const { t } = useTranslation();

  return (
    <Wrapper>
      <ModalWrap>
        <ModalBtn onClick={openModal}>{t('hashRound')}</ModalBtn>
        <BasicModal open={isOpenModal} handleClose={closeModal}>
          <>
            <HashRound handleClose={closeModal} />
          </>
        </BasicModal>
      </ModalWrap>
      <nav>
        <NavInfo />
      </nav>
    </Wrapper>
  );
};
