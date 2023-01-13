import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { StoreModule } from './store/store.module';
import { LoggerService } from './logger/logger.service';
import { LoggerModule } from './logger/logger.module';

@Module({
	imports: [UserModule, PostModule, StoreModule.forRoot(), LoggerModule],
	providers: [LoggerService],
})
export class AppModule {}
