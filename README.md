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

### - 7" Touchscreen Display
<img src="https://github.com/IMT-ArcaTron/Arcamovel/assets/100366691/36d9807a-602b-48e9-aae9-b005830e48b2" width = "200">

### - Modulo CAN
<img src="https://github.com/IMT-ArcaTron/Arcamovel/assets/100366691/cbe7248c-b938-4fc3-bfa7-6625402b7f1f" width="200">

### - Buzzer
<img src="https://github.com/IMT-ArcaTron/Arcamovel/assets/100366691/e4566ffd-778a-4daa-8a8e-6b04e1ce839d" width="200">

</br>

## Montagem

<img src="https://github.com/IMT-ArcaTron/Arcamovel/assets/100366691/6f74c7fa-c792-40a7-b165-5676b6ee1999" width="600">
<img src="https://github.com/IMT-ArcaTron/Arcamovel/assets/100366691/063a5019-3d86-4049-abad-3f6ae5769890" width="600">

</br>
</br>

# 💻 Software
### O Sistema operacional `RetroPie` foi instalado utilizando o `Raspberry Pi Imager`:

<img src="media/image4.png" width="600">

### Onde em `Operating Systems` deve ser escolhido `'Emulation and game OS'>'RetroPie'>'RetroPie 4.8(RPI 2/3/Zero 2 W)'`. E em `Storage` deve-se selecionar o cartão MicroSD onde o sistema operacional deve ser instalado.

### E seguindo a documentação do sistema operacional presente em: https://retropie.org.uk/ 

### Para inserir jogos no fliperama suas `ROMS` são baixadas no computador e transferidas para o pendrive , seguindo a documentação do sistema operacional: https://retropie.org.uk/docs/Transferring-Roms/

> Devemos salientar a importância de adquirir ROMs de maneira legal. Compre jogos em plataformas oficiais, verifique a legalidade das ROMs e, se possível, crie ROMs a partir de cópias físicas

</br>
</br>

# 💻 Instalação
## Instalação Nodejs no Raspberry
### AQUI

</br>

### Instalar as bibliotecas `socketcan` e `mqtt`

</br>

## Instalação can-utils
### AQUI

</br>

## Instalação Mosquitto
### AQUI

</br>

## Instalação Node-Red
### AQUI

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
<video src="media/WhatsApp Video 2023-08-30 at 16.57.04 (1).mp4" controls title="Title"></video>

https://github.com/IMT-ArcaTron/ArcaPie/assets/85368158/a2113165-8992-4f2c-bddf-1cfa6e5a0402



<video src="media/WhatsApp%20Video%202023-08-30%20at%2016.57.04.mp4" controls title="Title"></video>

https://github.com/IMT-ArcaTron/ArcaPie/assets/85368158/ea72f841-384c-4f70-81be-b28cfd3738a9



</br>
</br>

# ✒️ Autores
### - Caio Rabinovich 20.00255-6
### - Felippe Onishi 20.00255-6
### - Ahmad Mahfoud 20.01323-0
### - Lucas Romanato 20.00313-7

<img src="media/WhatsApp Image 2023-08-30 at 17.26.19.jpeg" width="600">

</br>
</br>

# 🎁 Expressões de gratidão
### Gostaríamos de agradecer aos nossos professores Sergio e Rodrigo pela orientação e suporte durante o desenvolvimento deste projeto.
