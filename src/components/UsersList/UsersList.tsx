import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Stack,
} from '@mui/material';
import { UsersListProps } from './UsersList.types';

const UsersList = ({ users }: UsersListProps) => {
  return (
    <>
      {users.map((user) => (
        <List key={user.id} data-testid='user-list'>
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar alt={user.name} src={user.image} />
            </ListItemAvatar>
            <ListItemText
              primary={`${user.surname} ${user.name} ${user.patronymic}`}
              secondary={
                <Stack>
                  <Typography variant='body2' color='text.primary'>
                    Age: {user.age}
                  </Typography>
                  <Typography variant='body2' color='text.primary'>
                    Phone: {user.phone}
                  </Typography>
                  <Typography variant='body2' color='text.primary'>
                    Email: {user.email}
                  </Typography>
                </Stack>
              }
            />
          </ListItem>
        </List>
      ))}
    </>
  );
};

export default UsersList;
