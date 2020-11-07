/*
Written by Jaroslav Kaňka 2020.11
*/

const tmi = require("tmi.js");
// When compiling from TS to JS use --resolveJsonModule
import { usernameC, passwordC, bot_version } from "./config.json";

// Config for login variables (I used var bcs I want it global)
var config = {
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
  console.log("Bot succesfully connected and ready to use.");
} catch (error) {
  console.log("Bot did not start because: " + error);
}

// Detects a command and responds on it.   `
client.on("message", (channel, context, message, self) => {
  let reward_id: string = context["custom-reward-id"];
  let sender_name: string = context["display-name"];
  let at_sender_name: string = "@" + context["display-name"];
  let message_in_reward: string = message;

  // Moderators update: 07.11.2020
  let channel_moderators: string[] = [
    "c0alman",
    "gildydtb",
    "streamelements",
    "kate_strnad",
    "lostmoped_fpv",
    "fossabot",
    "t_stiba",
    "streamcaptainbot",
  ];

  // Rewards for channel points.
  switch (reward_id) {
    // Command called: Vynadej mi
    case "6910d057-c744-4bb1-a18e-14a4b85f2de7": {
      client.say(
        channel,
        `${at_sender_name}, naplácám ti na prdýlku ve svém sklýpku HYPERSALAMI`
      );
      break;
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
      let requested_user_is_mod: boolean = channel_moderators.includes(
        message_in_reward
      );
      if (requested_user_is_mod == true) {
        client.say(
          channel,
          `${at_sender_name}, Moderátorům nelze udělit VIP. Zažádej si o refund.`
        );
      } else if (message_in_reward[0] == "@") {
        client.say(
          channel,
          `${at_sender_name}, Napiš nick bez zavináče! Zažádej si o refund.`
        );
      } else {
        client.say(channel, `/vip ${message_in_reward}`);
        client.say(
          channel,
          `${at_sender_name} daroval VIP uživateli ${message_in_reward}.`
        );
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
      let requested_user_is_mod: boolean = channel_moderators.includes(
        message_in_reward
      );
      if (requested_user_is_mod == true) {
        client.say(
          channel,
          "Moderátoři nejdou timeoutovat! Ale ty jo PepeLaugh"
        );
        client.say(channel, `/timeout ${sender_name} 600`);
      } else if (message_in_reward[0] == "@") {
        client.say(
          channel,
          `${sender_name}, u této odměny se nesmí před jméno psát @ (U moderátora si zažádej od refund bodů)`
        );
      } else {
        client.say(channel, `/timeout ${message_in_reward} 600`);
      }
      break;
    }
  }

  // Commands for debugging.
  let admin_users: string[] = ["c0alman", "jayjake"];

  // Version debug + avaibility check (Bot admins only)
  if (admin_users.includes(sender_name) == true) {
    if (message == "!bot debug") {
      client.say(
        channel,
        `Bot version is: ${bot_version}, Node.JS version: ${process.version}, Created with ❤️ by Jaroslav Kaňka 2020.`
      );
    }
  }
  // Online check (Can be used by everyone)
  if (message == "!bot online") {
    client.say(channel, "JayBot je online.");
  }
});
