import { Telegraf } from 'telegraf';
import { default as log } from './log'

const middlewares = [
    log
]

export default middlewares;