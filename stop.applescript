tell application "iTunes"
	# fade out
	repeat while (get sound volume) > 0
		set sound volume to (sound volume - 5)
		delay 0.2
	end repeat
	
	# stop playing
	stop
end tell
