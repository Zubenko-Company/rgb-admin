import 'reflect-metadata';
import { session, Telegraf } from 'telegraf';
import { Config } from '@rgbadmin/config';
import { createStage } from './view/createStage.js';
import { SceneAgreement } from './view/agreement/index.js';
import { AppDataSource } from './data-source.js';
import { InformerContext } from './view/context.js';

(async () => {
	await AppDataSource.initialize();

	const bot = new Telegraf(Config.BOT_TOKEN, {
		contextType: InformerContext,
	});
	bot.use(session());

	const stage = createStage();
	bot.use(stage.middleware());

	bot.start((ctx) => {
		console.log('Новое подключение');
		return ctx.scene.enter(SceneAgreement.id);
	});

	bot.launch();

	bot.catch((err) => console.log(err));

	// Enable graceful stop
	process.once('SIGINT', () => bot.stop('SIGINT'));
	process.once('SIGTERM', () => bot.stop('SIGTERM'));
})();
