export interface UserEntity {
  id: number;
  surname: string;
  name: string;
  patronymic: string;
  age: number;
  gender: 'male' | 'female';
  email: string;
  phone: string;
  birthDate: string;
  image: string;
  height: number;
  weight: number;
  address: string;
  company: string;
}
