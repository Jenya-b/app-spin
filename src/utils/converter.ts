export const converterFontSize = (innerWidth: number, value: number) => {
  const basicSize = 14;

  return innerWidth >= 3000
    ? (value / basicSize) * 22
    : window.innerWidth >= 2800
    ? (value / basicSize) * 20.5
    : window.innerWidth >= 2600
    ? (value / basicSize) * 19
    : window.innerWidth >= 2400
    ? (value / basicSize) * 17.5
    : window.innerWidth >= 2000
    ? (value / basicSize) * 15.5
    : value;
};
