import { useTranslation } from 'react-i18next';

import { List } from 'modules/components/List/List';
import {
  Wrapper,
  listRouletteData,
  ControlBlock,
  InfoBlock,
  Button,
  Long,
  InGameUser,
  Input,
  InputWrap,
  Label,
  listRouletteUserData,
  UserAmount,
  UserLogo,
  UserName,
  NoBids,
  NoBidsSubtitle,
  NoBidsTitle,
} from './Controls.styled';
import { IRouletteData, rouletteData, IUser } from 'data/roulette';
import { diamondIcon, noBidsIcon } from 'constants/images';

export const Controls = () => {
  const { t } = useTranslation();

  const renderItem = ({ countInGame, diamond, long, users }: IRouletteData) => {
    const renderItemUser = ({ count, name }: IUser) => (
      <>
        <UserLogo></UserLogo>
        <UserName>{name}</UserName>
        <UserAmount className={diamond}>$ {count}</UserAmount>
      </>
    );

    const renderEmpty = (
      <NoBids>
        <img src={noBidsIcon} alt="no" />
        <NoBidsTitle>{t('noBids')}</NoBidsTitle>
        <NoBidsSubtitle>{t('beTheFirst')}</NoBidsSubtitle>
      </NoBids>
    );

    return (
      <>
        <ControlBlock className={diamond}>
          <img src={diamondIcon[diamond]} alt="" />
          <Button>
            <span>$ 0.00</span>
            <span>{t('bet')}</span>
          </Button>
          <Long>x{long}</Long>
        </ControlBlock>
        <InfoBlock>
          <InputWrap>
            <InGameUser className={diamond}>
              {countInGame} {t('gamers')}
            </InGameUser>
            <Label>
              {t('amount')}:
              <Input />
            </Label>
          </InputWrap>
          <List
            data={users}
            renderItem={renderItemUser}
            renderEmpty={renderEmpty}
            styles={listRouletteUserData}
          />
        </InfoBlock>
      </>
    );
  };
  return (
    <Wrapper>
      <List data={rouletteData} renderItem={renderItem} styles={listRouletteData} />
    </Wrapper>
  );
};
