import { THead } from './THead/THead';
import { StyledTable, Wrapper } from './Table.styled';
import { TBody } from './TBody/TBody';

interface TableProps<H, B> {
  headData: H[];
  bodyData: B[];
  renderHeadItem: (item: H) => JSX.Element;
  renderBodyItem: (item: B) => JSX.Element;
  renderEmpty: JSX.Element;
}

export const Table = <H, B>({
  bodyData,
  headData,
  renderHeadItem,
  renderBodyItem,
  renderEmpty,
}: TableProps<H, B>) => {
  if (!bodyData.length) return renderEmpty;

  return (
    <Wrapper>
      <StyledTable count={headData.length}>
        <THead data={headData} renderItem={renderHeadItem} />
        <TBody data={bodyData} renderItem={renderBodyItem} />
      </StyledTable>
    </Wrapper>
  );
};
