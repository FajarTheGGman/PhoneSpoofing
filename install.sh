#!/usr/bin/Bash
echo "[!] Installing package"
sleep(1)
apt-get install nodejs -y
npm install shelljs colors chalk cowsay readline request ora beeper log-symbols fs
node spoof.js
