import styled from 'styled-components';

export const ButtonPrimary = styled.button`
  position: relative;
  text-align: left;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.buttonPrimary};
  transition: ${({ theme }) => theme.transition};

  ::after {
    width: 14px;
    height: 14px;
    position: absolute;
    content: '';
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
    transition: ${({ theme }) => theme.transition};
  }
`;
