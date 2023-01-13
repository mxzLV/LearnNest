import { Inject, Injectable } from '@nestjs/common';
import { StoreService } from 'src/store/store.service';
import { PostDto } from './post.dto';

@Injectable()
export class PostService {
	constructor(@Inject('STORE_SERVICEpost.json') private readonly storeSevice: StoreService) {}
	createPost(post: PostDto) {
		this.storeSevice.save(post);
	}
}
