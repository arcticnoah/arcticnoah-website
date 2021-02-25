---
title: "Starting to port over/refactor my Godot prototype to Unity"
date: 2021-01-22T17:52:41Z
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

- [x] (**!**) Start refactoring the current Godot game code into Unity

----

Today's single goal was to start working on the recreating the game in Unity, focusing on having a better code/scene structure, making it easier to add new features. I spent a large amount of today just learning various tools within Unity, like its package manager and some tools from Unity's own packages such as how to setup tile maps, and rule tiles from Unity's [`2D Extras`](https://github.com/Unity-Technologies/2d-extras/) package.

I managed to implement my camera script from my WIP procedural city project with the new Unity input system. I've decided to try out a 2.5D camera angle for the game, quite similar to what the 3DS Fire Emblem games have done.

{{< video src="demo" autoplay="false" loop="true" muted="true" controls="true" caption="Video demo of what I managed to make today." >}}