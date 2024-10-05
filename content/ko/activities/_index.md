---
title: activities
summary: My courses
type: landing

cascade:
  - _target:
      kind: page
    params:
      show_breadcrumb: true

sections:
  - block: markdown
    content:
      text: "![img](app.jpg)"
  - block: collection
    id: activities
    content:
      title: 활동
      filters:
        folders:
          - activities
    design:
      view: community/card

  - block: community/custom_resume-awards
    content:
      title: Awards
      username: admin
    design:
      view: card
---
