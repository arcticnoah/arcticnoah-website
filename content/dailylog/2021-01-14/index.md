---
title: "Making progress with the artwork"
date: 2021-01-14T10:49:32Z
draft: false
type: "dailylog"
focus: 
    - graphic-design
    - reflecting
    - planning
---

Once again, I got up rather late today sadly but quickly decided to start working on the artwork some more since I managed to fix Illustrator yesterday. After spending a few hours on adding more elements, here is the progress I've managed to accumulate:

{{< image src="artwork-iterations.gif" caption="The first frame is were I left off yesterday. I'm pretty slow when using Illustrator since I'm a beginner still but regardless, I'm pretty happy with the result so far!">}}

I also decided to rename the track from "Rebinding" to "Rebound", simply because rebinding is often associated with re-binding a book together. This change is more to reduce confusion since its meant to be about me becoming connected/invested in music production again! I also just think it sounds better when you say it now :P

## Productivity as of late/Goals for the near future

I've been thinking a lot about what I should prioritise for now, and I often get paralysed by choice and feeling like I have a lot of time (which I do, but regardless, I really should be making the most of it). I think I often just have too many ideas that I want to do and as a result I end up hardly ever finishing any of them. I currently just want to release this single track for now and then really start prioritising programming for the next few months. 

I recently started dabbling with the Unity game engine since Godot is great for 2D but its missing various tools I'd want for 3D, such as LODs, occlusion culling (I believe both are being added in v4.0) and honestly I don't mind learning new frameworks/tools now that I'm somewhat familiar with how to go about learning them (by just setting myself a project and working towards the outcome). My current project with Unity is to create a rather basic procedural city (with generated road layouts and simple block buildings) and its slowly coming together. I've managed to get road paths working with voronoi noise.

{{< image src="current-road-layout.png" caption="At the moment the points are generated with voronoi noise on a 2D plane. Eventually, I'd like to introduce influence of the road layout from terrain/heightmap." >}}

I'm gonna start working towards having a more convincing/realistic distribution soon probably via the use of 'Poisson disc sampling' and maybe a 'heat map' for determining the minimum distance between points, allowing for more dense roads in specific parts.