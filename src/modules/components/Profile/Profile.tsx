import {
  Wrapper,
  ButtonAdd,
  ButtonLogout,
  ProfileControl,
  ProfileInfo,
  ProfileLogo,
  ProfileMoney,
  ProfileName,
} from './Profile.styled';

interface ProfileProps {
  handleLogout: () => void;
}

export const Profile = ({ handleLogout }: ProfileProps) => (
  <Wrapper>
    <ProfileInfo>
      <ProfileLogo></ProfileLogo>
      <ProfileName>PROFILE</ProfileName>
      <ProfileMoney>0,00003 BTC</ProfileMoney>
    </ProfileInfo>
    <ProfileControl>
      <ButtonAdd />
      <ButtonLogout onClick={handleLogout} />
    </ProfileControl>
  </Wrapper>
);
