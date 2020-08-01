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

### Fixing my Google Analytics import script

After having tested the contact section, I realised that the Google analytics code I had written a few days ago wasn't working at all. After some inspection of the code, I had done the following wrong:
 - Put the script into the <body> element of the website rather than the <head> (probably not a big deal but still)
 - Left 2 `if` statements to always be false, so the Google analytics script would never even be added.
 - The base website template (`/_default/baseof.html`) wasn't even using the correct analytics partial.

So after having fixed these issues, the script now loads correctly and only when the user allows it to be used.