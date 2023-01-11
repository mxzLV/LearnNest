import { Controller, Get, Post, Body, Param, ParseIntPipe } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { UserDto } from "./user.dto";

@Controller("user")
export class UserController {
	@Post()
	createUser(@Body() user: UserDto): UserDto {
		user.id = 1;
		user.createAt = new Date();
		user.updatedAt = new Date();

		return UserDto.plainToClass(user);
	}
	@Get(":id")
	getUserById(@Param("id", ParseIntPipe) id: number): UserDto {
		console.log(id);

		return {
			username: "admin",
			password: "admin",
		} as UserDto;
	}
}
