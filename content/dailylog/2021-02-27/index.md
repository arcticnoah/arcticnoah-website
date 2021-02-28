---
title: "Starting to work on a level loading system"
date: 2021-02-27T00:42:38Z
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
  - [x] Split current level into a common scene and level-unique elements
  - [ ] Add level loading system
    - Currently half-working
  - [ ] Implement a global game state machine (just with playing state for now) and a game-mode state (with only the currently needed states for now)
  - [ ] Separate my current code to follow the SOLID principles
  - [ ] Try implementing my personal ECS system and seeing if its viable
  - [ ] (**?**) Start work on the RPG stats system

----

Today I came across the discovery that Unity supports loading more than one scene at a time, both via the editor and during runtime, so I tried to split up my current single level's hierarchy into a scene that consists of common components needed for all the levels and another scene for the level-unique elements, like the tile map, players and entities.

I then tried to create a level loading system for the common scene to load a specified level scene and managed to get the loading itself working. The issue however, is that the objects in the scene don't seem to fully load during Unity's `Awake()` function call, so I'll look into this tomorrow as I'm feeling really lazy today :(
