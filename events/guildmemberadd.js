const { prefix } = require("../config.json");
const fs = require('fs')
const {bot} = require('../index');
const config = require("../config.json");
const discord = require('discord.js')
bot.on("guildMemberAdd", async (member) => {
    member.addRole('707604282706362368')

    let canal = bot.channels.get('707558642349637723')
    let entrada = new discord.RichEmbed()
    .setAuthor('👤 Novo membro!')
    .setThumbnail(member.user.avatarURL)
    .setDescription(`Bem-vindo/a ${member} ao servidor, esperemos que goste!\nConsigo já somos ` + member.guild.memberCount + ` membros!`)
    .setColor('#630699')
    .setFooter('Bot feito pela Francisca.105#8965')

    canal.send(entrada)
//member.guild.memberCount
})