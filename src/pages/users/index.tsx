import UsersService from '@/services/users.service';
import { UsersProps } from './users.types';

const Users = ({ users, loading, error }: UsersProps) => {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {users.map((user) => (
          <div key={user.id}>{user.id}</div>
        ))}
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
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
