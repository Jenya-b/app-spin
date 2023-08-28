import { SoundBtn, Wrapper, LanguageBtn } from './SettingsButtons.styled';

interface SettingsButtonsProps {
  isActiveSound: boolean;
  language: string;
  changeSoundActivity: () => void;
  changeLang: () => void;
}

export const SettingsButtons = ({
  changeLang,
  changeSoundActivity,
  isActiveSound,
  language,
}: SettingsButtonsProps) => (
  <Wrapper>
    <SoundBtn isactive={isActiveSound} onClick={changeSoundActivity} />
    <LanguageBtn language={language} onClick={changeLang} />
  </Wrapper>
);
