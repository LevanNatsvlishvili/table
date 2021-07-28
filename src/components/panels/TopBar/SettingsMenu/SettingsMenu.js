import { Menu, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { mdiCog, mdiFaceProfile, mdiLogout, mdiWrench } from '@mdi/js';
import Icon from '@mdi/react';
import TopBarShortcut from 'components/panels/TopBar/TopBarShortcut';
import React from 'react';
import { Link } from 'react-router-dom';
import P from '../../../../paths';

const SettingsMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(open ? null : event.currentTarget);
  };

  const menu = [
    { text: 'Profile', url: P.SETTINGS.PROFILE, icon: mdiFaceProfile },
    { text: 'Settings', url: P.SETTINGS.MODULE, icon: mdiWrench },
    { text: 'Logout', url: P.SETTINGS.PROFILE, icon: mdiLogout },
  ];

  return (
    <TopBarShortcut color='mainText' className={classes.container} onClick={handleClick}>
      <Icon path={mdiCog} />
      <Menu
        className={classes.profileMenu}
        anchorEl={anchorEl}
        elevation={5}
        getContentAnchorEl={null}
        MenuListProps={{ disableListWrap: true }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        {menu.map((m) => {
          return (
            <MenuItem
              key={m.text}
              disableGutters
              component={Link}
              to={m.url}
              className={classes.menuItem}
            >
              <Icon path={m.icon} />
              {m.text}
            </MenuItem>
          );
        })}
      </Menu>
    </TopBarShortcut>
  );
};

export default SettingsMenu;

const useStyles = makeStyles((theme) => ({
  profileMenu: {
    marginTop: theme.spacing(),
    padding: 0,
  },
  menuItem: {
    textDecoration: 'none',
    padding: theme.spacing(1, 2),
    color: theme.colors.mainText,
    fontSize: 14,
    fontFamily: 'fmedium',
    minWidth: '20ch',
    borderBottom: `1px solid ${theme.colors.lightGray}`,
    '& svg': {
      marginRight: theme.spacing(),
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
