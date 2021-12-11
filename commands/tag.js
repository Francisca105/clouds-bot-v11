exports.run = (client, message, args, err) => {
    const discord = require('discord.js')
        message.member.setNickname(message.author.username + ' #Clouds')
    let embed = new discord.RichEmbed()
    .setTitle('📺 Tag')
    .setColor('#ee00ff')
    .setDescription('Tag adicionada com sucesso!')
    .setFooter(message.author.username)
        message.channel.send(embed)
}
module.exports.help = {
    name: "tag",
    aliases: ["addtag", "setartag"]
}