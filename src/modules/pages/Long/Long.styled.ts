import styled from 'styled-components';

export const Sidebar = styled.aside`
  grid-column: 1/2;
  grid-row: 2/3;
  margin-bottom: 12px;
  display: grid;
  grid-template-rows: 170px 1fr;
  row-gap: 12px;
`;

export const Chart = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
`;

export const Wallet = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
`;

export const Main = styled.main`
  grid-column: 2/3;
  grid-row: 2/3;
  margin-bottom: 12px;
  display: grid;
  grid-template-rows: 130px 1fr;
  row-gap: 12px;
`;

export const Game = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
`;

export const History = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
`;
