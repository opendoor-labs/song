set volume output volume 80

tell application "iTunes"
  # rewind
  if (player position) > 0 then
    set player position to 0
  end if
  
  # start quiet
  set sound volume to 0
  
  # play song
  set result to (search playlist "Library" for "Guile Theme")
  play item 1 of result
  
  # fade in
  repeat while (get sound volume) ≤ 80
    set sound volume to (sound volume + 5)
    delay 0.3
  end repeat
end tell
