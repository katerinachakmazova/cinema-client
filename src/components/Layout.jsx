import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// ======================================
import Header from './Header/Header';
import Footer from './Footer/Footer';
import NavBar from './Navigation/NavBar';
import CinemaService from './Service/CinemaService';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Paper } from '@mui/material';

function Layout() {
  const isMdUp = useMediaQuery('(min-width:900px)');
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);
  return (
    <Box>
      <Grid container direction='column'>
        <Grid size={12}>
          <Header onMenuClick={toggleDrawer} displayIcon={isMdUp} />
        </Grid>
        <Grid container>
          {isMdUp ? (
            <Grid size={2}   sx={{display: 'flex', flexDirection:'column', alignItems: 'center', borderRight: '1px solid lightgrey' }}>
              <NavBar style={{marginLeft: '20px'}}/>
            </Grid>
          ) : (
            <Drawer anchor='left' open={open} onClose={toggleDrawer}>
              <Box sx={{ margin: '10px auto' }}>
                <WidgetsIcon sx={{ fontSize: '50px' }} color='primary' />
                <Typography variant='h6' color='primary'>
                  Menu
                </Typography>
              </Box>
              <NavBar onClick={toggleDrawer} />
            </Drawer>
          )}
          <Grid size={{ xs: 8, md: 6 }}>
            <Outlet />
          </Grid>
          <Grid size={4}>
            <CinemaService />
          </Grid>
        </Grid>
        <Grid size={12}>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Layout;
