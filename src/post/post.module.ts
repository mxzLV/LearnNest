import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { StoreModule } from 'src/store/store.module';

@Module({
	imports: [
		StoreModule.forFeature({
			filename: 'post.json',
		}),
	],
	providers: [PostService],
	controllers: [PostController],
})
export class PostModule {}
