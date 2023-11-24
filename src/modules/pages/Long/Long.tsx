import { inGameData } from 'data/long';
import { Main } from './Long.styled';
import { Transfer } from './Transfer/Transfer';
import { History } from './History/History';
import { useHistoryLongGameQuery } from 'services';

export const LongPage = () => {
  const { data } = useHistoryLongGameQuery(null);
  return (
    <Main>
      <Transfer data={inGameData} />
      <History historyNumbers={data ? data.result : []} />
    </Main>
  );
};

export default LongPage;
