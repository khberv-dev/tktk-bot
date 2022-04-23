const {Telegraf} = require('telegraf')
const utils = require("./Utils")

const bot = new Telegraf("TOKEN")

bot.start((ctx) => {
    ctx.reply("Bu bot sizga \"lyuboy\" videoni tiktokdan \"skachat\" qilib beradi.\n" +
        "Ishonmasangiz sinab ko‘ring :)\n\n" +
        "P.S. Tiktok video url'ni jo‘nating")
})

bot.on('text', (ctx) => {
    const msg = ctx.message
    const tg = ctx.telegram
    const user = msg.from

    utils.getVideoUrl(msg.text, (r) => {
        if (r === "e") {
            tg.sendMessage(user.id, "URL xato!")
        } else {
            tg.sendVideo(user.id, {url: r}, {caption: "@tktk_robot dan yuklab olindi."})
        }
    })
})

bot.launch({allowedUpdates: false})