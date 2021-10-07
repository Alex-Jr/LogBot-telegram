import { Bot } from "./Bot";

export interface Job {
    frequency: string,
    execute: (bot: Bot) => () => Promise<void>
}