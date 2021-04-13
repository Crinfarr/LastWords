const Discord = require('discord.js');
const fs = require('fs');
const config = require('./config');

const makegrave = require('./makegrave');
const makespace = require('./msgman');

const client = new Discord.Client();
var log = (fs.existsSync('./log.json')) ? JSON.parse(fs.readFileSync('./log.json')) : {};

client.on('message', (msg) => {
    if (msg.author.bot) return;
    log[msg.author.id] = [msg.content, new Date().getTime()]
})

client.on('guildBanAdd', async (guild, user) => {
    attachment = new Discord.MessageAttachment(await makegrave(user.username, log[user.id][0]), 'img.png')
    client.channels.cache.get('818554038802448418').send("", attachment)
})

client.on('guildMemberRemove', (member) => {
    console.log(member)
})

client.on('ready', () => {
    console.log('logged in as ' + client.user.tag)
})

setInterval(() => {
    fs.writeFileSync('./log.json', JSON.stringify(log))
    makespace();
}, config.savedelay)

client.login(config.token)