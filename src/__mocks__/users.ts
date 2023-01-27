import { UserEntity } from '@/domains';

export const USER_MOCK: UserEntity = {
  id: 1,
  surname: 'Terry',
  name: 'Medhurst',
  patronymic: 'Smitham',
  age: 50,
  gender: 'male',
  email: 'atuny0@sohu.com',
  phone: '+63 791 675 8914',
  birthDate: '2000-12-25',
  image: 'https://robohash.org/hicveldicta.png',
  height: 189,
  weight: 75.4,
  address: '1745 T Street Southeast',
  company: "Blanda-O'Keefe",
};

export const USERS_MOCK: UserEntity[] = [USER_MOCK];
