const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'gfx',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
        .setTitle('ORDER GFX')
        .setDescription('The following are the gfx cmds \n \n``` || ytlogo || ytbanner || dislogo || disbanner || dissmallbanner || disboticon || ```')

        message.channel.send(embed)
    }
}