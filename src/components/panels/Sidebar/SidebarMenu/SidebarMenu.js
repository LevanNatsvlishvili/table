import React from 'react';
import { List, makeStyles } from '@material-ui/core';
import SingleMenu from 'components/panels/Sidebar/SingleMenu';
import { mdiViewDashboard } from '@mdi/js';
import Icon from '@mdi/react';
import P from 'paths';

const SidebarMenu = () => {
  const classes = useStyles();

  return (
    <List className={classes.sidebarLists}>
      <SingleMenu url={P.DASHBOARD_MODULE} text='Dashboard' icon={<img src='/icons/sidebarIcons/dashboard.svg' />} />
      <SingleMenu url='#' text='Website Builder' icon={<img src='/icons/sidebaricons/worker.svg' />} />
      <SingleMenu url='#' text='Sales' icon={<img src='/icons/sidebaricons/speed.svg' />} />
      <SingleMenu url={P.AD.CREATE} text='Ad Creation' icon={<img src='/icons/sidebaricons/megaphone.svg' />} />
      <SingleMenu url={P.AUDIENCES_MODULE} text='Audiences' icon={<img src='/icons/sidebaricons/user.svg' />} />
      <SingleMenu url={P.CONVERSIONS.MODULE} text='Conversions' icon={<img src='/icons/sidebaricons/repeat.svg' />} />
      <SingleMenu url={P.REPORTING_MODULE} text='Reporting' icon={<img src='/icons/sidebaricons/pie-chart.svg' />} />
      <SingleMenu url='/CRM' text='CRM' icon={<img src='/icons/sidebaricons/crm.svg' />} />
      <SingleMenu url='#' text='Manual Sender' icon={<img src='/icons/sidebaricons/send.svg' />} />
      <SingleMenu url='#' text='Flow Builder' icon={<img src='/icons/sidebaricons/flow.svg' />} />
      <SingleMenu url='#' text='Rule Builder' icon={<img src='/icons/sidebaricons/rules.svg' />} />
    </List>
  );
};

export default SidebarMenu;

const useStyles = makeStyles((theme) => ({
  sidebarLists: {
    paddingTop: theme.spacing(3),
    position: 'relative',
    borderTop: '1px solid #2f3641',
    overflowX: 'hidden',
  },
}));
