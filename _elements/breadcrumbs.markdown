---
title: Breadcrumbs
description: Breadcrumbs come in handy to show a navigation trail for users clicking through your site.
code:
  javascript:
  html: |
    <nav aria-label="You are here:" role="navigation">
      <ul class="breadcrumbs">
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li class="disabled">Gene Splicing</li>
        <li>
          <span class="show-for-sr">Current: </span> Cloning
        </li>
      </ul>
    </nav>
  markdown:
---
{% include code.markdown %}
