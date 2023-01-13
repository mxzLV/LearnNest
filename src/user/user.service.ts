import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { LoggerService } from 'src/logger/logger.service';
import { StoreService } from 'src/store/store.service';
import { SecurityService } from './security.service';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
	constructor(
		@Inject('STORE_SERVICEuser.json') private readonly storeService: StoreService,
		private readonly loggerService: LoggerService,
		@Inject(forwardRef(() => SecurityService))
		private readonly securityService: SecurityService,
	) {}
	createUser(user: UserDto): UserDto {
		this.storeService.save(user);
		user.id = 1;
		user.createAt = new Date();
		user.updatedAt = new Date();

		return UserDto.plainToClass(user);
	}
	getUserById(id: number): UserDto {
		console.log(id);

		return {
			username: 'admin',
			password: 'admin',
		} as UserDto;
	}
	getLogger() {
		return this.loggerService;
	}
}
