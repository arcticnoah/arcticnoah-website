---
title: "Migrating to a new domain!"
date: 2021-02-25T18:17:14Z
draft: false
type: "dailylog"
focus: 
    - personal-website
    - web-development
    - programming
---

## Today's to-do list

{{< todolist-key >}}

- [x] (**!**) Start the daily logs again!
- [x] (**!**) Migrate from `arcticnoah.consulting` domain to `arcticnoah.xyz`
  - I was never really meant to keep the old domain as it was basically just a bad joke
  - [x] Setup redirect on old domain to the new one
    - Can't seem to setup traditional redirects, so I'm hosting a redirecting webpage that informs the user about the new domain

----

Firstly, I just wanna say sorry that it's been a while since the last one of these, I've been dealing with a bunch of personal things but hopefully things have calmed down for the next month, so I hope to do these till things get chaotic again.

Anyways, today's main goal was to migrate the current website from the old domain to a new one that I'm actually happy with paying for. The pervious one was originally just meant for hosting my [NEA Web Chat Application](portfolio/2020-04-nea-web-chat-app/) demo, which I got as I had access to select domain endings from [Name.com](https://name.com) free for 1 year, thanks to [Github Education](https://education.github.com/). I decided on a domain that I would **not** want to pay for as I had looked into how much they'd cost if I were to renew them and some of the prices were pretty bad compared to other domain sellers, so I originally picked one I wouldn't want to pay for in the future ~~and also because I thought it was kinda funny...~~ :P

After buying the new one, it thankfully wasn't too difficult to migrate to! I was worried as the HTTPS certificates that Netlify tried to install didn't work correctly at first, but I figured it was probably just the DNS cache since it seems to have resolved itself now!

I couldn't get redirects from old domain to work via the DNS, so I've instead setup a simple HTML page that informs the user of the new domain and redirects them automagically after a few seconds (also "pre-loads"/uses the stylesheets from the actual site).

{{< image src="domain-change-page.png" caption="Preview of the page informing the domain change." >}}

I haven't made much direct progress with the game but I've been doing a bunch of behind the scenes planning, experimentation and learning how to effectively use C#, OOP design principles, and general programming/game-dev unique design patterns. I'll hopefully start working a bit more directly on it tomorrow but we'll see...
