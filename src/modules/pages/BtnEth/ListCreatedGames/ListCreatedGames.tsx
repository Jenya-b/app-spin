import { List } from 'modules/components/List/List';
import {
  Wrapper,
  listCreatedGamesCss,
  GameControl,
  GameControlBlock,
  GameIcon,
  GameInfo,
  GameWrap,
} from './ListCreatedGames.styled';
import { createArray } from 'utils/createArray';
import { cryptoIcon } from 'constants/images';

export const ListCreatedGames = () => {
  const renderItem = () => (
    <GameWrap>
      <GameControlBlock>
        <h2>if btc closed:</h2>
        <GameIcon>
          <div />
          <img src={cryptoIcon.btc} alt="" />
        </GameIcon>
        <GameControl>
          <p>SpinName</p>
          <button>join</button>
        </GameControl>
      </GameControlBlock>
      <GameInfo>
        <p>game #4352462</p>
        <p>10 : 00</p>
        <p>
          <span>amount:</span>
          <span>$ 3.51</span>
        </p>
      </GameInfo>
      <GameControlBlock className="right-side">
        <h2>if btc closed:</h2>
        <GameControl className="right-side-control">
          <p>SpinName</p>
          <button>join</button>
        </GameControl>
        <GameIcon className="right-side-icon">
          <div />
          <img src={cryptoIcon.eth} alt="" />
        </GameIcon>
      </GameControlBlock>
    </GameWrap>
  );

  const renderEmpty = <></>;

  const data = createArray(10);

  return (
    <Wrapper>
      <List
        data={data}
        renderItem={renderItem}
        renderEmpty={renderEmpty}
        styles={listCreatedGamesCss}
      />
    </Wrapper>
  );
};
