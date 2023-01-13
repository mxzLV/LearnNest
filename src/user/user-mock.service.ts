import { UserDto } from './user.dto';

export class UserMockService {
	create(user: UserDto): UserDto {
		return { username: 'Mock name', password: 'mock-password' } as UserDto;
	}
}
