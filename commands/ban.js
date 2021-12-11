exports.run = (client, message, args, err) => {

    const discord = require('discord.js')

    if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('Não tens permissão.')

    let userban = message.guild.member(message.mentions.users.first() || client.users.get(args[0]))
    if(!userban) return message.reply('Para poder banir um usuário tem que o mencionar.')

    let userid = userban.id
    if(!userban.bannable) return message.reply('Não será possível banir esse usuário.')

    if(userban.id === message.author.id) return message.reply('Não te podes banir.')

    let razao = args.slice(1).join(' ')
    if(!razao) razao = 'Não foi dado um motivo.'
    let canal = client.channels.get('707559048152875070')

    let ban = new discord.RichEmbed()
    .setTitle('Ban')
    .setColor('#8f1010')
    .addField('Autor:', message.author.username)
    .addField('Punido:', userban.user.username)
    .addField('Motivo:', razao)


    message.guild.ban(userid, {reason: razao})
    message.channel.send('Usuário banido com sucesso.')
    canal.send(ban)
}
module.exports.help = {
    name: "ban",
    aliases: ["banir"]
}



