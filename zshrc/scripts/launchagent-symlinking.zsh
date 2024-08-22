#!/bin/bash

SOURCE_DIR="$HOME/.config/LaunchAgents"

DEST_DIR="$HOME/Library/LaunchAgents"

for file in "$SOURCE_DIR"/*; do
    filename=$(basename "$file")
    
    if [ ! -e "$DEST_DIR/$filename" ]; then
        ln -s "$file" "$DEST_DIR/$filename"
    fi
done
