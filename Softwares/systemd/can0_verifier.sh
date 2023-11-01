#!/bin/bash

# Script Shutdown
# Ctrl-C handler for clean shutdown
shutdown(){
  exit 0
}

trap shutdown SIGINT

if  grep 'down' /sys/class/net/can0/operstate; then
  echo "CAN0 Network DOWN"
  sudo systemctl restart can2mqtt_prcs_up.service
fi
