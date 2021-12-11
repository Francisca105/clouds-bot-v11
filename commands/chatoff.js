module.exports.run = (client, message, args) => {
    const discord = require("discord.js");
    
        let cargo = 'Dono'
        if(!message.guild.members.get(message.author.id).roles.find("name" , cargo)) {
            return message.reply(`precisas da tag \`${cargo}\` para executar esse comando`)
            }
        var da = message.guild.roles.find("name","Clouds")
        var da1 = message.guild.roles.find('name', cargo)

        message.channel.overwritePermissions(da, {
            SEND_MESSAGES: false
          })
          message.channel.overwritePermissions(da1, {
            SEND_MESSAGES: true
          })
          var embed = new discord.RichEmbed()
          .addField("Canal fechado por:" , message.author.username)
          .setColor('#ad0551')
          .setFooter(message.author.username)
            message.channel.send(embed)

    }
    module.exports.help = {
        name: "chatoff",
        aliases: ["lock"]
       }