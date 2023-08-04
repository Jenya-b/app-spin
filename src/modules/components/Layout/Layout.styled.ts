import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  padding: 0 2.3rem 1.43rem 2.3rem;
  display: grid;
  grid-template: auto 1fr auto / 27rem 1fr 27rem;
  column-gap: 2.3rem;
`;

export const Sidebar = styled.aside`
  grid-column: 1/2;
  grid-row: 2/3;
  margin-bottom: 0.85rem;
  display: grid;
  grid-template-rows: auto 1fr;
  overflow-y: auto;
`;
