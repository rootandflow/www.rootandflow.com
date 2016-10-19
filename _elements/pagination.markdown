---
title: Pagination
description: Pagination is a type of navigation that lets users click through pages of search results, products, or other related items.
code:
  javascript:
  html: |
    <ul class="pagination" role="navigation" aria-label="Pagination">
      <li class="disabled">Previous <span class="show-for-sr">page</span></li>
      <li class="current"><span class="show-for-sr">You're on page</span> 1</li>
      <li><a href="#" aria-label="Page 2">2</a></li>
      <li><a href="#" aria-label="Page 3">3</a></li>
      <li><a href="#" aria-label="Page 4">4</a></li>
      <li class="ellipsis" aria-hidden="true"></li>
      <li><a href="#" aria-label="Page 12">12</a></li>
      <li><a href="#" aria-label="Page 13">13</a></li>
      <li><a href="#" aria-label="Next page">Next <span class="show-for-sr">page</span></a></li>
    </ul>
  markdown:
---
{% include code.markdown %}
