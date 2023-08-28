import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useSound from 'use-sound';

import {
  Container,
  StyledHeader,
  Logo,
  StyledNavLink,
  navMenuListCss,
  AuthBtn,
  Nav,
  Burger,
} from './Header.styled';
import { useAppDispatch, useAppSelector } from 'store';
import { changeActiveSound, changeLanguage } from 'store/reducers/settingSlice';
import { settingSelector } from 'store/selectors';
import { List } from '../List/List';
import { messageMenu, navMenu } from 'constants/menu';
import { INavMenu } from 'interfaces/menu';
import { BasicModal } from '../Modal/Modal';
import { Auth } from '../Auth/Auth';
import { Login } from '../Auth/Login/Login';
import { Registration } from '../Auth/Registration/Registration';
import soundClick from './click.mp3';
import { useModal } from 'hooks/useModal';
import { useResize } from 'hooks/useResize';
import { MobMenu } from '../MobMenu/MobMenu';
import { ExtraMenu } from '../ExtraMenu/ExtraMenu';
import { SettingsButtons } from '../SettingsButtons/SettingsButtons';

export const Header = memo(() => {
  const [isActiveMenu, setActiveMenu] = useState(false);
  const [isOpenLoginModal, openLoginModal, closeLoginModal] = useModal(false);
  const [isOpenRegistrModal, openRegistrModal, closeRegistrModal] = useModal(false);
  const dispatch = useAppDispatch();
  const { isActiveSound, language } = useAppSelector(settingSelector);
  const { t, i18n } = useTranslation();
  const [play] = useSound(soundClick, { volume: isActiveSound ? 0.5 : 0 });
  const [windowWidth] = useResize();

  const updateDisplayMenu = () => {
    setActiveMenu((state) => !state);
  };

  const handleOpenLoginModal = () => {
    play();
    openLoginModal();
  };

  const changeSoundActivity = () => {
    dispatch(changeActiveSound(!isActiveSound));
  };

  const changeLang = () => {
    const value = language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(value);
    dispatch(changeLanguage(value));
  };

  const renderItemMenu = ({ title, iconUrl, path }: INavMenu) => (
    <StyledNavLink to={path} icon={iconUrl}>
      <p>{title}</p>
    </StyledNavLink>
  );

  return (
    <StyledHeader>
      <Container>
        <Logo />
        {windowWidth >= 1024 && (
          <SettingsButtons
            changeLang={changeLang}
            changeSoundActivity={changeSoundActivity}
            isActiveSound={isActiveSound}
            language={language}
          />
        )}
      </Container>
      <Container>
        <Nav>
          <List
            data={windowWidth >= 1024 ? navMenu : [...navMenu, messageMenu]}
            renderEmpty={<></>}
            renderItem={renderItemMenu}
            styles={navMenuListCss}
          />
        </Nav>
        <div>
          <AuthBtn onClick={handleOpenLoginModal}>{t('authorization')}</AuthBtn>
          <BasicModal open={isOpenLoginModal} handleClose={closeLoginModal}>
            <>
              <Auth title="authorization" subtitle="welcome" closeModal={closeLoginModal}>
                <Login
                  handleOpenRegistModal={openRegistrModal}
                  handleCloseLoginModal={closeLoginModal}
                />
              </Auth>
            </>
          </BasicModal>
          <BasicModal open={isOpenRegistrModal} handleClose={closeRegistrModal}>
            <>
              <Auth title="registration" subtitle="welcome" closeModal={closeRegistrModal}>
                <Registration
                  handleCloseRegistModal={closeRegistrModal}
                  handleOpenLoginModal={handleOpenLoginModal}
                />
              </Auth>
            </>
          </BasicModal>
        </div>
      </Container>
      <Container>
        <div> {/* Profile */} </div>
        {windowWidth >= 1024 ? (
          <ExtraMenu />
        ) : (
          <Burger onClick={updateDisplayMenu} isActiveBurger={isActiveMenu}>
            <span></span>
          </Burger>
        )}
      </Container>
      {windowWidth < 1024 && <MobMenu isActiveMenu={isActiveMenu} />}
    </StyledHeader>
  );
});
