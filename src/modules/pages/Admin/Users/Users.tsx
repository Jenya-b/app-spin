import { Table } from 'modules/components/Table/Table';
import { Main, Logo } from '../Admin.styled';
import { IUserTBody, IUserTHead, userTBody, userTHead } from 'data/adminPanel';

export const UsersAdminPanel = () => {
  const renderBodyItem = (item: IUserTBody) => (
    <>
      <td>
        <Logo />
      </td>
      <td>{item.username}</td>
      <td>{item.regData}</td>
      <td>{item.btc}</td>
      <td>{item.usdt}</td>
      <td>{item.xmr}</td>
      <td>{item.ltc}</td>
      <td>{item.spin}</td>
      <td>
        <span className={item.mute ? 'green' : ''}>{item.mute ? 'yes' : 'no'}</span>
      </td>
      <td>
        <span className={item.mute ? 'green' : ''}>{item.ban ? 'yes' : 'no'}</span>
      </td>
      <td>{item.ip}</td>
    </>
  );

  const renderHeadItem = ({ title, subtitle }: IUserTHead) => (
    <>
      <p>{title}</p>
      <p>{subtitle}</p>
    </>
  );

  const renderEmpty = <></>;

  return (
    <Main>
      <Table
        headData={userTHead}
        bodyData={userTBody}
        renderBodyItem={renderBodyItem}
        renderHeadItem={renderHeadItem}
        renderEmpty={renderEmpty}
      />
    </Main>
  );
};

export default UsersAdminPanel;
