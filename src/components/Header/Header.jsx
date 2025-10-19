import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
function Header({ onMenuClick, displayIcon }) {
  return (
    <Box sx={{ flexGrow: 1, mb: 10, position: 'sticky', zIndex: 2 }}>
      <AppBar>
        <Toolbar>
          {!displayIcon && (
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              sx={{ mr: 2 }}
              onClick={onMenuClick}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
            Cinema
          </Typography>
          <div>
            <IconButton size='large' color='inherit'>
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
