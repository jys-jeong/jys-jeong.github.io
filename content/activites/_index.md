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
    id: activities
    content:
      title: Teaching
      filters:
        folders:
          - activities
    design:
      view: article-grid
      columns: 2
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
