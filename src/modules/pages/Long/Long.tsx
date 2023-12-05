import { inGameData } from 'data/long';
import { Main } from './Long.styled';
import { Transfer } from './Transfer/Transfer';
import { History } from './History/History';

export const LongPage = () => (
  <Main>
    <Transfer data={inGameData} />
    <History />
  </Main>
);

export default LongPage;
