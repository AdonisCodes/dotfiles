#!/bin/bash

USAGE="usage: vol [-h | --help | NUMBER_FROM_0_TO_100 | -DECREMENT | +INCREMENT]"

if [ "$1" == "-h" ] || [ "$1" == "--help" ] || ! [[ "$1" =~ ^$|^[+-]?[0-9]+$ ]]; then
    echo "$USAGE"
    exit 1
fi

OLD_VOLUME="$(osascript -e "output volume of (get volume settings)")"

if [ -z "$1" ]; then
    echo "$OLD_VOLUME %"
else
    NEW_VOLUME="$1"

    if [[ "$1" == -* ]] || [[ "$1" == +* ]]; then
        NEW_VOLUME=$(($OLD_VOLUME + $1))
    fi

    if [ "$NEW_VOLUME" -lt 0 ] ; then
        NEW_VOLUME=0
    fi
    if [ "$NEW_VOLUME" -gt 100 ] ; then
        NEW_VOLUME=100
    fi

    MUTED=""
    if [ "$NEW_VOLUME" -eq 0 ]; then
        MUTED="(muted)"
    fi
    echo "$OLD_VOLUME % -> $NEW_VOLUME % $MUTED"

    # set
    osascript -e "set volume output volume $NEW_VOLUME"
fi

