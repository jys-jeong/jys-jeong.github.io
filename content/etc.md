---
title: "Etc"
date: 2023-10-24
type: landing

design:
  spacing: "5rem"

# Note: `username` refers to the user's folder name in `content/authors/`

# Page sections
sections:
  - block: collection
    id: news
    content:
      title: 자격증
      subtitle: ""
      text: ""
      # Page type to display. E.g. post, talk, publication...
      page_type: etc
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      # Filter on criteria
      filters:
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: date-title-summary
      # Reduce spacing
      spacing:
        padding: [0, 0, 0, 0]
---
