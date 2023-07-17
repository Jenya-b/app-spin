import { footerMenu } from 'constants/menu';
import { List } from '../List/List';
import { ModalBtn, StyledLink, Wrapper, menuListCss } from './Footer.styled';
import { IFooterMenu } from 'interfaces/menu';

export const Footer = () => {
  const renderItem = ({ path, title }: IFooterMenu) => <StyledLink to={path}>{title}</StyledLink>;

  return (
    <Wrapper>
      <ModalBtn>hash round</ModalBtn>
      <nav>
        <List data={footerMenu} renderEmpty={<></>} renderItem={renderItem} styles={menuListCss} />
      </nav>
    </Wrapper>
  );
};
