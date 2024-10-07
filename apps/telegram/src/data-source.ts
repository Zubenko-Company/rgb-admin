import { DataSource } from 'typeorm';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { Config } from './models/all.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: Config.DB_HOST,
	port: Config.DB_PORT,
	password: Config.DB_PASSWORD,
	username: Config.DB_USERNAME,
	database: 'RuleGuideBot',
	synchronize: true,
	logging: false,
	entities: [__dirname + '/models/entity/*.ts'],
	migrations: [],
	subscribers: [],
});
