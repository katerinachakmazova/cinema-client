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

function Layout() {
  const isMdUp = useMediaQuery('(min-width:650px)');
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
            <Grid size={2}>
              <NavBar />
            </Grid>
          ) : (
            <Drawer anchor='left' open={open} onClose={toggleDrawer}>
              <NavBar onClick={toggleDrawer}/>
            </Drawer>
          )}
          <Grid size={{ xs: 8, sm: 6 }}>
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
