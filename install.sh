#!/usr/bin/bash
rm -rf node_modules
echo "[!] Installing package"
sleep 1
x=$(dpkg --print-architecture)
if [[ $x == "amd64" ]]; then
wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip
unzip ngrok-stable-linux-amd64.zip
fi

if [[ $x == "arm" ]]; then
wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-arm.zip
unzip ngrok-stable-linux-arm.zip
fi

apt-get install nodejs -y
npm install
node spoof

