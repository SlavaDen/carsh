import UsersList from '@/components/UsersList/UsersList';
import UsersService from '@/services/users.service';
import { UsersProps } from './users.types';

const Users = ({ users, loading, error }: UsersProps) => {
  return (
    <div className='App'>
      <UsersList users={users} />
    </div>
  );
};

export default Users;

export const getStaticProps = async () => {
  const { users, loading, error } = await UsersService.getAllUsers();

  return {
    props: { users, loading, error },
  };
};
