import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

function Footer() {
  const theme = useTheme();
  const infoStyle = {
    wordBreak: 'break-word',
  };
  const textStyle = {
    color: theme.palette.primary.contrastText,
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        mt: 3,
        minHeight: '70px',
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Box mr={1} ml={1}>
        <Typography variant='subtitle1' fontWeight='bold' sx={textStyle}>
          Telephone
        </Typography>
        <Typography variant='subtitle1' sx={{...textStyle, ...infoStyle}}>
          +380000000000
        </Typography>
      </Box>
      <Box ml={1}>
        <Typography variant='subtitle1' fontWeight='bold' sx={textStyle}>
          Email
        </Typography>
        <Typography variant='subtitle1' sx={{...textStyle, ...infoStyle}}>
          example@gmail.com
        </Typography>
      </Box>
      <Box ml={1}>
        <Typography variant='subtitle1' fontWeight='bold' sx={textStyle}>
          All copyrights reserved
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
