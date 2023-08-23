import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}rem;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    padding: 1rem;
    display: grid;
    grid-template: repeat(2, auto) / repeat(2, 1fr);
    gap: 1rem;
  }
`;
