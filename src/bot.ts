import 'dotenv/config'
import { Telegraf, Markup } from 'telegraf'

const token = process.env.TOKEN!

const bot = new Telegraf(token)

bot.use(Telegraf.log())

bot.command('start', (ctx) => 
    ctx.reply(
        'Comandos disponíveis', 
        Markup.keyboard([
            ["/kiss"]
        ])
    )  
)

bot.command('help', (ctx) => 
    ctx.reply(
        'Comandos disponíveis', 
        Markup.keyboard([
            ["/kiss"]
        ])
    )  
)

bot.command('kiss', (ctx) => 
    ctx.reply("https://tenor.com/view/cat-kissing-mwah-cat-kissing-camera-gif-21041612")
)

bot.command('info', (ctx) => {
    ctx.reply(
        `Oi, eu sou ${ctx.botInfo.first_name}`
    )
})

bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))