const { prefix } = require("../config.json");
const fs = require('fs')
const {bot} = require('../index');
const config = require("../config.json");
const discord = require('discord.js')
bot.on("message", async message => {
  if(message.author.bot || message.channel.type === "dm") return;
  
/*  let warned = await Warns.findOne({ where: { user: message.author.id, warns: '3'}}).catch(err => console.log(err));
  if(warned) {
    let warn3 = new discord.RichEmbed()
    .setColor('FFFFFF')
    .setTitle('Warn')
    .setDescription('O usuário ' + message.author + ' tem 3 avisos!')
    .setFooter('Bot desevolvido pela Francisca.105#8965')

    bot.channels.get('705385822215471114').send(warn3)
     
  } */



    //Resposta a menção
    let menE = new discord.RichEmbed()
    .setAuthor('Olá ' + message.author.username + '!', bot.user.avatarURL, 'https://discord.gg/mEAFG9u')
    .setDescription('Eu sou o ' + bot.user.username + ', e estou aqui para te ajudar! O meu prefixo é \`c!\` e para veres os meus comandos faz \`c!ajuda\`.')
    .setFooter('Bot desenvolvido pela Francisca.105#8965')
    .setColor('#08a4bf')

    let mention = [`<@${bot.user.id}>`, `<@!${bot.user.id}>`];
    mention.find(mention => {
      if (message.content === mention) {
        message.channel.send(menE)
         }})

    //Comandos
    

    let prefixo = prefix;
    let args = message.content.slice(prefixo.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();

    if(!message.content.startsWith(prefixo)) return;
    let commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd))
    if(commandfile) commandfile.run(bot, message, args)


})