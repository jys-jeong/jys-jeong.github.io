---
title: "Projects"
date: 2024-05-19
type: landing

design:
  # Section spacing
  spacing: "5rem"

# Page sections
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
          filename: web.jpg
          filters:
            brightness: 1
          parallax: false
          position: center
          size: cover
          text_color_light: true
      spacing:
        padding: ["18rem", "0", "6rem", "0"]
      css_class: fullscreen
  - block: community/collection
    content:
      title: Projects
      filters:
        folders:
          - project
      items_count: 8
    design:
      view: community/custom_card
      fill_image: false
      columns: 3
---
