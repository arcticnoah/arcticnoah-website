---
title: "arcticnoah Website"
date: 2020-05
timespan: "May 2020 - Now"
draft: false
cover: "cover.jpg"
useRelativeCover: true
hideCover: true
type: "portfolio"
categories:
    - personal
    - programming
    - website
---

## Overview

{{< carousel-start >}}
{{< image src="v1_3-alpha-screenshot1.png" slide="true" >}}
{{< image src="v1_3-alpha-screenshot2.png" slide="true" >}}
{{< image src="v1_3-alpha-screenshot3.png" slide="true" >}}
{{< carousel-end dots="true" caption="Website screenshots from v1.3-alpha" >}}

Source code available here: [Github Repo](https://github.com/arcticnoah/arcticnoah-website)

---

## Summary of the project

A static website that serves as a central hub for all the things I've been up to since May 2020. It's actively being updated with new features whenever the need for one occurs. The changelog that lists what features have been added, can be found in the [Github Repo's README](https://github.com/arcticnoah/arcticnoah-website/blob/master/README.md).

---

## Technical Sheet

Tools that I used whilst working on this project:

- **IDE**:
  - Visual Studio Code

- **Program Toolsets**:
  - [Hugo (Static site Framework)](https://gohugo.io/)
    - ['hello-friend' (Theme)](https://github.com/panr/hugo-theme-hello-friend/)
    - ['hugo-video' (Shortcode)](https://github.com/martignoni/hugo-video)
  - JavaScript Libraries:
    - [Embla Carousel](https://github.com/davidcetinkaya/embla-carousel)
    - [Medium Zoom](https://github.com/francoischalifour/medium-zoom)

- **Website Hosting**:
  - [Netlify](https://www.netlify.com/)

---

## Helpful/used resources

- [Hugo Documentation](https://gohugo.io/documentation/)

---

## Process of the project

After having finished my [NEA Web Chat App](/portfolio/2020-04-nea-web-chat-app/) in March 2020, I had registered the domain `arcticnoah.consulting` for a year for free (despite not doing consulting), via GitHub Education. So I decided that I might as well try and put the domain to good use, so I set out to create myself a personal website.

I quickly learned about static site generators/frameworks and decided to try out [Hugo](https://gohugo.io/) as it seemed quite lightweight and didn't require the use of other frameworks like React. I found the theme [hello-friend](https://github.com/panr/hugo-theme-hello-friend/) shortly after and started customising various aspects to my needs. 

After a few days, I put the website up on GitHub pages but soon after discovered [Netlify](https://www.netlify.com/), and decided to move the hosting there as it offered a better setup for the repo and had various additional features.

I've since been adding additional features/sections whenever the situation arises, such as adding a custom HTML audio player (so that I can have a consistent style across most browsers) or adding image carousels with [Embla Carousel](https://github.com/davidcetinkaya/embla-carousel).
