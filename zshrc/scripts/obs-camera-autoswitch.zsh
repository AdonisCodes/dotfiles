#!/bin/bash

FLAG_DIR="/tmp"
FLAG_FILENAME="obs-toggle-flag"

while true; do
    if [ "$(ls $FLAG_DIR | grep "$FLAG_FILENAME")" ]; then
        echo "WORKING: SWITCHING CAMERA FACING"
        /Users/simonferns/.local/bin/obs-cli scene switch "Front Cam"
        echo "WORKING: SWITCHED TO FRONT FACING"
        sleep 10
        /Users/simonferns/.local/bin/obs-cli scene switch "Side Cam"
        echo "WORKING: SWITCHED TO SIDE FACING"
        sleep 10
    else
        echo "WAITING: TOGGLE TOGGLED TO FALSE. WAITING..."
        sleep 1
    fi
done

