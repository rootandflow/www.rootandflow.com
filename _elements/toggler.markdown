---
title: Toggler
code:
  javascript:
  html: |
    <p><a data-toggle="menuBar">Expand!</a></p>

    <ul class="menu" id="menuBar" data-toggler=".expanded">
      <li><a href="#">One</a></li>
      <li><a href="#">Two</a></li>
      <li><a href="#">Three</a></li>
      <li><a href="#">Four</a></li>
    </ul>
  markdown:
---
{% include code.markdown %}
