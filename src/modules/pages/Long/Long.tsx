import { Sidebar, Chart, Game, History, Main, Wallet } from './Long.styled';

export const LongPage = () => (
  <>
    <Sidebar>
      <Chart></Chart>
      <Wallet></Wallet>
    </Sidebar>
    <Main>
      <Game></Game>
      <History></History>
    </Main>
  </>
);

export default LongPage;
