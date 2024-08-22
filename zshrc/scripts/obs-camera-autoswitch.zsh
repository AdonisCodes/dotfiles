#!/bin/bash

FLAG_DIR="/tmp"
FLAG_FILENAME="obs-toggle-flag"

while true; do
    if [ "$(ls $FLAG_DIR | grep "$FLAG_FILENAME")" ]; then
        echo "WORKING: SWITCHING CAMERA FACING"
        /Users/simonferns/.local/bin/obs-cli item show camera-record ; /Users/simonferns/.local/bin/obs-cli item show screen-record
        echo "WORKING: SWITCHED TO FRONT FACING"
        sleep 10
        /Users/simonferns/.local/bin/obs-cli item hide camera-record ; /Users/simonferns/.local/bin/obs-cli item hide screen-record
        /Users/simonferns/.local/bin/obs-cli item show screen-record-2 ; /Users/simonferns/.local/bin/obs-cli item show camera-record-2
        echo "WORKING: SWITCHED TO SIDE FACING"
        sleep 20
        /Users/simonferns/.local/bin/obs-cli item hide screen-record-2 ; /Users/simonferns/.local/bin/obs-cli item hide camera-record-2
    else
        echo "WAITING: TOGGLE TOGGLED TO FALSE. WAITING..."
        sleep 1
    fi
done

