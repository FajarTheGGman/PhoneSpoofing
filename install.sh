#!/usr/bin/Bash
rm -rf node_modules
echo "[!] Installing package"
sleep 1
apt-get install nodejs openssh -y
npm install shelljs colors chalk cowsay readline request ora beeper log-symbols fs
echo "[!] Please Type yes"
ssh -R 80:example.com:80 serveo.net
killall ssh
node spoof.js
