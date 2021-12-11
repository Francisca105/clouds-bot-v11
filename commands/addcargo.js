const Discord = require('discord.js');
const Client = new Discord.Client();
module.exports.run = (client, message, args) => {
  if(!message.member.hasPermission('MANAGE_ROLES'))  return message.reply("Não tens permissão para esse comando!")
  
  let membro = message.mentions.members.first();

      if(!membro) return message.reply('Para poder executar o comando tem que mencionar um membro!')

  let role = message.mentions.roles.first();
  
      if(!role) return message.reply('Para poder executar o comando tem que mencionar um cargo!')

  if(membro.roles.has(role)) return message.reply("O membro mencionado já possui esse cargo.")
  
  let embed = new Discord.RichEmbed()
        .setTitle("Cargo Update")
        .setDescription(`Executado por: ${message.author.username}\n${membro} recebeu o cargo: <@&${role.id}> `)
        .setFooter(client.user.username + " » " + message.author.tag, client.user.avatarURL)
        .setColor(`#37d90f`)
        .setTimestamp();

  membro.addRole(role).then(
  message.reply(`Cargo adicionado ao usuário com sucesso!`).then(message.channel.send(embed))
  )};
  module.exports.help = {
    name: "addcargo",
    aliases: ["darcargo", "addrole", "darrole"]
   }