import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
export function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        right: 0,
        zIndex: 2,
      }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon />
    </div>
  );
}

export function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: 0,
        zIndex: 2,
      }}
      onClick={onClick}
    >
      <ArrowBackIosIcon />
    </div>
  );
}
