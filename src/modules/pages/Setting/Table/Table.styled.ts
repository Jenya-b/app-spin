import styled from 'styled-components';

interface ICountColumns {
  count: number;
}

export const StyledTable = styled.table<ICountColumns>`
  margin-top: 12px;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(${({ count }) => count}, minmax(150px, 1fr));
  font-weight: 700;
  font-size: 10px;
  line-height: normal;
  letter-spacing: -0.11px;
  text-transform: uppercase;
  text-align: left;
  font-variant-numeric: lining-nums proportional-nums;
  border-radius: 8px;

  thead,
  tbody,
  tr {
    display: contents;
  }

  tbody tr {
    :nth-child(odd) td {
      background: rgba(34, 39, 48, 1);
    }
    :nth-child(even) td {
      background: rgba(41, 34, 45, 1);
    }
  }

  th {
    position: sticky;
    top: 0;
    z-index: ${({ theme }) => theme.order.lastIndex};
    background: ${({ theme }) => theme.colors.bgTertiary};
    color: rgba(255, 255, 255, 0.25);
    padding: 0 12px 12px 12px;
  }

  td {
    padding: 8px 12px 8px 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.02);

    span {
      :first-child {
        font-size: 12px;
      }

      :last-child {
        font-size: 8px;
        opacity: 0.5;
      }
    }
  }
`;
