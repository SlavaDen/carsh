import { UserEntity } from '@/domains/entities/user.entity';

export interface UserInterface {
  getAllUsers(): Promise<GetAllUsersData>;
}

interface GetAllUsersData {
  users: UserEntity[];
  loading: boolean;
  error: string;
}
