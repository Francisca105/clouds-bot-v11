exports.run = (client, message, args, err) => {
    const Mute = require('../models/Mute.js')
    const discord = require('discord.js')
    if(!message.member.hasPermission(["ADMINISTRATOR"])) return message.reply('Não tens permissão!')

    let mutar = message.mentions.members.first() || message.guild.members.get(args[0]) 
    if(!mutar) return message.reply('Escolha alguém para mutar!')
    let razao = args.slice(1).join(' ')
    if(!razao) razao = 'Não foi dado um motivo.'

    let mutado = await Mute.findOne({ where: { mutado: mutar.id, mute: false }}).catch(err => console.log(err))
    if(mutado) {
        Mute.update({ mute: true }, { where: { mutado: mutar.id, mute: false }}).catch(err => console.log(err))
        let canal = client.channels.get('707559048152875070')
        let mutE = new discord.RichEmbed()
        .setTitle('Mute')
        .setColor('#ff0022')
        .addField('Autor:', message.author.username)
        .addField('Punido:', mutar.user.username)
        .addField('Motivo:', razao)

        canal.send(mutE)
        message.channel.send('Usuário mutado com sucesso.')
    }

    else{
    let mute = await Mute.create({
        guild: message.guild.id,
        mutado: mutar.id,
        mute: true
    }).catch(err => console.log(err))

    let canal = client.channels.get('707559048152875070')
    let mutE = new discord.RichEmbed()
    .setTitle('Mute')
    .setColor('#ff0022')
    .addField('Autor do Mute:', message.author.username)
    .addField('Usuário punido:', mutar.user.username)
    .addField('Motivo:', razao)
    .setFooter('Cumpre as regras!')

    mute
    canal.send(mutE)
    message.channel.send('Usuário mutado com sucesso.')
}}
module.exports.help = {
    name: "mute",
    aliases: ["mutar"]
}