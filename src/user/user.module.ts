import { Module } from '@nestjs/common';
import { LoggerService } from 'src/logger/logger.service';
import { StoreModule } from 'src/store/store.module';
import { SecurityService } from './security.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
	imports: [
		StoreModule.forFeature({
			filename: 'user.json',
		}),
	],
	controllers: [UserController],
	providers: [UserService, LoggerService, SecurityService],
})
export class UserModule {}
