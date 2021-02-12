---
title: "NEA Web Chat App"
date: 2020-03
timespan: "November 2019 - March 2020"
draft: false
cover: "cover.jpg"
useRelativeCover: true
hideCover: true
type: "portfolio"
categories:
    - sixth-form-education
    - programming
    - website
    - application
---

## Overview

{{< youtube id="aI1gW4By7SU" caption="Video demonstrating the app" >}}

{{< carousel-start >}}
{{< image src="screenshot1.png" slide="true" >}}
{{< image src="screenshot2.png" slide="true" >}}
{{< image src="screenshot3.png" slide="true" >}}
{{< image src="screenshot4.png" slide="true" >}}
{{< carousel-end dots="true" caption="Screenshots of the app with various devices and 'users'" >}}

Source code available here: [Github Repo](https://github.com/arcticnoah/nea-web-chat)

*Note:* The program is missing useful, key features since it was my **first Javascript project**, created for my A-Level coursework, which was cancelled in March 2020 due to COVID-19 and I haven't worked on it since.

---

## Summary of the project

A website-based chat application, inspired by [Discord](https://discord.com/), for my A-Level (2019-2020 Exam) Computer Science coursework. Its focus was on being privacy-friendly, by letting people host their own chat servers (which would store all the data) for their own communities, be it family, friends, group activities, etc. It was also very accessible, as all it required was a Javascript-enabled web browser with an active internet connection.

---

## Technical Sheet

Tools that I used whilst working on this project:

- **UI Mockups:**
  - Figma

- **IDE**:
  - Visual Studio Code

- **Program Toolsets:**
  - HTML/CSS
    - Bootstrap framework
  - Javascript (Node.js)
    - Main [npm](https://www.npmjs.com/) packages:
      - [Socket.io](https://socket.io/)
      - [Express](https://expressjs.com/)
      - [Passport](http://www.passportjs.org/)
      - [Nodemailer](https://nodemailer.com/)

---

## Helpful/used resources

- [Socket.io Chat Example](https://github.com/socketio/socket.io/tree/master/examples/chat)
- [Login/register page tutorial](https://www.florin-pop.com/blog/2019/03/double-slider-sign-in-up-form/), which I used as a basis for mine

---

## Process of the project

During my Sixth Form education in the UK, in my programming class, we were expected to create a project of our choosing for the **N**on-**E**xam **A**ssessment (**NEA** for short). I decided to use this project as an opportunity to learn web development and some networking basics, leading me to eventually settle on my project being to create a website-based chat application.

I was heavily inspired by Discord's current UI/UX and decided to copy the majority of it for the sake of focusing on the actual code design as that was the main focus of the project. I began by brushing up on some HTML/CSS as I hadn't used it in around 4 years and only ever created a very simple, static website with text and an image. I then proceeded by learning the syntax of Javascript and started researching into how to create a server application. I quickly found a few useful [Node.js](https://nodejs.org/) packages (notably [Socket.io](https://socket.io/) and [Express](https://expressjs.com/)) and started learning the basics of Node.js and REST APIs.

After having learnt what I felt was enough for being able to begin the actual program, I first started working on the required research and design document. This proved to be rather useful in the future but also took up more time and effort than I felt was necessary. I had originally came up with various features to include but many had to be removed due to them being an unnecessary amount of extra effort for the exam, especially since it was later cancelled entirely and I'd rather work on new projects.

I spent around a month creating the actual project, with around 2 to 3 hours of work a day, including a refactor of the project once I knew a better way to approach it all. Overall, I learned a tone of new things from CMD, Linux and Bash basics, to how to set up web servers, general networking stuff, ssh, git/GitHub and setting up a web domain.
