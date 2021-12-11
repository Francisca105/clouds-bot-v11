const Discord = require("discord.js")
const shell = require('shelljs');
exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('MANAGE_ROLES'))  return message.reply("Não tens permissão para esse comando!")
    let dependencia = args[0]
    if(!dependencia) return message.reply('Vou baixar o quê???')
    shell.exec("npm i " + dependencia)

}
module.exports.help = {
    name: "npm",
    aliases: ["node"]
   }