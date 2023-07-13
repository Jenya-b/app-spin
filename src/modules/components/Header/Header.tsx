import { useTranslation } from 'react-i18next';

import {
  Container,
  StyledHeader,
  AuxiliaryButtons,
  Logo,
  LanguageBtn,
  SoundBtn,
  Nav,
  StyledNavLink,
  navMenuListCss,
} from './Header.styled';
import { useAppDispatch, useAppSelector } from 'store';
import { changeActiveSound, changeLanguage } from 'store/reducers/settingSlice';
import { settingSelector } from 'store/selectors';
import { List } from '../List/List';
import { navMenu } from 'constants/menu';
import { INavMenu } from 'interfaces/menu';

export const Header = () => {
  const dispatch = useAppDispatch();
  const { isActiveSound, language } = useAppSelector(settingSelector);
  const { i18n } = useTranslation();

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
        <AuxiliaryButtons>
          <SoundBtn isactive={isActiveSound} onClick={changeSoundActivity} />
          <LanguageBtn language={language} onClick={changeLang} />
        </AuxiliaryButtons>
      </Container>
      <Container>
        <Nav>
          <List
            data={navMenu}
            renderEmpty={<></>}
            renderItem={renderItemMenu}
            styles={navMenuListCss}
          />
        </Nav>
      </Container>
      <Container></Container>
    </StyledHeader>
  );
};

export default Header;
