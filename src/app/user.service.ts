import { Subject } from 'rxjs';

export class UserService {
    userRegistered = new Subject();
}