---
title: "Work on feedback for a render"
date: 2020-07-25
draft: false
type: "dailylog"
focus:
    - art
    - computer-graphics
---

### Using given feedback for improving

A week or so ago, I asked a great friend of mine, [steb](https://twitter.com/st3bongo) (you should totally follow him), to give some feedback on my latest Blender render, which you can see below:

{{< image src="render-before.jpg" caption="The render before today's adjustments" >}}

His main points to fix were:

 - Change the materials to be less clean by adding variations/imperfections.
 - Add some more details to the walls (like posters) as they're fairly plain.
 - Change the lighting to either highlight or silhouette the character (its an awesome free model that I found [here](https://gumroad.com/thestoff#lFnryq)).
 - Compositional changes like the building on the far left to be moved as the poll structure is hard to make out.

With these points in mind, I set out to try and work on as many as possible today. The first thing I wanted to change was the digital billboard texture, as it was temporary and just didn't fit the style I was going for. Below is the source texture:

{{< image src="billboard-before.jpg" caption="Temporary billboard texture" >}}

I genuinely have no idea what my goal was with this temporary texture but I kinda like how random the concept is, so I decided to just show it here anyway :P I tried to create a more colourful design with clear, bold text so that I'd add more coloured lighting into the scene and generally be more eye catching.

{{< image src="billboard-after.jpg" caption="New billboard texture" >}}

I've made an RGB screen emulation material in the past, so I'm reusing it in this scene to make it more obvious that this billboard isn't just a paper poster but rather a digital screen, since I think it just looks cooler than a simple texture.

{{< image src="billboard-shader.png" caption="Close-up of the RGB screen material">}}

I then changed the wall material to a procedural concrete texture and use the previous wall texture as a mask, so that I could still have the tile tessellation gaps since it adds a bit more detail.

I also re-angled the spotlight to highlight the character and cast a more distinct shadow onto the wall. I also slight adjusted the metal railing's material but I still think it looks too procedural so I might end up using an image texture since I can't seem to figure it out.

{{< image src="render-after.jpg" caption="Before compositing" >}}

These changes led to a much better render output, but I then brought it into Photoshop to do some quick compositing where I added some objects, added some clouds to the sky, overladed some textures and colour corrected it into this.

{{< image src="render-after-comp.jpg" caption="After compositing" >}}