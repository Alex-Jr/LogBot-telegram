import type { Context } from "telegraf"

export interface Command {
    data: {
        name: string,
        description: string
    },
    execute: (context: Context) => Promise<void>
}