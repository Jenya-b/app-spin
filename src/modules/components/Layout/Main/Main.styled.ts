import styled from 'styled-components';

import { mainMediaSize } from 'styles/fragments';

export const Wrapper = styled.div`
  height: 100vh;
  padding: 0 2.3rem 1.43rem 2.3rem;
  display: grid;
  grid-template: auto 1fr auto / 27rem 1fr 27rem;
  column-gap: 2.3rem;

  ${mainMediaSize}

  @media (max-width: 1650px) {
    padding: 0 1.5rem 1.43rem 1.5rem;
  }

  @media (max-width: 1500px) {
    padding: 0 1rem 1rem 1rem;
  }

  @media (max-width: 1200px) {
    padding: 0;
  }

  @media (max-width: 1023px) {
    height: 100%;
    padding: 0 0.65rem 5.5rem 0.65rem;
    display: flex;
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  grid-column: 1/2;
  grid-row: 2/3;
  margin-bottom: 0.85rem;
  display: grid;
  grid-template-rows: auto 1fr;
  overflow-y: auto;

  @media (max-width: 1023px) {
    overflow: visible;
    margin-bottom: 0rem;
  }
`;

export const ChatWrap = styled.div`
  display: grid;
  grid-template: 1fr/1fr;
  grid-column: 3/4;
  grid-row: 2/4;
  overflow: auto;
`;
