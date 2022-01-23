import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Button, Grid } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import * as React from 'react';
import { Route } from 'react-router-dom';
import { Link, Switch, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import AdminRout from '../AdminRout/AdminRout';
import MakeAdmin from '../AdminRoute/MakeAdmin/MakeAdmin';
import MyBooking from '../AllBooking/MyBooking';
import AddHotCars from '../Home/HotCar/AddHotCars/AddHotCars';
import useAuth from '../Hooks/UseAuth';
import './DeashBoard.css';
import DeashBoardHome from './DeashBordHome/DeashBoardHome';


;



const drawerWidth = 200;

function DashboardDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const {admin} = useAuth();
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className='DRAWER'>
      <Toolbar className='DRAWER' />
      <Divider />




      <List className='m-3'>
<h1><Button className='text-light' variant="outlined"> <Link to={`${url}`}>DashBoard </Link></Button> <br/></h1>
 {/* <Link to="/dashboardDrawer"> </Link> */}



 { admin &&
 <Button  variant="outlined"> <Link to={`${url}/makeAdmin`}> MakeAdmin </Link></Button>
  }
 <br/>
<Button  variant="outlined"> <Link to={`${url}/MyBooking`}> MYBOOKING </Link></Button> <br/>
{
  admin && 
  <Button  variant="outlined"> <Link to={`${url}/AddHotCar`}> ADD CAR'S </Link></Button>
} <br/>


    
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />

    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Box sx={{ display: 'flex', marginTop: '100px' }}>
        <CssBaseline />
        <AppBar
          className="NAV"
          position="fixed"
          sx={{
            marginTop: '100px',
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box
        component="nav"
        sx={{ marginTop: '100px', width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer

          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            marginTop: '100px',
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer

          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box

        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        {/* <Toolbar /> */}

   
        <Grid sx={{justifyContent:'center'}} container spacing={2}>

  <Grid item xs={4} sx={10} >
  <Switch>
          <Route exact path={path}>
            <DeashBoardHome></DeashBoardHome>
          </Route>
          <AdminRout path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRout>
          <Route path={`${path}/MyBooking`}>
            <MyBooking></MyBooking>
          </Route>
          <AdminRout path={`${path}/AddHotCar`}>
            <AddHotCars></AddHotCars>
          </AdminRout>
        </Switch>
  </Grid>
 
</Grid>
      </Box>

    </div>



  );
}

DashboardDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashboardDrawer;
