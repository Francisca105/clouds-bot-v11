const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
    const invite = await message.channel.createInvite({ maxAge: 0 });
  message.guild.fetchInvites().then(invites => {

  let code = invites.random().code
  
    let inviteembed = new Discord.RichEmbed()
    .setTitle("📨 Convite") 
    .setDescription(`Convite para o servidor ${message.guild.name}!`)
    .addField("O seu convite:", invite.url)
    .setFooter(message.author.username)
    .setColor("#e6d712")
    
    message.channel.send(inviteembed);
})};
module.exports.help = {
    name: "convite",
    aliases: ["convidar"]
}               