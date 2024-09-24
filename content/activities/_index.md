---
title: active
summary: My courses
type: landing

cascade:
  - _target:
      kind: page
    params:
      show_breadcrumb: true

sections:
  - block: collection
    id: active
    content:
      title: 활동
      filters:
        folders:
          - active
    design:
      view: community/card

  - block: resume-awards
    content:
      title: Awards
      username: admin
    design:
      view: card
---
