import type { Context } from "telegraf";

export default function log(ctx: Context, next: () => void) {
    if(ctx.message ) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        console.log(`${ctx.message.text} invoked ${ctx.message.from.username} at ${ctx.message.date}`);
    }
   
    return next()
}