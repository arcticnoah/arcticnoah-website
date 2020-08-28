---
title: "Adding a contact section to the site"
date: 2020-07-31
draft: false
type: "dailylog"
focus:
    - programming
    - web-development
    - personal-website
---

### Trying to add a contact form to a static site

Originally when I started learning about Hugo and static sites in general a few months ago, I didn't think too much about the downsides that it can have, such as no dedicated backend-server for API requests (which makes the overall site simpler to manage however).

It wasn't an issue until I wanted to add a contact form today that would (ideally) send an email to me without having to reveal my email address publicly. I found that Netlify, which is currently what I'm using to host this site, has a way to get all the submitted data from forms without any API/javascript which is really cool and would be ideal. Only issue is that I haven't been able to test this yet since I only have the live version of the site hosted, so tomorrow I'll try to setup the form data receiver.

What I did manage to do today was to setup the 'front-end' of the contact section as you can see here:

{{< image src="contact-section.png" caption="Current version of the contact section">}}

{{< image src="form-confirmation.png" caption="Confirmation page for form submission">}}

I'm hoping to finish the contact page tomorrow and start working on my other 2 projects since they're being neglected currently.