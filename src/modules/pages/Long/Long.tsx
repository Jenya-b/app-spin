import { inGameData } from 'data/long';
import { Main } from './Long.styled';
import { Game } from './Game/Game';
import { History } from './History/History';

export const LongPage = () => {
  return (
    <>
      <Main>
        <Game data={inGameData} />
        <History />
      </Main>
    </>
  );
};

export default LongPage;
