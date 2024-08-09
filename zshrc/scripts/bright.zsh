
USAGE="usage: brightness [-h | --help | NUMBER_FROM_0_TO_100 | -DECREMENT | +INCREMENT]"

if [[ "$1" == "-h" || "$1" == "--help" || ! "$1" =~ ^[+-]?[0-9]+$ ]]; then
    echo "$USAGE"
    exit 1
fi

# Check if the brightness command is installed
if ! command -v brightness &> /dev/null; then
    echo "The 'brightness' command-line tool is not installed. Install it using 'brew install brightness'."
    exit 1
fi

# Get the current brightness (0 to 1 range)
OLD_BRIGHTNESS=$(brightness -l 2>/dev/null | awk '/brightness/ {print $4}')

if [[ -z "$OLD_BRIGHTNESS" ]]; then
    echo "Failed to get current brightness."
    exit 1
fi

# Convert the brightness to a percentage (0-100)
OLD_BRIGHTNESS_PERCENT=$(echo "scale=0; $OLD_BRIGHTNESS * 100" | bc)

if [[ -z "$OLD_BRIGHTNESS_PERCENT" ]]; then
    echo "Failed to convert brightness to percentage."
    exit 1
fi

if [[ -z "$1" ]]; then
    echo "$OLD_BRIGHTNESS_PERCENT %"
else
    NEW_BRIGHTNESS_PERCENT=$1

    if [[ "$1" == -* || "$1" == +* ]]; then
        NEW_BRIGHTNESS_PERCENT=$(echo "$OLD_BRIGHTNESS_PERCENT + $1" | bc)
    fi

    if [[ "$NEW_BRIGHTNESS_PERCENT" -lt 0 ]]; then
        NEW_BRIGHTNESS_PERCENT=0
    fi
    if [[ "$NEW_BRIGHTNESS_PERCENT" -gt 100 ]]; then
        NEW_BRIGHTNESS_PERCENT=100
    fi

    # Convert percentage back to a value (0 to 1 range)
    NEW_BRIGHTNESS=$(echo "scale=2; $NEW_BRIGHTNESS_PERCENT / 100" | bc)
    
    if [[ -z "$NEW_BRIGHTNESS" ]]; then
        echo "Failed to convert percentage to brightness value."
        exit 1
    fi

    echo "$OLD_BRIGHTNESS_PERCENT % -> $NEW_BRIGHTNESS_PERCENT %"

    # Set the new brightness
    brightness "$NEW_BRIGHTNESS" 2>/dev/null

    if [[ $? -ne 0 ]]; then
        echo "Failed to set brightness. Ensure you have proper permissions and that the 'brightness' tool is correctly installed."
        exit 1
    fi
fi

