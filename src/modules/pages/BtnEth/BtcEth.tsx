import { Main } from './BtnEth.styled';
import { CreateGameBlock } from './CreateGameBlock/CreateGameBlock';
import { ListCreatedGames } from './ListCreatedGames/ListCreatedGames';

export const BtnEthPage = () => (
  <Main>
    <CreateGameBlock />
    <ListCreatedGames />
  </Main>
);

export default BtnEthPage;
