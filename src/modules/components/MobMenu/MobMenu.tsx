import { useTranslation } from 'react-i18next';

// import { wallet } from 'data/wallet';
import { Wallet } from '../Wallet/Wallet';
import { ControlsWrap, Wrapper } from './MobMenu.styled';
import { Footer } from '../Footer/Footer';
import { useAppDispatch, useAppSelector } from 'store';
import { settingSelector } from 'store/selectors';
import { changeActiveSound, changeLanguage } from 'store/reducers/settingSlice';
import { SettingsButtons } from '../SettingsButtons/SettingsButtons';
import { SocialMenu } from '../SocialMenu/SocialMenu';

interface MobMenuProps {
  isActiveMenu: boolean;
}

export const MobMenu = ({ isActiveMenu }: MobMenuProps) => {
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

  return (
    <Wrapper className={isActiveMenu ? 'active' : ''}>
      <Wallet activeBlock={true} />
      <Footer />
      <ControlsWrap>
        <SettingsButtons
          changeLang={changeLang}
          changeSoundActivity={changeSoundActivity}
          isActiveSound={isActiveSound}
          language={language}
        />
        <SocialMenu />
      </ControlsWrap>
    </Wrapper>
  );
};
