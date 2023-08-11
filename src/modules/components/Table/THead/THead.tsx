interface THeadProps<T> {
  data: T[];
  renderItem: (item: T) => JSX.Element;
}

export const THead = <T,>({ data, renderItem }: THeadProps<T>) => (
  <thead>
    <tr>
      {data.map((item, i) => (
        <th key={i}>{renderItem(item)}</th>
      ))}
    </tr>
  </thead>
);
