import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';

// ======================================
import Header from './Header/Header';
import Footer from './Footer/Footer';
import NavBar from './Navigation/NavBar';
import CinemaService from './Service/CinemaService';

function Layout() {
  return (
    <Box>
      <Grid container direction='column'>
        <Grid size={12}>
          <Header/>
        </Grid>
        <Grid container>
          <Grid size={2}>
            <NavBar/>
          </Grid>
          <Grid size={6}>
            <Outlet/>
          </Grid>
          <Grid size={4}>
            <CinemaService/>
          </Grid>          
        </Grid>
        <Grid size={12}>
            <Footer/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Layout;
