#!/bin/zsh

current_status=$(networksetup -getairportpower en0)

if [[ $current_status == *"On"* ]]; then
    networksetup -setairportpower en0 off
    echo "Wi-Fi has been turned off."
else
    networksetup -setairportpower en0 on
    echo "Wi-Fi has been turned on."
fi
