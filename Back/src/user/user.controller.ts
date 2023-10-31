import { User } from './user';
import { UserService } from './user.service';

export class UserController {
    constructor(private userService: UserService) {}

    add(user: User): User {
        return this.userService.add(user);
    }

    getById(id: number): User | null {
        return this.userService.getById(id);
    }
}
