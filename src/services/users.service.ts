import { initializeApollo } from '@/apollo/client';
import { ALL_USERS } from '@/apollo/users';
import { UserInterface } from '@/domains';
import { isValueExist } from '@/helpers';
import UsersAdapter from '@/services/adapters/users.adapter';

const UsersService: UserInterface = {
  getAllUsers: async () => {
    const apolloClient = initializeApollo();

    const { data, loading, error } = await apolloClient.query({
      query: ALL_USERS,
    });

    return {
      users: UsersAdapter.toInternalShortArray(data?.users),
      loading: isValueExist(loading),
      error: isValueExist(error),
    };
  },
};

export default UsersService;
