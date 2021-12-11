const { prefix } = require("../config.json");
const fs = require('fs')
const {bot} = require('../index');
const config = require("../config.json");
const discord = require('discord.js')
bot.on("raw", async (dados) => {
//Sistema de cargos por reação
    if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
    let servidor = bot.guilds.get("697203711897894912")
    let membro = servidor.members.get(dados.d.user_id)
    let verificar = servidor.roles.get('707605616578789446')
    let ps4 = servidor.roles.get('707038706606800936')
    let xbox = servidor.roles.get('707038827658870856')
    let pc = servidor.roles.get('707038930746343537')
    let movel = servidor.roles.get('707038878107828305')

    if(dados.d.message_id = '707036742040944690'){

    if(dados.t === "MESSAGE_REACTION_ADD"){
        if(dados.d.emoji.id === "707038155559272470"){
            membro.addRole(ps4)
        } else if(dados.d.emoji.id === "707038210135425034"){
            membro.addRole(xbox)
        } else if(dados.d.emoji.id === "707038254284800092"){
            membro.addRole(pc)
        }  else if(dados.d.emoji.id === "707038360816058480"){
            membro.addRole(movel) 
        } 
    }
        if(dados.t === "MESSAGE_REACTION_REMOVE"){
            if(dados.d.emoji.id === "707038155559272470"){
                membro.removeRole(ps4)
            }else if(dados.d.emoji.id === "707038210135425034"){
                membro.removeRole(xbox)
            }else if(dados.d.emoji.id === "707038254284800092"){
                membro.removeRole(pc)
            }else if(dados.d.emoji.id === "707038360816058480"){
                membro.removeRole(movel)
                }
            }   
    }
    if(dados.d.message_id = "707605429030748191") {

        if(dados.t === "MESSAGE_REACTION_ADD"){
            if(dados.d.emoji.name === "👍"){
                membro.addRole(verificar)
            }
        }
    
        }    
  })