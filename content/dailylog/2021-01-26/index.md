---
title: "Finally able to start making again!"
date: 2021-01-26T19:03:32Z
draft: false
type: "dailylog"
focus: 
    - game-dev
    - 2021-game-project
---

## Today's to-do list

{{< todolist-key >}}

- [x] (**!**) Learn some programming patterns and implement them into the project
- [x] (**!**) Properly handle inputs correctly
- [x] (**!**) Add camera drag margins
- [ ] Add pathfinding class

----

Woo, the tooth pain is gone, meaning that I can finally continue working on the game! The focus today was to finish up the new programming pattern I started implementing to let swapping controls between different players/entities much easier in the future. I managed to get it working, and decided to redo the whole cursor from scratch as a result. It now features a pointer that you control, with the currently hovered grid cell highlighted for when you select entities with it. I also added the camera to move via drag margins, so that whenever the pointer starts getting closer to the edges, it'll move the camera towards it. You can also now pan the camera without moving the pointer!

{{< video src="demo" autoplay="false" loop="true" muted="true" controls="true" caption="Video demo demonstrating the new pointer system, with the newly setup controls handling system." >}}

I was hoping to start at least working on the pathfinder class today, but I had a hard time trying to figure out how to change the entity that would receive inputs during runtime but I think I've come up with a good enough solution.
