import { memo } from 'react';

import { path } from 'modules/router/path';
import { List } from '../List/List';
import { SettingLink, Wrapper, socialMenuListCss } from './ExtraMenu.styled';
import { socialMediaMenu } from 'constants/menu';
import { ISocialMenu } from 'interfaces/menu';

export const ExtraMenu = memo(() => {
  const renderSocialMenu = ({ path, svg }: ISocialMenu) => <a href={path}>{svg}</a>;

  return (
    <Wrapper>
      <List data={socialMediaMenu} renderItem={renderSocialMenu} styles={socialMenuListCss} />
      <SettingLink to={path.setting}>
        <svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.1 7.22C16.29 7.22 15.55 5.94 16.45 4.37C16.97 3.46 16.66 2.3 15.75 1.78L14.02 0.789997C13.23 0.319997 12.21 0.599998 11.74 1.39L11.63 1.58C10.73 3.15 9.25 3.15 8.34 1.58L8.23 1.39C7.78 0.599998 6.76 0.319997 5.97 0.789997L4.24 1.78C3.33 2.3 3.02 3.47 3.54 4.38C4.45 5.94 3.71 7.22 1.9 7.22C0.86 7.22 0 8.07 0 9.12V10.88C0 11.92 0.85 12.78 1.9 12.78C3.71 12.78 4.45 14.06 3.54 15.63C3.02 16.54 3.33 17.7 4.24 18.22L5.97 19.21C6.76 19.68 7.78 19.4 8.25 18.61L8.36 18.42C9.26 16.85 10.74 16.85 11.65 18.42L11.76 18.61C12.23 19.4 13.25 19.68 14.04 19.21L15.77 18.22C16.68 17.7 16.99 16.53 16.47 15.63C15.56 14.06 16.3 12.78 18.11 12.78C19.15 12.78 20.01 11.93 20.01 10.88V9.12C20 8.08 19.15 7.22 18.1 7.22ZM10 13.25C8.21 13.25 6.75 11.79 6.75 10C6.75 8.21 8.21 6.75 10 6.75C11.79 6.75 13.25 8.21 13.25 10C13.25 11.79 11.79 13.25 10 13.25Z"
            fill="white"
          />
        </svg>
      </SettingLink>
    </Wrapper>
  );
});