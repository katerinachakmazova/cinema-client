import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
//==================================================
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { ListItemText } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
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
      <Stack>
        <Link to='new'>
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
              to={`${actor.id}`}
              style={{ display: 'flex', color: 'black' }}
            >
              <ListItemAvatar>
                <Avatar src={actor.image} />
              </ListItemAvatar>
              <ListItemText primary={actor.fullName} />
            </Link>
            <div>
              <IconButton onClick={() => dispatch(deleteActor(actor.id))}>
                <DeleteIcon />
              </IconButton>
              <Link to={`new/${actor.id}`}>
                <IconButton>
                  <CreateIcon />
                </IconButton>
              </Link>
            </div>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ActorsList;
