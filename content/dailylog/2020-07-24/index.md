---
title: "Adding third party cookies to this website"
date: 2020-07-24
draft: false
type: "dailylog"
focus:
    - programming
    - web-development
    - personal-website
---

### Adding third party cookies to this site

Today I decided to add Google Analytics to the site, mostly for tracking if I have any traffic (I'm just curious if I am) and also because I wanted to learn more about website cookies.

I signed in with my Google account and created a new property to add the site to the dashboard. I found that Hugo has a built-in template partial for Google Analytics, so I used that and found it working!

Now the issue is that using third party cookies may not be in the interest of all users (myself included generally) so I want to inform people about these cookies and allow them to choose whether they want them or not (I am also required to do so for GDPR).

To do this, I first created the typical cookie consent banner that various other sites have employed but with mine I wanted it to be very easy to disagree to cookies (unlike what most sites do, which is make it as tedious as possible to decline third party cookies). I assume that the user doesn't want to have the cookies enabled by default, so I only load the third party cookie (Google Analytics) when the user agrees to the cookies being enabled.

I also added a cookie policy page that explains what the cookies do, why I'm using them and how to disable/delete them. After having written that last section, I decided to make it easy to toggle between enabling and disabling the third party cookies on the site, by adding a toggle button in the footer (thats present on all the pages of the site).

Currently this is all only present on the experimental branch of the site, where I'm planning to add some more new features first before pushing them onto the public/live branch.