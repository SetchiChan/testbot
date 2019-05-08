const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', async message => {

    if(message.content.startsWith("asdknajifkjsndasdnjkasd")){
        message.channel.send({embed: {
            color: 0x0099ff,
            title: 'all dead',
            description: 'no',
            fields: [
                {
                    name: 'Test',
                    value: '04/04/20',
                },
            ],
        }
        });     
    }
});     

bot.on('ready', () => {
    bot.user.setGame('A management bot made by Nathan')
})


bot.login(process.env.BOT_TOKEN);
