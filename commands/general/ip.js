const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ip',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
        .setTitle('SERVER IP')
        .setDescription('IP JAVA : ```hypersmp.zapto.org:25570``` \nIP BEDROCK/PE ```hypersmp.zapto.org```\nBEDROCK/PE PORT ```19132```')
        .setThumbnail('https://media.discordapp.net/attachments/956831895226839050/957153850693910558/orghyper.png?width=499&height=499')
        .setImage('https://images-ext-1.discordapp.net/external/LK36YMl-sV_GpmwJioDKsaWOOmc8p_tnRxkB6I76ChU/https/media.discordapp.net/attachments/956831895226839050/956890283574968390/standard_3.gif')

        message.channel.send(embed)
    }
}