import { useState } from 'react';

import { footerMenu } from 'constants/menu';
import { List } from '../List/List';
import {
  ModalBtn,
  ModalWrap,
  StyledLink,
  Wrapper,
  menuListCss,
  ModalCopyBlock,
  ModalSubtitle,
  ModalTitle,
} from './Footer.styled';
import { IBasicNavMenu } from 'interfaces/menu';
import { BasicModal } from '../Modal/Modal';
import { CloseModalBtn } from 'styles/components';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const [isOpenModal, setOpenModal] = useState(false);
  const { t } = useTranslation();

  const handleOpen = () => setOpenModal(true);

  const handleClose = () => setOpenModal(false);

  const renderItem = ({ path, title }: IBasicNavMenu) => (
    <StyledLink to={path}>{t(title)}</StyledLink>
  );

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
        <List data={footerMenu} renderEmpty={<></>} renderItem={renderItem} styles={menuListCss} />
      </nav>
    </Wrapper>
  );
};
