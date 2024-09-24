---
title: Teaching
summary: My courses
type: landing

cascade:
  - _target:
      kind: page
    params:
      show_breadcrumb: true

sections:
  - block: collection
    id: teaching
    content:
      title: Teaching
      filters:
        folders:
          - teaching
    design:
      view: article-grid
      columns: 2
  - block: collection
    content:
      title: 활동
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
