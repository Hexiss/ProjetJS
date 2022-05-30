'use strict';

const { Client, Intents } = require('discord.js');

const bot = new Client({ intents: [Intents.FLAGS.GUILDS] });

const EventEmitter = require('events');

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

class WebhookListener extends EventEmitter {
 listen() {
   bot.post('/postMeuble', (req, res) => {
     const nom = data.nom;
     const reference = data.reference;
     const disponible = data.disponible;

     res.send({ status: 'OK' });

     this.emit(
       nom,
       reference,
       disponible,
     );
   });
 }

 listen() {
    bot.delete('/deleteMeubleById/:id', (req, res) => {
      try {
        let currentMeuble = meubles.find(meuble => meuble.id == meubleId);
        if(currentMeuble) {
            let index = meubles.indexOf(currentMeuble);
            meubles.splice(index, 1);
            return res.status(201).json(meubles);
        } else {
            return res.status(201).json("Meuble non trouvé");
        }

    } catch(error) {
        return res.status(500).json("error:" + error);
    }
    });
  }

  listen() {
    bot.put('/updateMeubleById/:id', (req, res) => {
        try {
            let currentMeuble = meubles.find(meuble => meuble.id == meubleId);
            if(currentMeuble) {
                let index = meubles.indexOf(currentMeuble);
                meubles[index].name = name;
                return res.status(201).json(meubles);
            } else {
                return res.status(201).json("Meuble non trouvé");
            }
    
        } catch(error) {
            return res.status(500).json("error:" + error);
        }
    });
  }
}


const listener = new WebhookListener();
listener.listen();

module.exports = listener;