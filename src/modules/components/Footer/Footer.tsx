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
  CloseBtn,
} from './Footer.styled';
import { IFooterMenu } from 'interfaces/menu';
import { BasicModal } from '../Modal/Modal';

export const Footer = () => {
  const [isOpenModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);

  const handleClose = () => setOpenModal(false);

  const renderItem = ({ path, title }: IFooterMenu) => <StyledLink to={path}>{title}</StyledLink>;

  return (
    <Wrapper>
      <div>
        <ModalBtn onClick={handleOpen}>hash round</ModalBtn>
        <BasicModal open={isOpenModal} handleClose={handleClose}>
          <ModalWrap>
            <CloseBtn onClick={handleClose} />
            <ModalTitle>hash round</ModalTitle>
            <ModalSubtitle>
              Hash of the Crash game, you can check the integrity of the game in the current round.
              The hash changes every new round.
            </ModalSubtitle>
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
