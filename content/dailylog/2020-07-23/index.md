---
title: "Experimenting with OSC for audio visuals"
date: 2020-07-23
draft: false
type: "dailylog"
focus:
    - experimentation
    - programming
    - music
    - dj-live-performing
---

### Outcome of today: 

Today didn't result into much progress sadly. I was looking into vj software for my upcoming music EP project but sadly most of the ones that I found all require a pricey license to fully use, which I simply can't afford. 

So I decided to try out OSC, which I had heard of before but never personally used, to try and create a simple visual scene that could be controlled via OSC from Ableton Live. Here is the current result:

{{< video src="osc-demo" autoplay="false" loop="false" muted="false" controls="true" caption="Make sure to have audio on to see how the visuals sync with the audio via OSC!" >}}

### How I setup the scene above:

I've been learning Godot for the last week and decided I'd give it a go after having found an OSC plugin that allows Godot to send and receive OSC signals, which is exactly what I was looking for. I quickly created a new project, setup a simple scene with a cylinder and imported the plugin. 

I opened a previous Ableton project with a very simple arp and added Ableton's own 'Connection Kit', which offers various ways to input/output signals from various devices/protocols. I added the OSC MIDI Send, which sends the incoming note pitches and velocities whilst the OSC Send allows you to send any mappable parameter, so I chose a macro within Serum.

Back in Godot, I copied the example OSC receive script and modified it to translate the position of the cylinder based on the pitch of a note. Then I stretched the cylinder based on the mapped macro.

### Potential ideas this opens up:

A future project idea could be to produce my own VJ software for my own needs. It wouldn't have to be too complicated but I think I'd enjoy doing something along those lines. If I had something like that, I'd be able to produce more interesting 'dynamic' visuals for my music than a 'static' video.