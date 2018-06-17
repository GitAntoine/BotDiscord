const Discord = require("discord.js");
const Client = new Discord.Client();
const token ="NDU3ODIyNDI1MTYyMzE3ODQ2.Dger-A.FZ_V6T7Ewjcf5gkbenvNF21rOmk"
var prefix = ".chavax"
var mention = "<@457822425162317846>"
var memberCount = Client.users.size;
var serverCount = Client.guilds.size;
var servers = {};
const YTDL = require("ytdl-core")



Client.on("ready",() => {
var servers = Client.guilds.array().map(g => g.name).join(',');
console.log("------------------------------------------------------------")
console.log('[!]Connexion en cours ... Les prefix actuelle sont : '+prefix+ 'Mentions'+mention+ 'Nombre de member'+memberCount+'Server: '+serverCount)

});

function play(connection,message){
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0],{filter:"audioonly"}));

    server.queue.shift();

    server.dispatcher.on("end", function(){
     if (server.queue[0]) play (connection,message);
     else connection.disconnect();

    })
}
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

var args = message.content.substring(prefix.length).split(" ");

      switch(args[0].toLowerCase()){
          case "play":
          if(!args[1]){
            message.channel.sendMessage("please provide link");
            return
        }
        if(!message.member.voiceChannel){
            message.channel.sendMessage("please provide a link")
            return
        }
        if(!servers[message.guild.id]) servers[message.guild.id] = {
            queue:[]
        };
        var server = servers[message.guild.id]
        server.queue.push(args[1]);
        if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection){
            play(connection,message);
        });
        break;
        case "skip":
        var server = server[message.guild.id];
        if(server.dispatcher) server.dispatcher.end();
        break;
        case "stop":
        var server = server[message.guild.id];
        if(message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
        break;

      }
    
    
}
     
);
Client.login(token)