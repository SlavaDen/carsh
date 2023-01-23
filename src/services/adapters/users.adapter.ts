import { isArray } from 'lodash';
import { isValueExist } from '@/helpers';
import { UserDTO } from '@/models';

const UsersAdapter = {
  toInternalShortArray: (users: UserDTO[]) => {
    if (isArray(users)) {
      return users.map((user) => {
        return {
          id: isValueExist(user?.id),
          firstName: isValueExist(user?.firstName),
          lastName: isValueExist(user?.lastName),
          maidenName: isValueExist(user?.maidenName),
          phone: isValueExist(user?.phone),
          image: isValueExist(user?.image),
        };
      });
    }

    return [];
  },
};

export default UsersAdapter;
