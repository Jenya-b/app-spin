import styled from 'styled-components';
import { animated } from '@react-spring/web';

export const Wrapper = styled.div`
  min-height: 100vh;
  padding: 0 32px 20px 32px;
  display: grid;
  grid-template: 80px 1fr 80px / 270px 1fr 270px;
  column-gap: 32px;
`;

export const Sidebar = styled.aside`
  grid-column: 1/2;
  grid-row: 2/3;
  margin-bottom: 12px;
  display: grid;
  grid-template-rows: auto 1fr;
`;

export const Chart = styled(animated.div)`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-radius: ${({ theme }) => theme.borders.radiusPrimary}px;
  border: 1px solid ${({ theme }) => theme.colors.borderPrimary};
  margin-bottom: 12px;
`;
