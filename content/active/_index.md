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
      title: Teaching
      filters:
        folders:
          - active
    design:
      view: community/littlecard

  - block: collection
    content:
      title: 활동
      username: admin
    design:
      view: community/littlecard
      columns: 2
  - block: resume-awards
    content:
      title: Awards
      username: admin
    design:
      view: card
---
