const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', async message => {

    if(message.content.startsWith("?part")){
        message.channel.send({embed: {
            color: 0x0099ff,
            title: 'TLDR Schedule',
            description: '(Format as DD/MM/YY) / (Any work can be done at anytime but must be done before or on the submission date) / (Text means that date has passed) / (Dates can be changed if discussed in meetings)',
            fields: [
                {
                    name: 'Starting Area In-Game Concept (or final build) [Alpha]',
                    value: '29/06/19',
                },
                {
                    name: 'All UI elements completed',
                    value: '01/08/19',
                },
                {
                    name: 'Christmas Holiday:',
                    value: '22/12/19 - 31/12/19  (Basically we don’t expect anything to happen between these dates. Please notify us if you’re on vacation beyond these dates so that we don’t annoy you during this time) ',
                },
                {
                    name: 'All Levels Completed (Structure)',
                    value: '01/01/20',
                },
                {
                    name: 'All Models/Textures(for all models) Submission',
                    value: '01/02/20',
                },
                {
                    name: 'All Music Due',
                    value: '02/02/20',
                },
                {
                    name: 'All Mechanics(code) for levels Submission',
                    value: '27/02/20',
                },
                {
                    name: 'All Steam Art (Logo/Banner) Submission',
                    value: '28/02/20',
                },
                {
                    name: 'All Models/Art/Textures Final Submission',
                    value: '30/02/20',
                },
                {
                    name: 'Implementation of all elements/Quality Assurance',
                    value: '01/03/20 - 06/03/20',
                },
                {
                    name: 'Coding Final Submission',
                    value: '07/03/20',
                },
                {
                    name: 'Final Release Testing',
                    value: '08/03/20 - 28/03/20 (Everyone on the team will be playing SOTV and reporting any bugs they encounter)',
                },
                {
                    name: 'Early Release/Early Access',
                    value: '29/03/20 - 03/04/20 (Public testing to fix any bugs for final release',
                },
                {
                    name: 'Release/We did it Party',
                    value: '04/04/20',
                },
            ],
        }
        });     
    }

    if(message.content.startsWith("?p")){
        message.channel.send({embed: {
            color: 0x0099ff,
            title: 'Full Schedule',
            description: '(Format as DD/MM/YY) / (==: Will indicate work period) / (Any work can be done at anytime but must be done before or on the submission date) / (Text means that date has passed) / (Dates can be changed if discussed in meetings)',
            fields: [
                {
                    name: '==',
                    value: 'Current - 30/05/19',
                },
                {
                    name: 'May Monthly Meeting',
                    value: '31/05/19',
                },
                {
                    name: '==',
                    value: '01/06/19 - 28/06/19',
                },
                {
                    name: 'Starting Area In-Game Concept (or final build) [Alpha]',
                    value: '29/06/19',
                },
                {
                    name: 'June Monthly Meeting',
                    value: '30/06/19',
                },
                {
                    name: '==',
                    value: '01/07/19 - 30/07/19',
                },
                {
                    name: 'July Monthly Meeting',
                    value: '31/07/19',
                },
                {
                    name: 'All UI elements completed',
                    value: '01/08/19',
                },
                {
                    name: '==',
                    value: '02/08/19 - 30/08/19',
                },
                {
                    name: 'August Monthly Meeting',
                    value: '31/08/19',
                },
                {
                    name: '==',
                    value: '01/09/19 - 29/09/19',
                },
                {
                    name: 'September Monthly Meeting',
                    value: '30/09/19',
                },
                {
                    name: '==',
                    value: '01/10/19 - 30/10/19',
                },
                {
                    name: 'October Monthly Meeting',
                    value: '31/10/19',
                },
                {
                    name: '==',
                    value: '01/11/19 - 29/11/19',
                },
                {
                    name: 'November Monthly Meeting',
                    value: '30/11/19',
                },
                {
                    name: '==',
                    value: '01/12/19 - 20/12/19',
                },
                {
                    name: 'December Monthly Meeting',
                    value: '21/12/19',
                },
                {
                    name: 'Christmas Holiday:',
                    value: '22/12/19 - 31/12/19  (Basically we don’t expect anything to happen between these dates. Please notify us if you’re on vacation beyond these dates so that we don’t annoy you during this time) ',
                },
                {
                    name: 'All Levels Completed (Structure)',
                    value: '01/01/20',
                },
                {
                    name: '==',
                    value: '02/01/20 - 30/01/20',
                },
                {
                    name: 'January Monthly Meeting',
                    value: '31/01/20',
                },
                {
                    name: 'All Models/Textures(for all models) Submission',
                    value: '01/02/20',
                },
                {
                    name: 'All Music Due',
                    value: '02/02/20',
                },
                {
                    name: '==',
                    value: '03/02/20 - 28/02/20',
                },
                {
                    name: 'February Monthly Meeting',
                    value: '26/02/20',
                },
                {
                    name: 'All Mechanics(code) for levels Submission',
                    value: '27/02/20',
                },
                {
                    name: 'All Steam Art (Logo/Banner) Submission',
                    value: '28/02/20',
                },
                {
                    name: 'March Monthly Meeting',
                    value: '29/02/20',
                },
                {
                    name: 'All Models/Art/Textures Final Submission',
                    value: '30/02/20',
                },
                {
                    name: 'Implementation of all elements/Quality Assurance',
                    value: '01/03/20 - 06/03/20',
                },
                {
                    name: 'Coding Final Submission',
                    value: '07/03/20',
                },
                {
                    name: 'Final Release Testing',
                    value: '08/03/20 - 28/03/20 (Everyone on the team will be playing SOTV and reporting any bugs they encounter)',
                },
                {
                    name: 'Early Release/Early Access',
                    value: '29/03/20 - 03/04/20 (Public testing to fix any bugs for final release',
                },
                {
                    name: 'Release/We did it Party',
                    value: '04/04/20',
                },
            ],
        }
        });     
    }


});     

bot.login(process.env.BOT_TOKEN);
