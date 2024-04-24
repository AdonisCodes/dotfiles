
if [ "$SENDER" = "space_windows_change" ]; then
  space="$(echo "$INFO" | jq -r '.space')"
  apps="$(echo "$INFO" | jq -r '.apps | keys[]')"
  has_focus=$(yabai -m query --spaces --space $space | jq -r ".\"has-focus\"")
  
  should_render_space=false
  if [ -n "$apps" ] || [ "$has_focus" = "true" ]; then
    should_render_space=true
  fi

  icon_strip=" "
  if [ "$should_render_space" = "true" ]; then
    while read -r app
    do
      icon_strip+=" $($CONFIG_DIR/plugins/icon_map_fn.sh "$app")"
    done <<< "${apps}"
    sketchybar --set space.$space drawing=1
      
  else
    sketchybar --set space.$space drawing=0
  fi
  sketchybar --set space.$space label="$icon_strip"

elif [ "$SENDER" = "space_change" ]; then
  current_space="$(echo "$INFO" | jq -r '.display-1')"
  # There are 9 spaces from 1-9
  all_spaces=$(seq 1 9)

  for space in $all_spaces; do
    windows_count=$(yabai -m query --spaces --space $space | jq -r '.windows | length')
    
    if [ "$space" = "$current_space" ] || [ "$windows_count" -gt 0 ]; then
      sketchybar --set space.$space drawing=1
    else
      sketchybar --set space.$space drawing=0
    fi
  done
fi
