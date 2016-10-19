---
title: Equalizer
description: Equalizer makes it dead simple to give multiple items equal height.
code:
  javascript:
  html: |
    <div class="row" data-equalizer data-equalize-on="medium" id="test-eq">
      <div class="medium-4 columns">
        <div class="callout" data-equalizer-watch>
          <img src= "assets/img/generic/square-1.jpg">
        </div>
      </div>
      <div class="medium-4 columns">
        <div class="callout" data-equalizer-watch>
          <p>Pellentesque habitant morbi tristique senectus et netus et, ante.</p>
        </div>
      </div>
      <div class="medium-4 columns">
        <div class="callout" data-equalizer-watch>
          <img src= "assets/img/generic/rectangle-1.jpg">
        </div>
      </div>
    </div>
  markdown:
---
{% include code.markdown %}
