import 'dotenv/config';
import { schedule } from 'node-cron';
import { Telegraf } from 'telegraf';
import commands from './commands';
import jobs from './job';
import middlewares from './middleware';

const token = process.env.TOKEN!;

export const bot = new Telegraf(token);

middlewares.forEach((middleware) => 
    bot.use(middleware)
)

commands.forEach((command) => {
    bot.command(command.data.name, command.execute)
});

bot.launch();

jobs.forEach((job) => {
    schedule(job.frequency, job.execute(bot))
});

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))