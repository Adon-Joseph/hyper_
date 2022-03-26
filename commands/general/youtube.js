const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'youtube',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
        .setTitle('YOUTUBE')
        .setURL('https://www.youtube.com/channel/UCuyjkP-9ifUmgiXZnR-Xihw')
        .setDescription('Do not forget to like and subscribe')
        .setThumbnail('https://media.discordapp.net/attachments/956831895226839050/957151041357512704/LOGO.png?width=489&height=489')

        message.channel.send(embed)
    }
}