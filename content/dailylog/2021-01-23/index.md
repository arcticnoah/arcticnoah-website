---
title: "Adding grid snapping and the cursor to the Unity version"
date: 2021-01-23T14:01:12Z
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

- [x] (**!**) Improve the camera to snap to the grid
- [x] (**!**) Add cursor that can select entities
- [x] Add unit entity movement via the cursor
- [ ] Add drag margins for the camera, so it only moves the camera when the cursor is in the margins

----

Today I managed to implement a grid snapping-like effect to the movement of the camera, so that when the camera isn't being controlled via an input, it'll move to the centre of the current grid cell. I also add an outline shader by following [this tutorial](https://www.youtube.com/watch?v=84rZ-rCRsZk), which was really nicely explained and was a good introduction to Unity's shader graph. I added this shader to both the unit sprite and tiles, creating a grid effect.

I then added a cursor sprite, which currently looks like its overlayed but is actually on top of the tiles. I quickly added a selection system for the cursor to allow testing of basic movement of a selected unit.

{{< video src="demo" autoplay="false" loop="true" muted="true" controls="true" caption="Video demo showing the grid snapping and moving the unit by selecting it with the cursor." >}}

I wanted to add drag margins for the camera's movement but I think that'll have to wait as I'm already making rather messy, unscalable code, so tomorrow I'll focus on learning better programming patterns and trying to implement them.
