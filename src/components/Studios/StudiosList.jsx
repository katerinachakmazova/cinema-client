import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
//==================================================
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText  from '@mui/material/ListItemText';
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
//==================================================
import { getStudios, deleteStudio } from '../../store/slices/studiosSlice';

function StudiosList() {
  const dispatch = useDispatch();
  const studios = useSelector((state) => state.studiosList.studios);

  useEffect(() => {
    dispatch(getStudios());
  }, [dispatch]);

  return (
    <>
    <h2>Studios</h2>
      <List sx={{marginLeft:'20px'}}>
        {studios.map((studio) => (
          <ListItem
            key={studio.id}
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
            divider={true}
          >
            <Link
              to={`/studios/${studio.id}`}
              style={{ display: 'flex', color: 'black' }}
            >
              <ListItemAvatar>
                <Avatar src={studio.logo} />
              </ListItemAvatar>
              <ListItemText primary={studio.title} />
            </Link>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
              }}
            >
              <IconButton onClick={() => dispatch(deleteStudio(studio.id))}>
                <DeleteIcon />
              </IconButton>
              <Link to={`/studios/new/${studio.id}`}>
                <IconButton>
                  <CreateIcon />
                </IconButton>
              </Link>
            </Box>
          </ListItem>
        ))}
      </List>
      <Stack>
        <Link to='/studios/new'>
          <Button
            size='medium'
            variant='outlined'
            style={{
              margin: '10px',
            }}
          >
            Add Studio
          </Button>
        </Link>
      </Stack>
    </>
  );
}

export default StudiosList;
