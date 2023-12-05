import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Avatar, Box, IconButton, MenuItem, Tooltip, Typography } from '@mui/material';

import { ProfileInfo, ProfileMoney, ProfileName, StyledMenu } from './Profile.styled';
import { useAppDispatch, useAppSelector } from 'store';
import { logout } from 'store/reducers/userSlice';
import { gameSelector, userSelector } from 'store/selectors';
import { path } from 'modules/router/path';
import { useGetUserQuery } from 'services';
import { Loader } from '../Loader/Loader';
import { resetCurrencyState } from 'store/reducers/currencySlice';
import { resetGameState } from 'store/reducers/gameSlice';

export const Profile = () => {
  const dispatch = useAppDispatch();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const { isAdmin } = useAppSelector(userSelector);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { data: profileInfo, isLoading: isLoadingProfile } = useGetUserQuery(null);
  const {
    longInfo: { my_balance },
  } = useAppSelector(gameSelector);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => setAnchorElUser(null);

  const handleOpenSettingPage = () => navigate(path.setting);

  const handleOpenAdminPage = () => navigate(path.admin);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(resetCurrencyState());
    dispatch(resetGameState());
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {isLoadingProfile && <Loader />}
      <Tooltip title={t('openSettings')}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={profileInfo?.nick ?? ''} src="#" />
        </IconButton>
      </Tooltip>
      <ProfileInfo>
        <ProfileName>{profileInfo?.nick ?? ''}</ProfileName>
        <ProfileMoney>{my_balance?.btc.val ?? 0} BTC</ProfileMoney>
      </ProfileInfo>
      <StyledMenu
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleOpenSettingPage}>
          <Typography textAlign="center">{t('setting')}</Typography>
        </MenuItem>
        {isAdmin && (
          <MenuItem onClick={handleOpenAdminPage}>
            <Typography textAlign="center">{t('adminPanel')}</Typography>
          </MenuItem>
        )}
        <MenuItem onClick={handleLogout}>
          <Typography textAlign="center">{t('logout')}</Typography>
        </MenuItem>
      </StyledMenu>
    </Box>
  );
};
