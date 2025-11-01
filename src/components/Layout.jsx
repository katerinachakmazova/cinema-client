import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
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

function Layout() {
  const {pathname} = useLocation();
  const shouldFormRenderInOutlet = pathname.includes('new');
  const isSmUp = useMediaQuery('(min-width:650px)');
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
            <Grid
              size={2}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                borderRight: '1px solid lightgrey',
              }}
            >
              <NavBar style={{ marginLeft: '20px' }} />
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
          {isSmUp ? (
             <Grid container size={{ xs: 12, md: 10 }}>
              <Grid size={8}>
                <Outlet/>
              </Grid>
              <Grid size={4}><CinemaService/></Grid>
          </Grid>
          ):(
            <Grid size={12}>
            {shouldFormRenderInOutlet ? (<CinemaService/>) : (<Outlet/>)}

            </Grid>
          )}

        </Grid>
        <Grid size={12}>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Layout;
