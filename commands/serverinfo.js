exports.run = (client, message, args, err) => {
    const discord = require('discord.js')
    const moment = require('moment')
    moment.locale('pt')

    let verifLevels = ["Nenhum", "Baixo", "Médio", "Alto", "Extremo ★"]
    let guild = message.guild
    const region = {
        brazil: ':flag_br: Brazil',
        europe: ':flag_eu: Europa',
      }

    let sv = new discord.RichEmbed()
    .setTitle(guild.name)
    .setThumbnail(guild.iconURL)
    .setDescription('Todas as informações do servidor!',true)
    .addField('Dono:', guild.owner +'(' + guild.owner.id + ')',true)
    .addField('Id:', guild.id,true)
    .addField("Nível de verificação:", verifLevels[message.guild.verificationLevel],true)
    .addField('Região:', region[guild.region],true)
    .addField('Cargos:', guild.roles.size,true)
    .addField('Canais:', guild.channels.size,true)
    .addField('Membros:', guild.members.size,true)
    .addField('Criado em:', moment(guild.createdAt).format('LLLL') ,true)
    .addField('Entrei em:', moment(guild.joinedAt).format('LLLL') ,true)
    .addField('Entras-te em:', moment(message.member.joinedAt).format('LLLL'),true)
    .setColor('#10c77e')

    message.channel.send(sv)

}
module.exports.help = {
    name: "serverinfo",
    aliases: ["discord", "servidorinfo", "svinfo"]
}