exports.run = async (client, message) => {
    const discord = require('discord.js')
    message.channel.send('Todos os comandos:\n\`\`\`addcargo <@pessoa> <@cargo>\naddemoji <nome> <link>\nanuncio\nban <pessoa> <motivo>\nbeijar <pessoa>\nbotinfo\nchatoff\nchaton\nconfig <nome/avatar>\nconvite\ndelcargo <@pessoa> <@cargo>\nemoji <emoji>\nfakemsg <pessoa> <msg>\nkick <pessoa> <motivo>\nlimpar <numero>\nmute <pessoa>\nserverinfo\nsetname <emoji> <nome>\ntag\nunban <pessoa>\nunmute <pessoa>\nuserinfo <pessoa>\nwarn\`\`\`')
}
module.exports.help = {
    name: "ajuda",
    aliases: ["?", "help"]
}    