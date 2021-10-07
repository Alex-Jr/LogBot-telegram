import { Markup } from "telegraf"
import type { Context } from "telegraf"
import type { Command } from "../interfaces/Command"

const data = {
    name: 'start',
    description: 'First interaction'
}

function execute(ctx: Context) {
    ctx.reply(
        'Comandos disponíveis', 
        Markup.keyboard([
            ["/kiss"]
        ])
    )  
}

export default {
    data,
    execute
} as Command