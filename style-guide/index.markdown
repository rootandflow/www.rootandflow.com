---
description: All website style elements and code examples.
title: Style Guide
top_nav: dev
---
{% include toc.markdown %}

{% for element in site.elements %}
## [{{ element.title | markdownify | strip_html | strip_newlines }}]({{ element.url | prepend: site.baseurl }})

{{ element.content }}
---
{% endfor %}


### Social Media branding

## Patterns

### Buttons

### Badges

### Table of Contents

