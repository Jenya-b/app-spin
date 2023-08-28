import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 6rem 0.65rem 6rem 0.65rem;
  position: fixed;
  top: -100vh;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.bgPrimary};
  z-index: ${({ theme }) => theme.order.mediumIndex};
  transition: ${({ theme }) => theme.transition};
  display: flex;
  flex-direction: column;

  &.active {
    top: 0;
  }
`;

export const ControlsWrap = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;
`;
