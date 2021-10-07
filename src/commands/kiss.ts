import { Markup } from "telegraf"
import type { Context } from "telegraf"
import type { Command } from "../interfaces/Command"

const data = {
    name: 'kiss',
    description: 'Send a kiss'
}

function execute(ctx: Context) {
    ctx.reply("https://tenor.com/view/cat-kissing-mwah-cat-kissing-camera-gif-21041612")
}

export default {
    data,
    execute
} as Command