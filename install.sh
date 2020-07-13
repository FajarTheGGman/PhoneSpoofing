#!/usr/bin/bash
rm -rf node_modules
echo "[!] Installing package"
sleep 1

cek=$(ls | grep "ngrok")
node=$(apt list --installed | grep "nodejs")
module=$(ls | grep "node_modules")

install_ngrok(){
  amd=$(dpkg --print-architecture | grep "amd64")
  arm=$(dpkg --print-architecture | grep "arm")
  if [[ $amd == "amd64" ]]; then
    wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip
    unzip ngrok-stable-linux-amd64.zip
  fi

  if [[ $arm == "arm" ]]; then
    wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-arm.zip
    unzip ngrok-stable-linux-arm.zip
  fi
}

if [[ $cek == *"ngrok"* ]]; then
  echo "[+] Ngrok already downloaded";
else
  install_ngrok
fi

if [[ $node == *"nodejs"* ]]; then
    echo "[+] Nodejs Already Installed"
else
    apt-get install nodejs -y
fi

if [[ $module == *"node_modules"* ]]; then
    echo "[+] node_modules already setup"
else
    npm install
fi

node spoof
