client.on('ready',async () => {

let channel = client.channels.get("517597955616800768");
if(channel.type !== 'voice') throw new Error("# Error : The channel must be a voice channel.");
channel.join();

setInterval(() => {
if(!channel.guild.member(client.user).voiceChannel) {
channel.join();
}
}, 100);
});
 
 
 
client.login(process.env.BOT_TOKEN);
