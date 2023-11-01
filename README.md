# 🚗 Arcamovel
### Este projeto consiste na criação de um pequeno dispositivo conectado a rede CAN do automóvel para monitoramento. Esse projeto baseia-se em um Raspberry Pi 3B+ rodando o sistema operacional *Open Source* baseado em Linux Raspibian.

</br>

# 📝 Descrição de Hardware
### - Fonte 5V 3A MicroUSB
<img src="https://github.com/IMT-ArcaTron/Arcamovel/assets/100366691/09bb2a68-60df-4943-bd08-bb8dee0fd849" width="200">

### - Inversor 
<img src="https://github.com/IMT-ArcaTron/Arcamovel/assets/100366691/17c767f2-7dd2-4bdb-81eb-d5eb0705438b" width = "200">

### - Cartão MicroSD (mínimo 8GB de armazenamento)
<img src="https://github.com/IMT-ArcaTron/Arcamovel/assets/100366691/d7e1b267-4998-4e55-be46-7065d5484964" width="200">

### - Raspberry Pi 3B+
<img src="https://github.com/IMT-ArcaTron/Arcamovel/assets/100366691/6fb0f4de-55f8-43cc-8c8e-a6b2aa84ceac" width="400">
<img src="https://github.com/IMT-ArcaTron/Arcamovel/assets/100366691/ccc507ec-920a-4609-900f-c62d903e83bb" width="400">

### - Modulo CAN
<img src="https://github.com/IMT-ArcaTron/Arcamovel/assets/100366691/cbe7248c-b938-4fc3-bfa7-6625402b7f1f" width="200">

### - Buzzer
<img src="https://github.com/IMT-ArcaTron/Arcamovel/assets/100366691/e4566ffd-778a-4daa-8a8e-6b04e1ce839d" width="200">

</br>

## Montagem

<img src="https://github.com/IMT-ArcaTron/Arcamovel/assets/100366691/6f74c7fa-c792-40a7-b165-5676b6ee1999" width="600">
<img src="https://github.com/IMT-ArcaTron/Arcamovel/assets/100366691/063a5019-3d86-4049-abad-3f6ae5769890" width="600">

</br>

## Diagrama elétrico
<img src="https://github.com/IMT-ArcaTron/Arcamovel/assets/100366691/599f19ae-4e9d-4613-9505-d6b3c1928707" width="600">

</br>

## Modificação de Hardware
### Para poder utilizar o módulo MCP2515 com o Raspberry Pi é necessário fazer modificações na alimentação. Siga o tutorial apresentado em: https://forums.raspberrypi.com/viewtopic.php?t=141052

</br>
</br>

# 💻 Software
### Instale o sistema operacional `Raspibian` utilizando o `Raspberry Pi Imager` em um cartão microSD e insira no Raspberry Pi.
### Transfira a pasta `Softwares` desse repositório para `/home/` do Raspberry e siga o tutorial de instalação.

</br>
 
 --- 
## `Softwares/can2mqtt/can2mqtt.js`
### Script em Nodejs para envio de mensagens can via MQTT

</br>

## `Softwares/can2mqtt/mqtt2can.js`
### Script em Nodejs para recepção de mensagens MQTT e acionar o buzzer

</br>

## `Softwares/systemd/can0_verifier.sh`
### Script em bash que verifica a interface CAN do Raspberry e a inicia caso necessário

</br>

## `Softwares/systemd/can2mqtt_prcs_up.sh`
### Script em bash que inicia os demais scripts automaticamente

</br>

## `Softwares/systemd/can2mqtt_prcs_up.service`
### Script em bash que chama o script acima ao ser atribuido como service no sistema operacional

</br>
</br>

# 💻 Instalação
## Config File
### Substitua o arquivo `/boot/config.txt` do raspberry pi pelo presente na pasta `boot` desse repositório

</br>

--- 
## Trasferir a pasta `Softwares` para o Raspberry em `/home/` 
--- 
</br>

