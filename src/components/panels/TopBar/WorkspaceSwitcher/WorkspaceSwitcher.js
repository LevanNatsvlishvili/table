import React, { useState } from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import TopBarShortcut from 'components/panels/TopBar/TopBarShortcut';
import { Menu, MenuItem } from '@material-ui/core';
import useUser from 'store/UserContext';

const WorkSpaceAvatar = (props) => {
  const { workspace, ...rest } = props;

  return (
    <Avatar src={workspace.avatar ? workspace.avatar : undefined} {...rest}>
      {String(workspace.name).charAt(0, 1)}
    </Avatar>
  );
};

const WorkspaceSwitcher = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const { workspaces, defaultWorkspace, changeWorkspace } = useUser();

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(open ? null : event.currentTarget);
  };

  const handleWorkspaceChange = (id) => {
    changeWorkspace(id);
  };

  return (
    <TopBarShortcut onClick={handleClick}>
      <Badge
        overlap='circle'
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        classes={{
          badge: classes.badge,
        }}
        badgeContent={'+1'}
      >
        <WorkSpaceAvatar workspace={defaultWorkspace || {}} className={classes.menuItemAvatar} />
      </Badge>
      <Menu
        className={classes.menu}
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
        {workspaces.map((ws) => {
          return (
            <MenuItem
              onClick={() => handleWorkspaceChange(ws.id)}
              key={ws.id}
              disableGutters
              className={classes.menuItem}
            >
              <WorkSpaceAvatar className={classes.menuItemAvatar} workspace={ws} />
              {ws.name}
            </MenuItem>
          );
        })}
      </Menu>
    </TopBarShortcut>
  );
};

export default WorkspaceSwitcher;

const useStyles = makeStyles((theme) => ({
  badge: {
    background: theme.colors.orange,
  },
  menu: {
    marginTop: theme.spacing(),
  },
  menuItem: {
    textDecoration: 'none',
    padding: theme.spacing(1, 2),
    color: theme.colors.mainText,
    fontSize: 14,
    fontFamily: 'fmedium',
    minWidth: '20ch',
    borderBottom: `1px solid ${theme.colors.lightGray}`,
  },
  menuItemAvatar: {
    marginRight: theme.spacing(),
  },
}));
