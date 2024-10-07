import { DataSource } from 'typeorm';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: 'localhost',
	port: 5432,
	password: 'postgres',
	username:'postgres',
	database: 'RuleGuideBot',
	synchronize: true,
	logging: false,
	entities: [__dirname + '/models/entity/*.ts'],
	migrations: [],
	subscribers: [],
});
