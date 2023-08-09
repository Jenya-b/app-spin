import { Wrapper } from './RateSelection.styled';
import { InGameDataType } from 'data/long';
import { InGame } from 'modules/components/InGame/InGame';
import { Bet } from 'modules/components/Bet/Bet';

interface GameProps {
  data: InGameDataType[];
  children: JSX.Element;
}

export const RateSelection = ({ data, children }: GameProps) => {
  return (
    <Wrapper>
      <InGame data={data} />
      {children}
      <Bet />
    </Wrapper>
  );
};
