---
title: "EPQ Raytracing App"
date: 2020-01
timespan: "December 2019 - January 2020"
draft: false
cover: "cover.jpg"
useRelativeCover: true
hideCover: true
type: "portfolio"
categories:
    - sixth-form-education
    - programming
    - computer-graphics
    - application
---

## Overview

{{< carousel-start >}}
{{< image src="screenshot1.png" slide="true" >}}
{{< image src="screenshot2.png" slide="true" >}}
{{< carousel-end dots="true" caption="Screenshots of the program" >}}

{{< carousel-start >}}
{{< image src="render1.png" slide="true" >}}
{{< image src="render2.png" slide="true" >}}
{{< carousel-end dots="true" caption="Render output of the program" >}}

[Download (Windows x64 .exe)](https://github.com/arcticnoah/epq-raytracer/releases/latest)

Source code available here: [Github Repo](https://github.com/arcticnoah/epq-raytracer)

*Note:* The program is missing useful, key features since it was my **first C# project**, created for my A-Level coursework and I haven't worked on it since.

---
## Summary of the project

A raytracing application, largely based on the [Raytracing in One Weekend (Book Series)](https://raytracing.github.io/), for my A-Level (2019-2020 Exam) EPQ (Extended Project Qualification, where you can research your own topic/question). The purpose of this application was to teach myself how a raytracing works in a practical situation. It was originally designed only for hard-coding a scene into the program but I had to add UI quite late into the project, as I had to present the program to people who knew little about programming, let alone raytracing.

---
## Technical Sheet

Tools that I used whilst working on this project:

- **IDE**:
  - Visual Studio 2019 Community

- **Program Toolsets**:
  - C# (.NET Framework)
    - Windows Forms

---
## Helpful/used resources:

- [Raytracing in One Weekend (Book Series)](https://raytracing.github.io/)
- [Scratchapixel](https://www.scratchapixel.com/)

---
## Process of the project

During my Sixth Form education in the UK, there was an optional subject/qualification that you could take called an EPQ (Extended Project Qualification), where you're asked to select your own question/topic to answer/research whilst documenting the majority of the process. The main outcome of the project should either be something you created (eg, a mini-documentary, in my case, a program) or an essay. At the time of starting the project, I had just started having a more concrete interest in Computer Graphics, so I decided to learn how the various main rendering techniques work. I settled on creating a raytracing program since raytracing seemed the most interesting and visually impressive to me.

I created various project documents, such as gantt charts for scheduling when tasks should be done, an outcome essay outline so that I'd know what to research, etc. I decided to focus on writing the main research parts for the rendering techniques other than raytracing for the outcome essay before I started the program. I did research into rasterisation and raymarching, where I explained a bit about the history of such techniques, a top level explanation of how they work and pros/cons of each one (these were also later done with raytracing once I had written the program).

After having this done, I started work on the program. I had already heard of the Raytracing in One Weekend Book Series, so I decided to start my program from there. It was a very useful book but I seemed to have used an earlier edition of the book since there were quite a few missing aspects compared to the website version linked above. The book's code is written in C and at the time I only really had experience with Python, Javascript and a little C# (when I tried learning Unity 3D a bit earlier in the year), so I decided to try writing the program in C#. This was generally a good decision, as it was much faster than if I had written it in either Python or Javascript but it took a little getting used to, especially since I had to port over code from C, a language I wasn't really familiar with.

I completed Book 1 after about a week of 2-4 hours of work and decided since I had spare time, I'd try tackling Book 2 since it added a lot more visually impressive features than just sphere rendering. This was again not too difficult but took around 2-3 weeks of extra work but it was definitely worth it since I had much more content to explore and explain in my outcome essay. I was only a few days behind my gantt chart at this point but after one of my advisor meetings on the project, it was made clear that I'd have to demonstrate the program to students and teachers who likely knew little about programming, so I had to quickly scramble to create a UI for a program that was originally going to be used only by me. I managed to get the UI working after a few days but unfortunately the source code is nothing to be proud of, although it was my first time using C#'s forms, let alone creating a proper desktop application for the first time.