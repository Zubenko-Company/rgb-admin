import dotenv from 'dotenv';
dotenv.config();

const getErrorEnvMessage = (fieldName: string) =>
	`Вы не установили ${fieldName} поле в .env, выполните команду \`cp .env.dist .env\` и заполните поле ${fieldName}`;

export class Config {
	static get BOT_TOKEN(): string {
		if (!process.env.BOT_TOKEN) {
			throw new Error(getErrorEnvMessage('BOT_TOKEN'));
		}

		return process.env.BOT_TOKEN;
	}

	static get ADMINS(): string[] {
		if (!process.env.ADMINS) {
			throw new Error(getErrorEnvMessage('ADMINS'));
		}

		return process.env.ADMINS.split(',');
	}

	static get DB_HOST(): string {
		if (!process.env.DB_HOST) {
			throw new Error(getErrorEnvMessage('DB_HOST'));
		}

		return process.env.DB_HOST;
	}

	static get DB_PORT(): number {
		if (!process.env.DB_PORT) {
			throw new Error(getErrorEnvMessage('DB_PORT'));
		}

		return Number(process.env.DB_PORT);
	}

	static get DB_PASSWORD(): string {
		if (!process.env.DB_PASSWORD) {
			throw new Error(getErrorEnvMessage('DB_PASSWORD'));
		}

		return process.env.DB_PASSWORD;
	}

	static get DB_USERNAME(): string {
		if (!process.env.DB_USERNAME) {
			throw new Error(getErrorEnvMessage('DB_USERNAME'));
		}

		return process.env.DB_USERNAME;
	}
}
