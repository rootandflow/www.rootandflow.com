---
title: Slider
description: This handy lil slider is perfect for setting specific values within a range.
code:
  javascript:
  html: |
    <div class="slider" data-slider data-initial-start='50' data-end='200'>
      <span class="slider-handle"  data-slider-handle role="slider" tabindex="1"></span>
      <span class="slider-fill" data-slider-fill></span>
      <input type="hidden">
    </div>

    <div class="slider vertical" data-slider data-initial-start='25' data-end='200' data-vertical="true">
      <span class="slider-handle" data-slider-handle role="slider" tabindex="1"></span>
      <span class="slider-fill" data-slider-fill></span>
      <input type="hidden">
    </div>

    <div class="slider" data-slider data-initial-start='25' data-initial-end='75'>
      <span class="slider-handle" data-slider-handle role="slider" tabindex="1"></span>
      <span class="slider-fill" data-slider-fill></span>
      <span class="slider-handle" data-slider-handle role="slider" tabindex="1"></span>
      <input type="hidden">
      <input type="hidden">
    </div>
  markdown:
---
{% include code.markdown %}
