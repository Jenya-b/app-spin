import { Main } from './Futures.styled';
import { Game } from './Game/Game';
import { History } from './History/History';
import { Transfer } from './Transfer/Transfer';
import { inGameData } from 'data/long';

export const FuturesPage = () => (
  <Main>
    <Game />
    <Transfer data={inGameData} />
    <History />
  </Main>
);

export default FuturesPage;
