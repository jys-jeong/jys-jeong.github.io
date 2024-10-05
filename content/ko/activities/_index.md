---
title: activities
summary: My courses
type: landing

cascade:
  - _target:
      kind: page
    params:
      show_breadcrumb: true
banner:
  image: "assets/media/app.png" # Full path to your banner image
  caption: "Image credit: [**Unsplash**](https://unsplash.com/)" # Markdown-supported caption for the image
  alt: "A descriptive text for the banner image"
  class: "full-width"

sections:
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
