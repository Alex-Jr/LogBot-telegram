import axios from 'axios';
import type { Bot } from '../interfaces/Bot';
import type { Job } from '../interfaces/Jobs';
import type { SpeedtestResponse } from '../interfaces/SpeedtestResponse';

// speedtest notification integration with henrywhitaker3/speedtest-tracker
function speedtestNotification(bot: Bot) {
    return async function () {
        const { latest } = (await axios.get(process.env.SPEEDTEST_BASEURL + "/api/speedtest/home/7")).data as SpeedtestResponse
    
        const latestDownload = parseFloat(latest.data.download);
        const averageDownload = parseFloat(latest.average.download);
        const latestUploud= parseFloat(latest.data.upload);
        const averageUploud = parseFloat(latest.average.upload);
        const latestPing = parseFloat(latest.data.ping);
        const averagePing = parseFloat(latest.average.ping);
    
        let shouldNotify = false
         // Se último é 20% menor que a média
        if(latestDownload <=  averageDownload * 0.8) shouldNotify = true;
        if(latestUploud <=  averageUploud * 0.8) shouldNotify = true;
        if(latestPing <=  averagePing * 0.8) shouldNotify = true;
    
    
        if(shouldNotify) {
            bot.telegram.sendMessage(
                process.env.OWNER_CHATID!, 
                ` Ultimo teste\n` + 
                `🕐 ${Date.now()}` +
                `⬇️ ${latestDownload} Mb/s\n` +
                `⬆️ ${latestUploud} Mb/s\n` +
                `🔁 ${latestPing} ms`
            )
        }
    }
}

export default {
    frequency: "5 */1 * * *",
    execute: speedtestNotification
} as Job
