import { historyNumbers, inGameData } from 'data/long';
import { Main } from './Long.styled';
import { Game } from './Game/Game';
import { History } from './History/History';

export const LongPage = () => {
  return (
    <Main>
      <Game data={inGameData} />
      <History historyNumbers={historyNumbers} />
    </Main>
  );
};

export default LongPage;
