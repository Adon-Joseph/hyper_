const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ytlogo',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
        .setTitle('YTLOGO')
        .setURL('https://discord.gg/b2uudsHGNJ')
        .setDescription('**LOGO :** Payment methods are \n ```DANK MEMER COINS = 100K / PER ORDER\nOWO COINS        = 50K / PER ORDER\nSERVER INVITES   = 5 / PER ORDER\nBITCOIN          = COMING SOON...```\n CLICK ON THE TITLE TO ORDER!')
        .setThumbnail('https://images-ext-1.discordapp.net/external/xkzALKopmxdyoZc9QOxAAWRVslsp8PNjkMnW50K1fv4/https/cdn.discordapp.com/icons/888334535010430986/a_db210c288eccee1047d287a758380b91.gif')

        message.channel.send(embed)
    }
}