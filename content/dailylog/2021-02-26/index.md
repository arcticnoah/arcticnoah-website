---
title: "Organising the current code for my game"
date: 2021-02-26T09:14:29Z
draft: false
type: "dailylog"
focus: 
    - game-dev
    - 2021-game-project
    - programming
    - unity3d
---

## Today's to-do list

{{< todolist-key >}}

- [ ] (**!**) Game progress:
  - [x] Plan some more aspects of the gameplay
  - [x] Implement a public method to change the state of a state machine
  - [x] Organise code better
    - Separated most classes into smaller, more reusable chunks
  - [x] Fix the current unit/cursor state mess
    - I kinda did, it still not ideal
  - [ ] Implement a global game state machine (just with playing state for now) and a game-mode state (with only the currently needed states for now)
  - [ ] Separate my current code to follow the SOLID principles
  - [ ] Try implementing my personal ECS system and seeing if its viable
  - [ ] (**?**) Start work on the RPG stats system

----

So today's the first day in around 2 weeks that I directly work on my game. Since the last post (from exactly 1 month ago now) about it, I've managed to do the following:

- Apply PBR materials (probably overkill, good for now tho) to the sprites, allowing for some dynamic lighting to be applied.
- Hack/Fix a floating point error with my tilemaps being used with a perspective camera by making the world grid size `0.9999` rather than `1`. (super hack-y "fix" but this shouldn't cause any additional problems with the visual offset as the maps will not be large enough for the offset to be clearly visible)
- Added a state machine ([using this one](https://jacksondunstan.com/articles/3137)) for various aspects, such as the each unit's state affecting its available options (if any), or the cursor's state enabling specific aspects of the controls.
- Added some GUI elements (for now most of it is just static), like the unit menu and current key gamemode info.
- Added event manager system, allowing scripts to communicate with each other nicely.
- Added JSON data files which are automatically converted into scriptable objects. Useful for rapidly editing various unit/tile parameters.
- Added grid pathfinding (with weighted tile costs), which is currently used for unit movement but will also be used for ranged unit attacks.
- Created a personal wiki for planning out various aspects of the game. (from gameplay, to game design and programming)

{{< video src="demo" autoplay="false" loop="true" muted="true" controls="true" caption="Video demo showing the current progress of the game." >}}

So that's what I've managed to add to the game in the past month, but today I managed to do another iteration on my game design overview document, where I thought of a couple new features to add (if I have the time) and a rough timeline of when I'd like to have certain aspects done by. The rest of the day was trying to organise the code as best I can and also planning out how to expand the game to support features like saving/loading, multiple Unity scenes and other things. The code is in a much better state that it was before, and I think I'm finally starting to grasp how to approach making a game. Tomorrow I'll try to start implementing some of the features I planned today...
