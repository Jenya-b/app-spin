import { inGameData } from 'data/long';
import { Main } from './Long.styled';
import { Transfer } from './Transfer/Transfer';
import { History } from './History/History';
import { useRoundInfoSocket } from 'hooks/useRoundInfoSocket';

export const LongPage = () => {
  useRoundInfoSocket(1);

  return (
    <Main>
      <Transfer data={inGameData} />
      <History />
    </Main>
  );
};

export default LongPage;
