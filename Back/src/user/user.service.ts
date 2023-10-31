import { User } from './user';

export interface UserService {
    add(user: User): User;
    getById(id: number): User | null;
}
