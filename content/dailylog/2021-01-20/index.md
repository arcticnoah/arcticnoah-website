---
title: "Trying a slightly new setup for the daily log!"
date: 2021-01-20T10:15:13Z
draft: false
type: "dailylog"
focus: 
    - web-development
    - personal-website
---

Okay so I'm gonna try something a bit different with this daily log today. I'll create a to-do list at the start of the day, put it here at the top and then go into some detail about the stuff I did end up doing!

----

## Today's to-do list

{{< todolist-key >}}

- [x] (**!**) Add "Show Key" button this website
- [x] (**!**) Create custom checkboxes (just so I can style them for better clarity, thanks CSS...)
- [x] Remove unused scripts from the website
  - Site base download size is ~80kb less now!
- [ ] (**!**) Publish my first ever game to itch.io!
- [ ] (**!**) Send the demo to friends

----

So today I spent the first few hours adding the new to-do list feature, which I managed to finish off! It's pretty simple honestly, just a button to toggle showing/hiding some text and updating the checkbox style to be more visible and support dark theme.

I also remembered to remove jQuery from the html template as I wasn't using it since it was only imported for when I had tried to use Google Analytics at some point but thankfully swapped to [Plausible](https://plausible.io/), removing the need to jQuery. I also disabled the import of `prism.js`, a JavaScript library included with the Hugo theme I am using a base, but since I haven't included any code snippets, there isn't a need for it yet. This saves ~80kb of bandwidth, which would only be downloaded once, and maybe isn't that much in the great scheme but its still nice to have slightly less bloat.

I did some research for my 2021 game and I've come to the decision that I'll be using the Unity game engine, likely with the URP (Universal Render Pipeline) as it's more actively maintained than the legacy, built-in renderer and the reason I've decided to go for URP instead of HDRP is because my game won't be needing many of the extra features that HDRP offer and also because it URP has better platform support and I wouldn't mind keeping my options open.

I sadly didn't fully finish preparations for publishing my first ever game to itch in the end but hopefully tomorrow I'll work up the courage to do so!
