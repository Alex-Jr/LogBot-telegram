import { Bot } from "./Bot";

export interface Job {
    name: string
    frequency: string,
    execute: (bot: Bot) => () => Promise<void>
}