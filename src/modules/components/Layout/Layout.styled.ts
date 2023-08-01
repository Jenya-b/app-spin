import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  padding: 0 32px 20px 32px;
  display: grid;
  grid-template: 5.72rem 1fr 80px / 20rem 1fr 20rem;
  column-gap: 32px;

  @media (${({ theme }) => theme.media.XXLarge}) {
    grid-template-columns: 25rem 1fr 25rem;
  }
`;

export const Sidebar = styled.aside`
  grid-column: 1/2;
  grid-row: 2/3;
  margin-bottom: 12px;
  display: grid;
  grid-template-rows: auto 1fr;
  overflow-y: auto;
`;
