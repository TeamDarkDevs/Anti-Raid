const Discord = require("discord.js")
const db = require("quick.db")
 const ms = require('parse-ms');
const { truncate } = require("fs");
module.exports = {
    name: "addtrusted",
    description: "set guild anit raid config",
    run: async (client, message, args) => {
const guildicon = message.guild.iconURL();
if(message.author.id === message.guild.ownerID) {
    
        let user = message.mentions.users.first()
        if(!user) {
            let usermention = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setDescription(`
            **Mention User!** 
            `)
            .setFooter(message.guild.name, guildicon)
    
            return message.channel.send(usermention)
        }
        let trustedusers = db.get(`trustedusers_${message.guild.id}`)
        if(trustedusers && trustedusers.find(find => find.user == user.id)) {
        return message.channel.send(`This User It's Already on trusted list`)
        }
let data = {
    user: user.id
}
        db.push(`trustedusers_${message.guild.id}`, data)
        let added = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setDescription(`
        **Added ${user} To Trusted List!** 
        `)
        .setFooter(message.guild.name, guildicon)

        return message.channel.send(added);
    }
message.channel.send(`Only ownership of the guild can use that cmd!`)
}}
 
