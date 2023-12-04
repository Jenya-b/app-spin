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
  InfoWrap,
  InGameAmount,
  listRouletteUserData,
  UserAmount,
  UserLogo,
  UserName,
  NoBids,
  NoBidsSubtitle,
  NoBidsTitle,
  MobControls,
  MobButtonsWrap,
  InputWrap,
  Label,
  Input,
} from './Controls.styled';
import { IRouletteData, rouletteData, IUser } from 'data/roulette';
import { diamondIcon, noBidsIcon } from 'constants/images';
import { useResize } from 'hooks/useResize';
import { InGame } from 'modules/components/InGame/InGame';
import { inGameData } from 'data/long';

export const Controls = () => {
  const { t } = useTranslation();
  const [width] = useResize();

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
        {width >= 767 && (
          <ControlBlock className={diamond}>
            <img src={diamondIcon[diamond]} alt="" />
            <Button>
              <span>$ 0.00</span>
              <span>{t('bet')}</span>
            </Button>
            <Long>x{long}</Long>
          </ControlBlock>
        )}

        <InfoBlock>
          <InfoWrap>
            <InGameUser className={diamond}>
              {countInGame} {t('gamers')}
            </InGameUser>
            <InGameAmount>
              {t('amount')}: {users.reduce((acc, { count }) => acc + count, 0)}`$
            </InGameAmount>
          </InfoWrap>
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
      {width < 767 && (
        <MobControls>
          <InGame data={inGameData} />
          <InputWrap>
            <Label>
              <span>{t('bet')}</span>
              <Input placeholder={t('amount')} type="number" min={1} />
            </Label>
            <Label>
              <span>{t('long')}</span>
              <Input placeholder="4.0" type="number" min={1} />
            </Label>
          </InputWrap>
          <MobButtonsWrap>
            {rouletteData.map(({ diamond }) => (
              <ControlBlock key={diamond} className={diamond}>
                <Button>
                  <span>$ 0.00</span>
                  <span>{t('bet')}</span>
                </Button>
              </ControlBlock>
            ))}
          </MobButtonsWrap>
        </MobControls>
      )}
      <List data={rouletteData} renderItem={renderItem} styles={listRouletteData} />
    </Wrapper>
  );
};
