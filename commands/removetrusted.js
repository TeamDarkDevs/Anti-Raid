const Discord = require("discord.js")
const db = require("quick.db")
 const ms = require('parse-ms');
const { truncate } = require("fs");
module.exports = {
    name: "removetrusted",
    description: "set guild anit raid config",
    run: async (client, message, args) => {

if(message.author.id === message.guild.ownerID) {
    
        let user = message.mentions.users.first()
        if(!user) {
            return message.channel.send(`mention user`)
        }
        const guildicon = message.guild.iconURL();
        let database = db.get(`trustedusers_${message.guild.id}`)
        if(database) {
            let data = database.find(x => x.user === user.id)
          let unabletofind = new Discord.MessageEmbed()
          .setAuthor(message.author.tag, message.author.displayAvatarURL())
          .setDescription(`
          ** unable to find that user on database!** 
          `)
          .setFooter(message.guild.name, guildicon)
          
            if(!data) return message.channel.send(unabletofind)
          
            let value = database.indexOf(data)
            delete database[value]
          
            var filter = database.filter(x => {
              return x != null && x != ''
            })
          
            db.set(`trustedusers_${message.guild.id}`, filter)
          let deleted = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
          .setDescription(`
          **Removed ${user} From Trusted Users!** 
          `)
          .setFooter(message.guild.name, guildicon)
          
            return message.channel.send(deleted)
          
        } else {          
     message.channel.send(`that user not on trusted list`)
        }}
    
      message.channel.send(`Only ownership of the guild can use that cmd!`)
}}
 
