import { DynamicModule, Module } from '@nestjs/common';
import {
	StoreConfig,
	StoreFeatureConfig,
	StoreRootConfig,
	STORE_CONFIG_TOKEN,
} from './store.config';
import { StoreService } from './store.service';

let rootStoreConfig: StoreConfig;
const DEFAULT_STORE_DIRNAME = 'store';
const DEFAULT_FILE_NAME = 'data.json';

@Module({ providers: [StoreService], exports: [StoreService] })
class RootStoreModule {}

@Module({})
export class StoreModule {
	static forRoot(config?: StoreRootConfig): DynamicModule {
		rootStoreConfig = StoreModule.createConfig(config);
		return {
			module: RootStoreModule,
			providers: [
				{
					provide: STORE_CONFIG_TOKEN,
					useValue: rootStoreConfig,
				},
			],
		};
	}
	static forFeature(config?: StoreFeatureConfig): DynamicModule {
		const Token = 'STORE_SERVICE' + config.filename;
		return {
			module: StoreModule,
			providers: [
				{
					provide: Token,
					useFactory: () => {
						const featureStoreConfig = StoreModule.createConfig({
							...rootStoreConfig,
							...config,
						});
						return new StoreService(featureStoreConfig);
					},
				},
			],
			exports: [Token],
		};
	}
	private static createConfig(config: StoreConfig): StoreConfig {
		const defaultConfig: StoreConfig = {
			dirname: DEFAULT_STORE_DIRNAME,
			filename: DEFAULT_FILE_NAME,
		};
		return { ...defaultConfig, ...config };
	}
}
