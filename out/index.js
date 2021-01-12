"use strict";
/*
Written by Jaroslav Kaňka <kanka@kankaj.cz>
*/
Object.defineProperty(exports, "__esModule", { value: true });
const tmi = require("tmi.js");
const { debugConsole, logConsole, errorConsole, jsonFormattedConsole } = require("./consolePrefix");
const rcon_client_1 = require("rcon-client");
const client_1 = require("@prisma/client");
const { usernameC, passwordC, bot_version, rconIP, rconPort, rconPassword } = require("../config.json");
const jokes_array = require("./jokes.js");
const { isProfaneCheck } = require("./profanityChecker/filter");
// Clears console before executing program.
console.clear();
// Checks if RCON for MC server is online (Default false)
let rconAlive = false;
// Prisma ORM
const prisma = new client_1.PrismaClient();
// Connects to RCON. (Minecraft server)
const rcon = new rcon_client_1.Rcon({
    host: rconIP,
    port: rconPort,
    password: rconPassword
});
rcon.on("connect", () => debugConsole("RCON is succesfully connected."));
rcon.on("authenticated", () => { debugConsole("RCON is Authenticated."); rconAlive = true; });
rcon.on("end", () => { errorConsole("RCON Disconnected."); rconAlive = false; });
rcon.connect();
// Config for login variables
let config = {
    identity: {
        username: usernameC,
        password: passwordC,
    },
    channels: ["JayJake"],
};
// Creates new Object using config
let client = new tmi.client(config);
// Bot tries to connect to Twitch.TV servers. If fails prints an error.
try {
    client.connect();
    logConsole("Bot succesfully connected and ready to use.");
}
catch (error) {
    errorConsole("Bot did not start because: " + error);
}
// Detects a command and responds on it.
client.on("message", async (channel, context, message, self) => {
    let reward_id = context["custom-reward-id"];
    let sender_name = context["display-name"];
    let at_sender_name = "@" + context["display-name"];
    let message_in_reward = message;
    let is_subscribed = context["subscriber"];
    let is_moderator = context["mod"];
    // Rewards for channel points.
    switch (reward_id) {
        // Command called: Vynadej mi
        case "6910d057-c744-4bb1-a18e-14a4b85f2de7": {
            if (isProfaneCheck(message)) {
                client.say(channel, `@${sender_name}, Tvá zpráva obsahuje nadávky nebo zakázaná slova. 4WeirdW`);
                client.say(channel, `/timeout ${sender_name} 300`);
            }
            else {
                client.say(channel, `${at_sender_name}, naplácám ti na prdýlku ve svém sklýpku HYPERSALAMI`);
                break;
            }
        }
        // Command called: Reklama 30sec
        case "4584d9a2-4531-483d-9450-53e6d42dd35d": {
            client.say(channel, "/commercial 30");
            break;
        }
        // Command called: VIP
        case "c68c98d2-e58d-46d6-95c4-690a1d29806f": {
            client.say(channel, `/vip ${sender_name}`);
            break;
        }
        // Command called: Gift VIP
        case "5d01c70d-7e0f-4a72-b411-53777be675f3": {
            if (is_moderator) {
                client.say(channel, `${at_sender_name}, Moderátorům nelze udělit VIP. Zažádej si o refund.`);
            }
            else if (message_in_reward[0] == "@") {
                client.say(channel, `${at_sender_name}, Napiš nick bez zavináče! Zažádej si o refund.`);
            }
            else {
                client.say(channel, `/vip ${message_in_reward}`);
                client.say(channel, `${at_sender_name} daroval VIP uživateli ${message_in_reward}.`);
            }
            break;
        }
        // Command called: Dobrý pocit
        case "26e1cf7b-c4e0-406c-b792-dfcba7629a8c": {
            client.say(channel, `${at_sender_name}, tak jsi Pepege?`);
            break;
        }
        // Command called: Timeout na 10min
        case "5ae0dad9-a1ef-4bf0-bab5-2aac081ae8e1": {
            if (is_moderator) {
                client.say(channel, "Moderátoři nejdou timeoutovat! Ale ty jo PepeLaugh");
                client.say(channel, `/timeout ${sender_name} 600`);
            }
            else if (message_in_reward[0] == "@") {
                client.say(channel, `${sender_name}, u této odměny se nesmí před jméno psát @ (U moderátora si zažádej od refund bodů)`);
            }
            else {
                client.say(channel, `/timeout ${message_in_reward} 600`);
            }
            break;
        }
        // Command called: Napiš zprávu na minecraft server
        case "237d48ce-1701-4244-bbad-75ea9b979951": {
            if (isProfaneCheck(message)) {
                client.say(channel, `@${sender_name}, Tvá zpráva obsahuje nadávky nebo zakázaná slova. Zpráva nebyla odeslána. 4WeirdW`);
                client.say(channel, `/timeout ${sender_name} 300`);
            }
            else {
                client.say(channel, `@${sender_name}, tvoje zpráva se brzy zobrazí na serveru PauseChamp`);
                await rcon.send(`say Twitch divák jménem ${sender_name} posílá zprávu: ${message}`);
            }
        }
    }
    // Misc commands (Jokes)
    if (message == "!haha" || message == "!vtip") {
        const random_joke = Math.floor(Math.random() * jokes_array.length);
        client.say(channel, `${at_sender_name}, ${jokes_array[random_joke]}`);
    }
    // Viewer can check how many and who is connected to a community Minecraft server.
    if (message == "!mc hraci") {
        client.say(channel, `${await rcon.send("list")}`);
    }
    // Adds user to whitelist on Minecraft server
    if (message.startsWith("!whitelist add")) {
        let mcNick = message.replace("!whitelist add", "").replace(/\s+/g, '');
        const findIfWhitelisted = await prisma.mcName.findMany({
            where: {
                twitchNickname: sender_name,
            }
        });
        if (!is_subscribed) {
            client.say(channel, `@${sender_name}, Na server se můžou připojit pouze diváci kterí mají zde na streamu subscribe. Subscribe můžete zakoupit zde: https://www.twitch.tv/subs/jayjake Okayge`);
        }
        else if (findIfWhitelisted[0] != null) {
            const usedMcNick = JSON.stringify(findIfWhitelisted[0].mcNickname).replace(/\"/g, '');
            client.say(channel, `@${sender_name}, Už jsi zaregistrován na Whitelistu pod jménem: ${usedMcNick}. Pokud se chceš odebrat z Whitelistu použij příkaz !whitelist unregister`);
        }
        else {
            client.say(channel, `${await rcon.send(`whitelist add ${mcNick}`)}`);
            const newWhitelistAdd = await prisma.mcName.create({
                data: {
                    twitchNickname: sender_name,
                    mcNickname: mcNick
                },
            });
        }
    }
    // Unregisters user from the Minecraft server with his nickname connected in DB.
    if (message.startsWith("!whitelist unregister")) {
        const findMcNickname = await prisma.mcName.findMany({
            where: {
                twitchNickname: sender_name
            }
        });
        if (findMcNickname[0] == null) {
            client.say(channel, `@${sender_name}, nejsi zaregistrován na Whitelistu. Zaregistrovat se můžeš přes !whitelist add <tvůj MC nickname> Okayge`);
        }
        else {
            const findAndRemove = await prisma.mcName.deleteMany({
                where: {
                    twitchNickname: sender_name
                }
            });
            client.say(channel, `@${sender_name}, byl jsi úspěšně odebrán z whitelistu pod nickem ${findMcNickname[0].mcNickname}. peepoSad`);
        }
    }
    // Commands for debugging.
    let admin_users = ["c0alman", "JayJake"];
    // Version debug + avaibility check (Bot admins only)
    if (admin_users.includes(sender_name)) {
        if (message == "!bot debug") {
            let rconResponse;
            if (rconAlive === true) {
                rconResponse = "Connected";
            }
            else {
                rconResponse = "Disconnected";
            }
            ;
            client.say(channel, `Bot version is: ${bot_version}, Node.JS version: ${process.version}, RCON STATUS: ${rconResponse}, Created with ❤️ by Jaroslav Kaňka 2021.`);
        }
        // Stops bot!!! Use only if bugged or lagged.
        if (admin_users.includes(sender_name)) {
            if (message == "!bot forcekill") {
                client.say(channel, `Musím jít Sadge Maminka mi zakázala server FeelsWeirdManW`);
                rcon.end();
                process.exit(0);
            }
        }
    }
    // Prints info about you in JSON into the console.
    if (message == "!bot selfcheck") {
        jsonFormattedConsole(context);
    }
    // Online check (Can be used by everyone)
    if (message == "!bot online") {
        client.say(channel, `JayBot je online, Bot version is: ${bot_version}`);
    }
});
