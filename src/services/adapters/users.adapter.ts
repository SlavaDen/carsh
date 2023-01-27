import { isArray } from 'lodash';
import { isValueExist } from '@/helpers';
import { UserDTO } from '@/models';
import { UserEntity } from '@/domains';

const UsersAdapter = {
  toInternalShortArray: (users: UserDTO[]): UserEntity[] => {
    if (isArray(users)) {
      return users.map((user) => {
        return {
          id: isValueExist(user?.id),
          surname: isValueExist(user?.surname),
          name: isValueExist(user?.name),
          patronymic: isValueExist(user?.patronymic),
          age: isValueExist(user?.age),
          gender: isValueExist(user?.gender),
          email: isValueExist(user?.email),
          phone: isValueExist(user?.phone),
          birthDate: isValueExist(user?.birthDate),
          image: isValueExist(user?.image),
          height: isValueExist(user?.height),
          weight: isValueExist(user?.weight),
          address: isValueExist(user?.address),
          company: isValueExist(user?.company),
        };
      });
    }

    return [];
  },
};

export default UsersAdapter;
