---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"
css:
  - "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"

js:
  - "https://code.jquery.com/jquery-3.3.1.slim.min.js"
  - "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
  - "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: jys
      text: ""
      # Show a call-to-action button under your biography? (optional)
      # button:
      #   text: Download CV
      #   url: uploads/resume.pdf
    design:
      css_class: light
      background:
        image:
          # Add your image background to `assets/media/`.
          # filename: stacked-peaks.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false
  - block: slider
    content:
      slides:
        - title: <span style="font-size:70%">웹 개발</span>
          content:
          align: center
          background:
            image:
              filename: web.jpg
              filters:
                brightness: 0.4
            position: center
            color: "#fff"

        - title: <span style="font-size:70%">앱 개발</span>
          content:
          align: center
          background:
            image:
              filename: app.jpg
              filters:
                brightness: 0.4
            position: center
            color: "#fff"

        - title: <span style="font-size:70%">헬스</span>
          content:
          align: center
          background:
            image:
              filename: play.jpg
              filters:
                brightness: 0.4
            position: center
            color: "#fff"
        - title: <span style="font-size:70%">운동 역학</span>
          content:
          align: center
          background:
            image:
              filename: football.jpg
              filters:
                brightness: 0.4
            position: center
            color: "#fff"

      design:
        # Slide height is automatic unless you force a specific height (e.g. '400px')
        slide_height: 350px

        is_fullscreen: false
        # Automatically transition through slides?
        loop: true
        # Duration of transition between slides (in ms)
        interval: 3000

  - block: community/resume-skills
    id: hobbies
    content:
      title: 취미
      username: admin
    design:
      show_skill_percentage: false
  # - block: markdown
  #   content:
  #     title: "📚 My Research"
  #     subtitle: ""
  #     text: |-
  #       Use this area to speak to your mission. I'm a research scientist in the Moonshot team at DeepMind. I blog about machine learning, deep learning, and moonshots.

  #       I apply a range of qualitative and quantitative methods to comprehensively investigate the role of science and technology in the economy.

  #       Please reach out to collaborate 😃
  #   design:
  #     columns: "1"
  # - block: collection
  #   id: papers
  #   content:
  #     title: Featured Publications
  #     filters:
  #       folders:
  #         - publication
  #       featured_only: true
  #   design:
  #     view: article-grid
  #     columns: 2
  # - block: collection
  #   content:
  #     title: Recent Publications
  #     text: ""
  #     filters:
  #       folders:
  #         - publication
  #       exclude_featured: false
  #   design:
  #     view: citation
  # - block: collection
  #   id: talks
  #   content:
  #     title: Recent & Upcoming Talks
  #     filters:
  #       folders:
  #         - event
  #   design:
  #     view: article-grid
  #     columns: 1
  # - block: collection
  #   id: news
  #   content:
  #     title: Recent News
  #     subtitle: ""
  #     text: ""
  #     # Page type to display. E.g. post, talk, publication...
  #     page_type: post
  #     # Choose how many pages you would like to display (0 = all pages)
  #     count: 5
  #     # Filter on criteria
  #     filters:
  #       author: ""
  #       category: ""
  #       tag: ""
  #       exclude_featured: false
  #       exclude_future: false
  #       exclude_past: false
  #       publication_type: ""
  #     # Choose how many pages you would like to offset by
  #     offset: 0
  #     # Page order: descending (desc) or ascending (asc) date.
  #     order: desc
  #   design:
  #     # Choose a layout view
  #     view: date-title-summary
  #     # Reduce spacing
  #     spacing:
  #       padding: [0, 0, 0, 0]
  # - block: cta-card
  #   demo: true # Only display this section in the Hugo Blox Builder demo site
  #   content:
  #     title: 👉 Build your own academic website like this
  #     text: |-
  #       This site is generated by Hugo Blox Builder - the FREE, Hugo-based open source website builder trusted by 250,000+ academics like you.

  #       <a class="github-button" href="https://github.com/HugoBlox/hugo-blox-builder" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star HugoBlox/hugo-blox-builder on GitHub">Star</a>

  #       Easily build anything with blocks - no-code required!

  #       From landing pages, second brains, and courses to academic resumés, conferences, and tech blogs.
  #     button:
  #       text: Get Started
  #       url: https://hugoblox.com/templates/
  #   design:
  #     card:
  #       # Card background color (CSS class)
  #       css_class: "bg-primary-700"
  #       css_style: ""
---
