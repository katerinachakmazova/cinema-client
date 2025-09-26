import Slider from 'react-slick';
// =================================
import Box from '@mui/material/Box';
// =================================
import { NextArrow, PrevArrow } from './Arrows';
import { posters, settings } from '../../constants';
// =================================
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function HomePage() {
  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: '0 auto',
        padding: '10px',
        position: 'relative',
      }}
    >
      <Slider {...settings} nextArrow={<NextArrow />} prevArrow={<PrevArrow />}>
        {posters.map((poster) => (
          <Box
            key={poster.id}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: 400,
            }}
          >
            <img
              src={poster.url}
              alt=''
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default HomePage;
