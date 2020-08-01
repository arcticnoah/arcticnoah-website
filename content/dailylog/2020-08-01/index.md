---
title: "TEMP"
date: 2020-08-01
draft: true
type: "dailylog"
focus:
    - programming
    - web-development
    - personal-website
---

### Finishing off the contact section

So, like I said I would yesterday, I finished off the contact section of the website and setup a branch deployment with Netlify to publish the 'experimental' branch of the site's repo to a separate URL for testing. Thankfully it worked first time, so that was painless :D

{{< image src="netlify-form-submissions.png" position="center" caption="Form submission viewed from the Netlify Admin page">}}

A cool feature I didn't realise until today with the Netlify form system, is that it has built-in spam filtering and even lets you add reCAPTCHA to further reduce spam. I decided that I would implement it already as Netlify has a restriction of 100 submissions per month and I wouldn't want some bot to use up all my submissions, especially since the month just started :P

{{< image src="form-recaptcha.png" position="center" caption="Form with the reCAPTCHA widget present">}}

I also setup email notifications for whenever I would have a form submission via Netlify.

{{< image src="netlify-email-notification.png" position="center" caption="Email notification setup for form submissions via Netlify">}}