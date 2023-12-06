import { useRouletteSocket } from 'hooks/useRouletteSocket';
import { Controls } from './Controls/Controls';
import { Game } from './Game/Game';
import { Main } from './Roulette.styled';

export const RoulettePage = () => {
  useRouletteSocket(2);

  return (
    <Main>
      <Game />
      <Controls />
    </Main>
  );
};

export default RoulettePage;
