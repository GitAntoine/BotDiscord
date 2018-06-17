const Discord = require("discord.js");
const Client = new Discord.Client();
const token ="NDU3ODIyNDI1MTYyMzE3ODQ2.Dger-A.FZ_V6T7Ewjcf5gkbenvNF21rOmk"
var prefix = "."
var mention = "<@457822425162317846>"
var memberCount = Client.users.size;
var serverCount = Client.guilds.size;

Client.on("ready",() => {
var servers = Client.guilds.array().map(g => g.name).join(',');
console.log("------------------------------------------------------------")
console.log('[!]Connexion en cours ... Les prefix actuelle sont : '+prefix+ 'Mentions'+mention+ 'Nombre de member'+memberCount+'Server: '+serverCount)




});
Client.on('message',message =>{
if(message.content =="test"){
    message.reply('test !');
}else if (message.content == ("bonjour")){
    message.reply('bonjour a toi');
}else if (message.content.startsWith('!botname')){
 Client.user.setUsername(message.content.sbstr(9));   
}else if(message.content === "!stats"){
    let m = "";
    m += 'il y a actuellment ${message.guild.channels.size} channels sur ce serveurs ';
    m += 'je suis avec ${message.guild.nembers.size}';
    message.author.sendMessage(m).catch(console.log);
}
else if(message.content == "mignax"){
     message.reply("FDP ARRETE D JOUER A Cs ")
}
});
Client.login(token)