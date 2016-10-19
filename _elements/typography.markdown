---
title: Typography
subgroups:
  fonts:
    Cinzel Decorative:
      class     : cinzel
      fallback  : cursive
      sass      : '$cinzel-font-family'
    Courgette:
      class     : cour
      fallback  : cursive
      sass      : '$cinzel-font-family'
    Merriweather:
      class     : merri
      fallback  : serif
      sass      : '$merri-font-family'
    Roboto Mono:
      class     : mono
      fallback  : monospace
      sass      : '$mono-font-family'
    Slabo 13px:
      class     : slabo
      fallback  : serif
      sass      : '$slabo-font-family'
---
{% include subgroups.html %}

### Headings

{% for i in (1..6) %}
<h{{ i }}>Heading Level {{ i }}</h{{ i }}>
{% endfor %}

### Inline elements

### Lists

### Paragraphs

{{ site.data.lorum.sagan | markdownify | truncatewords: 200 }}

