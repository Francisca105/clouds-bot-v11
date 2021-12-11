const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = (client, message, args) => {
  if(!message.member.hasPermission('MANAGE_ROLES'))  return message.reply("Não tens permissão para esse comando!")
  
  let membro = message.mentions.members.first();
      if(!membro) return message.reply('Para poder executar o comando, tem que mencionar um membro!')

  let role = message.mentions.roles.first();
      if(!role) return message.reply('Para poder executar o comando, tem que mencionar um cargo!')

  if(!membro.roles.has(role.id)) return message.reply("O membro mencionado não possui esse cargo.")
  
  let cr = new Discord.RichEmbed()
        .setTitle("Cargo Update!")
        .setDescription(`Executado por: ${message.author.username}\n${membro} retirou o cargo: <@&${role.id}> `)
        .setFooter(client.user.username + " » " + message.author.tag, client.user.avatarURL)
        .setColor(`#821a0a`)
        .setTimestamp();

  membro.removeRole(role)
    message.channel.send("Cargo retirado ao usuário com sucesso!").then(
  message.channel.send(cr)
    )

  
        };
        module.exports.help = {
            name: "delcargo",
            aliases: ["tirarcargo", "delrole", "tirarrole"]
           }