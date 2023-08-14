import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import { IBasicNavMenu } from 'interfaces/menu';
import { StyledLink, menuListCss } from './NavInfo.styled';
import { List } from '../List/List';
import { footerMenu } from 'constants/menu';

export const NavInfo = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const renderItem = ({ path, title }: IBasicNavMenu) => (
    <StyledLink to={path} state={{ from: location }}>
      {t(title)}
    </StyledLink>
  );
  return (
    <List data={footerMenu} renderEmpty={<></>} renderItem={renderItem} styles={menuListCss} />
  );
};
