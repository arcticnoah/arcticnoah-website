---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
draft: true
type: "dailylog"
focus: 
    - draft
---

## Today's to-do list

{{< todolist-key >}}

- [ ] (**!**) Example important task
  - Example notes
- [ ] Example task
- [ ] (**?**) Example optional task

----
