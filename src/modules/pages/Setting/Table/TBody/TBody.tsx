interface TBodyProps<T> {
  data: T[];
  renderItem: (item: T) => JSX.Element;
}

export const TBody = <T,>({ data, renderItem }: TBodyProps<T>) => (
  <tbody>
    {data.map((item, i) => (
      <tr key={i}>{renderItem(item)}</tr>
    ))}
  </tbody>
);
