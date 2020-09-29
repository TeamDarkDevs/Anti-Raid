const Discord = require("discord.js")
const db = require("quick.db")
 const ms = require('parse-ms');
const { truncate } = require("fs");
module.exports = {
    name: "config",
    description: "set guild anit raid config",
    run: async (client, message, args) => {
    let cmd = args[0];
    const guildicon = message.guild.iconURL();
    if(!cmd) {
        const embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag,message.author.displayAvatarURL())
        .setDescription(`
        ** Available Keys**
   > **config setrolecreatelimt
   > conifg setactionlogs
   > config setroledeletelimt
   > config setchannelcreatelimt
   > config setchanneldeletelimt
   > config setbanlimts
   > config setkicklimts
  > config clearuser
   > config show**     
   `)
 .setFooter(message.guild.name, guildicon)
  return message.channel.send(embed);
}
 if(cmd.toLowerCase() === 'show') {
   let rolelimt = db.get(`rolecreatelimt_${message.guild.id}`) 
   if(rolelimt === null) rolelimt = "Disabled :x:"
   let roledelete = db.get(`roledeletelimts_${message.guild.id}`) 
   if(roledelete === null) roledelete = "Disabled :x:"
   let logschannel = db.get(`acitonslogs_${message.guild.id}`)
   let logschannel2 = db.get(`acitonslogs_${message.guild.id}`)
   if(logschannel === null) logschannel = "Disabled :x:"
   else logschannel = `<#${logschannel2}>`
   let channelcreatelimts = db.get(`channelcreatelimts_${message.guild.id}`)
   if(channelcreatelimts === null) channelcreatelimts = "Disabled :x:"
   let channeldeletelimts = db.get(`channeldeletelimts_${message.guild.id}`)
   if(channeldeletelimts === null) channeldeletelimts = "Disabled :x:"
   let banlimts = db.get(`banlimts_${message.guild.id}`)
  if(banlimts === null) banlimts = "Disabled :x:"
  let kicklimts = db.get(`kicklimts_${message.guild.id}`)
  if(kicklimts === null) kicklimts = "Disabled :x:"

   let showembed = new Discord.MessageEmbed()

   .setAuthor(message.author.username, message.author.displayAvatarURL())
   .addField('Role Create Limts', rolelimt, true)
   .addField('Role Delete Limts', roledelete, true)
   .addField(`Aciton Logs Channel`, logschannel, true)
   .addField(`Channel Create Limts`, channelcreatelimts, true)
   .addField(`Channel Delete Limts`, channeldeletelimts, true)
   .addField(`Ban Limts`, banlimts, true)
   .addField(`Kick Limts`, kicklimts, true)
    .setFooter(message.guild.name, guildicon)
    return message.channel.send(showembed);
 }
 if(cmd.toLowerCase() === 'setrolecreatelimt') {
let rolecreate = args.slice(1).join(" ");
if(!rolecreate) {
 let missing = new Discord.MessageEmbed()
 .setAuthor(message.author.username, message.author.displayAvatarURL())
 .setDescription(`** an invaild usage**\nconfig setrolecreatelimt (number)`)
 .setFooter(message.guild.name, guildicon)

  return message.channel.send(missing);
}
if(isNaN(rolecreate)) {
  let missing = new Discord.MessageEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setDescription(`** an invaild usage (Cannot be words only numbers)**\nconfig setrolecreatelimt (number)`)
  .setFooter(message.guild.name, guildicon)
return message.channel.send(missing);
}
db.set(`rolecreatelimt_${message.guild.id}`, rolecreate)
let done = new Discord.MessageEmbed() 
.setAuthor(message.author.username, message.author.displayAvatarURL())
.setDescription(`Done SetRoleCreation Limts Has Been Set To ${rolecreate} ✅`)
.setFooter(message.guild.name, guildicon)
return message.channel.send(done);
}
if(cmd.toLowerCase() === 'setroledeletelimt') {
  let roledelete = args.slice(1).join(" ");
  if(!roledelete) {
   let missing = new Discord.MessageEmbed()
   .setAuthor(message.author.username, message.author.displayAvatarURL())
   .setDescription(`** an invaild usage**\nconfig setroledeletelimt (number)`)
   .setFooter(message.guild.name, guildicon)
  
    return message.channel.send(missing);
  }
  if(isNaN(rolecreate)) {
    let missing = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription(`** an invaild usage (Cannot be words only numbers)**\nconfig setroledeletelimt (number)`)
    .setFooter(message.guild.name, guildicon)
  return message.channel.send(missing);
  }
  db.set(`roledeletelimts_${message.guild.id}`, rolecreate)
  let done = new Discord.MessageEmbed() 
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setDescription(`Done SetRoleDelete Limts Has Been Set To ${rolecreate} ✅`)
  .setFooter(message.guild.name, guildicon)
  return message.channel.send(done);
  
}
if(cmd.toLowerCase() === 'setactionlogs') {
  let logs = message.mentions.channels.first();
  if(!logs) {
  let logsembed = new Discord.MessageEmbed()
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setDescription(`Please Mention an vaild channel`)
  .setFooter(message.guild.name, guildicon)
return message.channel.send(logsembed);
}
logs.send(`** Anit-Raid Logs Room **`)
db.set(`acitonslogs_${message.guild.id}`, logs.id)
let done = new Discord.MessageEmbed()
.setAuthor(message.author.username, message.author.displayAvatarURL())
.setDescription(`well done aciton-logs channel has been set to ${logs}`)
.setFooter(message.guild.name, guildicon)
return message.channel.send(done)
}
if(cmd.toLowerCase() === 'setchannelcreatelimt') {
  let rolecreate = args.slice(1).join(" ");
  if(!rolecreate) {
   let missing = new Discord.MessageEmbed()
   .setAuthor(message.author.username, message.author.displayAvatarURL())
   .setDescription(`** an invaild usage**\nconfig setchannelcreatelimt (number)`)
   .setFooter(message.guild.name, guildicon)
  
    return message.channel.send(missing);
  }
  if(isNaN(rolecreate)) {
    let missing = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription(`** an invaild usage (Cannot be words only numbers)**\nconfig setchannelcreatelimt (number)`)
    .setFooter(message.guild.name, guildicon)
  return message.channel.send(missing);
  }
  db.set(`channelcreatelimts_${message.guild.id}`, rolecreate)
  let done = new Discord.MessageEmbed() 
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setDescription(`Done Channel Create Limts Has Been Set To ${rolecreate} ✅`)
  .setFooter(message.guild.name, guildicon)
  return message.channel.send(done);
}
if(cmd.toLowerCase() === 'setchanneldeletelimt') {
  let rolecreate = args.slice(1).join(" ");
  if(!rolecreate) {
   let missing = new Discord.MessageEmbed()
   .setAuthor(message.author.username, message.author.displayAvatarURL())
   .setDescription(`** an invaild usage**\nconfig setchanneldeletelimt (number)`)
   .setFooter(message.guild.name, guildicon)
  
    return message.channel.send(missing);
  }
  if(isNaN(rolecreate)) {
    let missing = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription(`** an invaild usage (Cannot be words only numbers)**\nconfig setchanneldeletelimt (number)`)
    .setFooter(message.guild.name, guildicon)
  return message.channel.send(missing);
  }
  db.set(`channeldeletelimts_${message.guild.id}`, rolecreate)
  let done = new Discord.MessageEmbed() 
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setDescription(`Done Channel Delete Limts Has Been Set To ${rolecreate} ✅`)
  .setFooter(message.guild.name, guildicon)
  return message.channel.send(done);
}
if(cmd.toLowerCase() === 'setbanlimts') {
  let rolecreate = args.slice(1).join(" ");
  if(!rolecreate) {
   let missing = new Discord.MessageEmbed()
   .setAuthor(message.author.username, message.author.displayAvatarURL())
   .setDescription(`** an invaild usage**\nconfig setbanlimt (number)`)
   .setFooter(message.guild.name, guildicon)
  
    return message.channel.send(missing);
  }
  if(isNaN(rolecreate)) {
    let missing = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription(`** an invaild usage (Cannot be words only numbers)**\nconfig setbanlimt (number)`)
    .setFooter(message.guild.name, guildicon)
  return message.channel.send(missing);
  }
  db.set(`banlimts_${message.guild.id}`, rolecreate)
  let done = new Discord.MessageEmbed() 
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setDescription(`Done Channel Ban Limts Has Been Set To ${rolecreate} ✅`)
  .setFooter(message.guild.name, guildicon)
  return message.channel.send(done);
}
if(cmd.toLowerCase() === 'setkicklimnts') {
  let rolecreate = args.slice(1).join(" ");
  if(!rolecreate) {
   let missing = new Discord.MessageEmbed()
   .setAuthor(message.author.username, message.author.displayAvatarURL())
   .setDescription(`** an invaild usage**\nconfig setbanlimt (number)`)
   .setFooter(message.guild.name, guildicon)
  
    return message.channel.send(missing);
  }
  if(isNaN(rolecreate)) {
    let missing = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL())
    .setDescription(`** an invaild usage (Cannot be words only numbers)**\nconfig setkicklimt (number)`)
    .setFooter(message.guild.name, guildicon)
  return message.channel.send(missing);
  }
  db.set(`kicklimts_${message.guild.id}`, rolecreate)
  let done = new Discord.MessageEmbed() 
  .setAuthor(message.author.username, message.author.displayAvatarURL())
  .setDescription(`Done Channel Kick Limts Has Been Set To ${rolecreate} ✅`)
  .setFooter(message.guild.name, guildicon)
  return message.channel.send(done);
}
if(cmd.toLowerCase() === 'clearuser') {
  let user = message.mentions.users.first()
if(!user) {
  return message.channel.send(`** Mention User **`);
}
db.delete(`executer_${message.guild.id}_${user.id}_kicklimts`) 
db.delete(`executer_${message.guild.id}_${user.id}_banlimts`)
db.delete(`executer_${message.guild.id}_${user.id}_rolecreate`)
db.delete(`executer_${message.guild.id}_${user.id}_roledelete`)
db.delete(`executer_${message.guild.id}_${user.id}_channelcreate`)
db.delete(`executer_${message.guild.id}_${user.id}_channeldelete`)
return message.channel.send(`Reseted User Limts`);
}
}}
 
