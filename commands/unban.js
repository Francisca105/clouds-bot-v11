exports.run = (client, message, args, err) => {
    const discord = require('discord.js')
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('Não tens permissão.')
    let canal = client.channels.get('707559048152875070')
    let userban = args[0]
    if(!userban) return message.reply('Coloca o id da pessoa que queres desbanir.')

    message.guild.unban(userban)

    let ban = new discord.RichEmbed()
    .setTitle('UnBan')
    .setColor('#33c712')
    .addField('Autor do unban:', message.author)
    .addField('Usuário perdoado:', '<@' + userban + '>')


    message.channel.send('Usuário desbanido com sucesso.')
    canal.send(ban)
}
module.exports.help = {
    name: "unban",
    aliases: ["desbanir"]
}