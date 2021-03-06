#!/usr/bin/bash
rm -rf node_modules
echo "[!] Installing package"
sleep 1

cek=$(ls | grep "ngrok")
node=$(apt list --installed | grep "nodejs")
module=$(ls | grep "node_modules")
wget=$(apt list --installed | grep "wget")

install_ngrok(){
  amd=$(dpkg --print-architecture | grep "amd64")
  arm=$(dpkg --print-architecture | grep "arm")
  aarch=$(dpkg --print-architecture | grep "aarch64")

  if [[ $amd == "amd64" ]]; then
    wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-amd64.zip
    unzip ngrok-stable-linux-amd64.zip
  elif [[ $arm == "arm" ]]; then
    wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-arm.zip
    unzip ngrok-stable-linux-arm.zip
  elif [[ $aarch == "aarch64" ]]; then
    wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-arm.zip
    unzip ngrok-stable-linux-arm.zip
  else
    wget https://bin.equinox.io/c/4VmDzA7iaHb/ngrok-stable-linux-arm.zip
    unzip ngrok-stable-linux-arm.zip
  fi
}

if [[ $wget == *"wget"* ]]; then
    echo "[+] Wget already installed"
else
  apt-get install wget -y
fi

if [[ $cek == *"ngrok"* ]]; then
  echo "[+] Ngrok already downloaded"
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
