import { UserEntity } from '@/domains';

export interface UsersProps {
  users: UserEntity[];
  loading: string;
  error: string;
}
