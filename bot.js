console.log("Beep Bop! 🤖")
import 'dotenv/config'
import fetch from 'node-fetch';
import { Client, Intents } from 'discord.js'

const client = new Client({ intents: [Intents.FLAGS.GUILDS , Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS] });
client.login(process.env.BOTTOKEN);

client.on("ready", readyDiscord);

function readyDiscord() {
    console.log("💖");
}

const replies = ["🍾😩", "🥃🍻🍷🥂🍸🍾", "BICH BE SOBER 🍹", "NO, IT'S BEER TIME 🍺", "CHEERS 🍻", "🥃🥴🇷🇺", "VODKAAAHHHH!", "GIMME VODKA"];

client.on("message", gotMessage);

async function gotMessage(msg) {
    let tokens = msg.content.split(" ");

    // console.log(msg.content); 
    // msg.content === 'vodka' || msg.content === 'Vodka' || msg.content === 'VODKA' || msg.content === 'vOdka' || msg.content === 'VODKAAAH'
    if(tokens[0] === "!vodka" || msg.content === 'vodka' || msg.content === 'Vodka' || msg.content === 'VODKA' || msg.content === 'vOdka' || msg.content === 'VODKAAAH'){
        // msg.channel.send('GIMME VODKAAAAAAH');
        const index = Math.floor(Math.random() * replies.length);
        msg.channel.send(replies[index]);
    }

    else if (tokens[0] == "!gif") {
            
        let keywords = "anime dance"

        if(tokens.length > 1){
            keywords = tokens.slice(1, tokens.length).join(" ");
        }

        // msg.channel.send("gif!");
        // let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=off`
        /* search for excited top 8 GIFs */
        let url = `https://tenor.googleapis.com/v2/search?q=${keywords}&key=${process.env.TENORKEY}&client_key=my_test_app&limit=8`
        let response = await fetch(url);
        let json = await response.json();
        console.log(json);

        // let index = (Math.random() * json.results.length)
        const index = Math.floor(Math.random() * json.results.length);
        msg.channel.send(json.results[index].url);
    }
}

// async function gotMessage(msg) {
//     if (msg.content === 'vodka' || msg.content === 'Vodka' || msg.content === 'VODKA' || msg.content === 'vOdka' || msg.content === 'VODKAAAH') {
//         let tokens = msg.content.split(" ");

//         if (tokens[0] === "!vodka") {
//             // const index = Math.floor(Math.random() * replies.length)
//             // msg.channel.send(replies[index]);
//             let gifLink = "https://tenor.com/view/friday-drink-anime-drunk-girls-und-panzer-gif-11846752"
//             msg.channel.send(gifLink);
//         }
//         else if (tokens[0] == "!gif") {
            
//             let keywords = "anime dance"

//             if(tokens.length > 1){
//                 keywords = tokens.slice(1, tokens.length).join(" ");
//             }

//             // msg.channel.send("gif!");
//             let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&contentfilter=off`
//             let response = await fetch(url);
//             let json = await response.json();
//             console.log(json);

//             // let index = (Math.random() * json.results.length)
//             const index = Math.floor(Math.random() * json.results.length);
//             msg.channel.send(json.results[index].url);
//         }
//     }
// }