## Instalação Nodejs no Raspberry
### A partir de https://nodejs.org/en/download/ é necessário realizar o download dos arquivos  binários para cada sistema operacional/arquitetura. 
### Em sistemas Linux após o download dos arquivos é necessário descompactá-lo para uma pasta de instalação. Depois de descompactado é necessário apontar o caminho da pasta bin no PATH e recarregar a seção do terminal.
### Siga o tutorial presente em: https://www.hackster.io/kamaluddinkhan/installing-nodejs-on-a-raspberry-pi-in-easy-steps-62d455

</br>

### Instalar o `yarn` as bibliotecas `socketcan`, `mqtt` e `onoff`
```bash
npm install --global yarn
```
### Na pasta `Softwares` digitar:
```bash
npm install socketcan
npm install mqtt
npm install onoff
```

</br>

## Instalação can-utils
### O can-utils é um pacote de ferramentas específico para Linux que permite um computador com  esse sistema operacional se comunicar com redes CAN.
### Para instalar:
```bash
sudo apt-get install can-utils
```

</br>

## Instalação Mosquitto
### MQTT (Message Queue Telemetry Transport) é um protocolo de comunicação desenvolvido para ser leve, simples e de fácil implementação. Composto de publishers (responsáveis por enviar dados), subscribers (responsáveis por receber os dados) e broker (responsável por gerenciar o tráfego de mensagens, é o servidor MQTT). Mosquitto Broker é um software compatível com distribuições Debian do Linux (encotrado no Raspberry Pi) que cria um broker no dispositivo, permitindo que tal se comunique via MQTT. Para instalar o Mosquitto Broker em um sistema Linux digita-se no terminal:
```bash
sudo apt-get install mosquito
```
### Para habilitar o serviço desde a inicialização do sistema operacional digita-se:
```bash
sudo systemctl enable mosquitto.service
```

</br>

## Instalação Node-Red
``` bash
sudo npm install -g --unsafe-perm node-red
```
### E importe o flow presente na pasta `Node-Red` desse repositório.

</br>

## Configuração Crontab
### O crontab cria uma escala de execução de scripts, digite:
```bash
sudo crontab -e
```
### E no final do arquivo adicione:
```bash
# To start CAN verification and reconnection uncomment sleep10 sleep30 and sleep50
* * * * * ( sleep 10 ; /home/pi/Softwares/systemd/can0_verifier.sh )
* * * * * ( sleep 30 ; /home/pi/Softwares/systemd/can0_verifier.sh )
* * * * * ( sleep 50 ; /home/pi/Softwares/systemd/can0_verifier.sh )
```

# 📺 Funcionamento
<video src="https://github.com/IMT-ArcaTron/Arcamovel/assets/100366691/03de75dc-80d3-423e-b52c-b256e8fe1256" controls title="Title"></video>

<img src="https://github.com/IMT-ArcaTron/Arcamovel/assets/100366691/930e1314-d261-4fd7-aa4b-6f24f93c77f5" width="600">

### Veiculo Utilizado
<img src="https://github.com/IMT-ArcaTron/Arcamovel/assets/100366691/56f03131-adcc-4419-bbde-ae3e5b2b64e6" width="600">
<img src="https://github.com/IMT-ArcaTron/Arcamovel/assets/100366691/085dce8e-ef75-48b6-b2e5-48fb182ba327" width="600">


</br>
</br>

# ✒️ Autores
### - Caio Rabinovich 20.00255-6
### - Felippe Onishi 20.00255-6
### - Ahmad Mahfoud 20.01323-0
### - Lucas Romanato 20.00313-7

<img src="https://github.com/IMT-ArcaTron/Arcamovel/assets/100366691/bbc919af-d9ff-4f0e-9a7b-b1713f23ffca" width="600">

</br>
</br>

# 🎁 Expressões de gratidão
### Gostaríamos de agradecer aos nossos professores Sergio e Rodrigo pela orientação e suporte durante o desenvolvimento deste projeto.
