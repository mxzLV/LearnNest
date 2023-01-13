import { Controller, Get, Post, Body, Param, ParseIntPipe, Inject } from '@nestjs/common';
import { LoggerService } from 'src/logger/logger.service';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
	constructor(
		private readonly userService: UserService,
		private readonly loggerService: LoggerService,
	) {
		console.log(loggerService === userService.getLogger());
	}
	@Post()
	createUser(@Body() user: UserDto) {
		return this.loggerService.log();
	}
	@Get(':id')
	getUserById(@Param('id', ParseIntPipe) id: number): UserDto {
		return this.userService.getUserById(id);
	}
	@Get()
	test1() {
		return this.loggerService.log();
	}
}
