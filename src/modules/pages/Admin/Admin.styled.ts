import styled from 'styled-components';

export const Main = styled.main`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  display: grid;
  grid-template-rows: 1fr auto;
  overflow: hidden;
`;

export const Logo = styled.div`
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 50%;
  background: silver;
`;
