const Discord = require('discord.js');
const moment = require('moment');
moment.locale('pt')
module.exports.run = async (client, message, args) => {
    
  if (args.length < 1) {
    message.reply('Indique o nome de um emoji!');
}
if(args.join(' ').slice(0)){
  var emoji = client.emojis.find('name', `${args[0]}`) || client.emojis.find('id', `${args.join(' ').slice(0)}`)
  if(emoji){
      const an = {
          true: 'Sim',
          false: 'Não'
        };
        let emojinfo= new Discord.RichEmbed()
        .setAuthor(`Informações:`, emoji.url)
        .setColor('#9900ff')
        .addField('Nome:', args.join('').slice(0))
        .addField("Animado :",  an[emoji.animated])
        .addField("Criado em :",  moment(emoji.createdAt).format('LLLL'))
        .addField("ID :", emoji.id)
        .addField("Identificador :", `\`${emoji}\``)
        .addField("Link :",`**[Clique aqui](${emoji.url})**`)
        .setTimestamp()
        .setThumbnail(emoji.url)

      message.channel.send(emojinfo)
    } else {
      message.reply('Esse emoji não existe.')
    }
  }
}

module.exports.help = {
    name: "emoji",
  aliases: ['ei']
}