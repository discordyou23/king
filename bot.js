const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "R";



client.on('ready', () => {
    console.log('I am ready!');
});







client.on('ready', () => {                           
client.user.setGame(`_Royal Force Games©/Soon`);                                                                                                                                                                                                                                                                                                                                                                                                                            
});






	  
client.login(process.env.BOT_TOKEN);
