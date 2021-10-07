import type { Context, Telegraf } from "telegraf";
import type { Update } from "typegram";

export type Bot = Telegraf<Context<Update>>