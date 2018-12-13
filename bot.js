client.on('ready',async () => { client.channels.find(ch => ch.id === "517598553502121986" && ch.type === 'voice').join(); });
 
 
 
client.login(process.env.BOT_TOKEN);
