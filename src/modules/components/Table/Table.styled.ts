import styled from 'styled-components';
import { colors } from 'styles/colors';
import { fontStyleSmallDemiBold, fontStyleXXSmallDemiBold } from 'styles/typography';

interface ICountColumns {
  count: number;
}

export const Wrapper = styled.div`
  padding: 1.5rem 2rem;
  overflow: auto;
`;

export const StyledTable = styled.table<ICountColumns>`
  display: grid;
  min-width: 100%;
  height: 100%;
  grid-template-columns: repeat(${({ count }) => count}, minmax(min-content, 1fr));
  overflow: hidden;
  overflow-x: auto;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0.85rem;
    height: 0.85rem;
    border-radius: 2rem;
    background: rgba(255, 255, 255, 0.02);
  }

  ::-webkit-scrollbar-corner,
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2rem;
  }

  thead,
  tbody,
  tr {
    display: contents;
  }

  tbody tr {
    :nth-child(odd) td {
      background: #20202d;
    }
  }

  th,
  td {
    padding: 0 0.4rem 0 0.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
  }

  th {
    z-index: ${({ theme }) => theme.order.lastIndex};
    position: sticky;
    top: 0;
    padding-bottom: 2.85rem;
    background: ${({ theme }) => theme.colors.bgSecondary};

    p {
      opacity: 0.25;
      ${fontStyleSmallDemiBold}

      &.subtitle {
        ${fontStyleXXSmallDemiBold}
      }
    }
  }

  td {
    height: 3rem;
    display: flex;
    align-items: center;

    span {
      display: inline-block;
      padding: 0.3rem 0.85rem;
      border-radius: ${({ theme }) => theme.borders.radiusSecondary}rem;
      background: rgba(255, 55, 95, 0.15);
      color: ${colors.red200};
      text-transform: uppercase;
      ${fontStyleSmallDemiBold}

      &.green {
        background: rgba(91, 201, 87, 0.15);
        color: ${colors.green200};
      }
    }
  }
`;
