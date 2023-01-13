import { Inject, Injectable } from '@nestjs/common';
import { StoreConfig, STORE_CONFIG_TOKEN } from './store.config';
import * as fs from 'fs';

@Injectable()
export class StoreService {
	constructor(@Inject(STORE_CONFIG_TOKEN) private readonly storeConfig: StoreConfig) {
		if (!fs.existsSync(this.storeConfig.dirname)) {
			fs.mkdirSync(this.storeConfig.dirname);
		}
	}
	save(data: any) {
		fs.appendFileSync(
			`${this.storeConfig.dirname}/${this.storeConfig.filename}`,
			JSON.stringify(data),
		);
	}
}
