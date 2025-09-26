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
import { getActors, deleteActor } from '../../store/slices/actorsSlice';

function ActorsList() {
  const dispatch = useDispatch();
  const actors = useSelector((state) => state.actorsList.actors);

  useEffect(() => {
    dispatch(getActors());
  }, [dispatch]);

  return (
    <>
      <List>
        {actors.map((actor) => (
          <ListItem
            key={actor.id}
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
            divider={true}
          >
            <Link
              to={`/actors/${actor.id}`}
              style={{ display: 'flex', color: 'black' }}
            >
              <ListItemAvatar>
                <Avatar src={actor.image} />
              </ListItemAvatar>
              <ListItemText primary={actor.fullName} />
            </Link>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
              }}
            >
              <IconButton onClick={() => dispatch(deleteActor(actor.id))}>
                <DeleteIcon />
              </IconButton>
              <Link to={`/actors/new/${actor.id}`}>
                <IconButton>
                  <CreateIcon />
                </IconButton>
              </Link>
            </Box>
          </ListItem>
        ))}
      </List>
      <Stack>
        <Link to='/actors/new'>
          <Button
            size='medium'
            variant='outlined'
            style={{
              margin: '10px',
            }}
          >
            Add Actor
          </Button>
        </Link>
      </Stack>
    </>
  );
}

export default ActorsList;
