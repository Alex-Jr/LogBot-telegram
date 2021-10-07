import { Markup } from "telegraf"
import type { Context } from "telegraf"
import type { Command } from "../interfaces/Command"

const data = {
    name: 'kiss',
    description: 'Send a kiss'
}

const url = [
    "https://tenor.com/view/cat-kissing-mwah-cat-kissing-camera-gif-21041612",
    "https://tenor.com/view/racoon-cat-gif-10153591",
    "https://tenor.com/view/raccoon-dog-kisses-gif-15175501",
    "https://tenor.com/view/dog-cat-kiss-gif-5527386",
    "https://tenor.com/view/cat-dog-play-gif-4728498"
]

function execute(ctx: Context) {
    ctx.reply(url[Math.floor(Math.random() * url.length)])
}

export default {
    data,
    execute
} as Command