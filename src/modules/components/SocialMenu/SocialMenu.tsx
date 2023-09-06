import { memo } from 'react';

import { List } from '../List/List';
import { socialMenuListCss } from './SocialMenu.styled';
import { socialMediaMenu } from 'constants/menu';
import { ISocialMenu } from 'interfaces/menu';

export const SocialMenu = memo(() => {
  const renderSocialMenu = ({ path, svg }: ISocialMenu) => <a href={path}>{svg}</a>;

  return <List data={socialMediaMenu} renderItem={renderSocialMenu} styles={socialMenuListCss} />;
});
