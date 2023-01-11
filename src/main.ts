import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import "dotenv/config";
import { ValidationPipe } from "@nestjs/common/pipes";

const bootstrap = async (): Promise<void> => {
	const app = await NestFactory.create(AppModule);
	const PORT = process.env.PORT || 3000;
	app.useGlobalPipes(new ValidationPipe());
	await app.listen(PORT, () => {
		console.log(`Listening on PORT: ${PORT}`);
	});
};
bootstrap();
