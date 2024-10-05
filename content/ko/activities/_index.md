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
  image: "app.jpg" # 배너 이미지 경로
  caption: "Image credit: [**Unsplash**](https://unsplash.com/)" # 이미지 출처 및 캡션

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
