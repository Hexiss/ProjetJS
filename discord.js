'use strict';

const { Client, Intents } = require('discord.js');

const bot = new Client({ intents: [Intents.FLAGS.GUILDS] });

bot.login('OTY1OTUyNTE2OTUwOTkwODU4.Yl6rYg.PzqGCgiZRyAhxiMZmLkvT7N986U')

bot.once('ready', () => {
bot.user.setActivity("Docteur Maboul");
console.log('Bot connecté')
});

bot.on('messageCreate', ({content: msg = ''} = {}) => {
    console.log('message: ', discord.content);
    if (msg.includes('!create')) {
        const splitMsg = msg.split(' ');
        console.log(splitMsg);

        splitMsg.shift
    }
});

bot.on('message', message => {
    if (message.channel.id === "965964161911779378") {
        message.react('👍');
        message.react('👎');
    }
});

