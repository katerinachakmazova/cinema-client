import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/material';


function Footer() {
  const infoStyle = {
    wordBreak: 'break-word',
  };
  return (
    <AppBar
      sx={{
        display: 'flex',
        flexDirection: 'row',
        position:'static',
        justifyContent: 'space-around',
        alignItems: 'center',
        mt: 3,
        minHeight: '70px',
      }}
    >
      <Box mr={1} ml={1}>
        <Typography variant='subtitle1' fontWeight='bold'>
          Telephone
        </Typography>
        <Typography variant='subtitle1' sx={{ ...infoStyle }}>
          +380000000000
        </Typography>
      </Box>
      <Box ml={1}>
        <Typography variant='subtitle1' fontWeight='bold'>
          Email
        </Typography>
        <Typography variant='subtitle1' sx={{ ...infoStyle }}>
          example@gmail.com
        </Typography>
      </Box>
      <Box ml={1}>
        <Typography variant='subtitle1' fontWeight='bold'>
          All copyrights reserved
        </Typography>
      </Box>
    </AppBar>
  );
}

export default Footer;
