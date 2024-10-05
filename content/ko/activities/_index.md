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
      title:
      subtitle: ""
      text:
    design:
      columns: "1"
      background:
        image:
          filename: app.jpg
          filters:
            brightness: 1
          parallax: false
          position: center
          size: cover
          text_color_light: true
      spacing:
        padding: ["20px", "0", "20px", "0"]
      css_class: fullscreen
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
