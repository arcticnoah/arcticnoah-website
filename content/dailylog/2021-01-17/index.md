---
title: "My day off and preparing my first game demo for testing with friends"
date: 2021-01-17T20:51:12Z
draft: false
type: "dailylog"
focus: 
    - relaxing
    - game-dev
---

Ever since lockdown first started back in March 2020, I've been treating everyday the same, as another day to do something productive. It's taken me this long to realise, but that's not a great idea really soo I've now designated Sundays to be my day off, since last week.

So today I played around 2 hours of Hades, and 2 hours of Fire Emblem: The Blazing Blade. I've been trying to play a bunch of different tactics games since I find them pretty fun despite me being really terrible at them, so I'm hoping that by playing various different ones I'll slowly figure out how to play them better.

After a few hours of procrastinating, I did decide to actually do something in the end and that was to finish some small tweaks for my game prototype I made back in November before sending it off to some friends for feedback. The tasks included:

- Update the splash screen
- Fix issue with units not being able to spawn from the barracks on tiles with more than 1 movement cost
- Fix issue with some UI elements being overlapped by entity sprites
- Add new tile, mountain
- Change the current map to a smaller, symmetrical one
- Update player's current money immediately after its changed
- Use `.ogg` audio files instead of `.wav` to save space
- Loop the ambience audio seamlessly
- Add game icon

I managed to do all of these except the ambience looping as Godot seems to jump a bit when starting a looping file again but its not worth the effort now to fix. I think the game is in a pretty damn good state for my first attempt ever so heck yea!
