---
title: Progress Bar
description: Show your progress. A simple way to add progress bars to your layouts. You only need two HTML elements to make them and they're easy to customize.
code:
  javascript:
  html: |
    <div class="success progress" role="progressbar" tabindex="0" aria-valuenow="25" aria-valuemin="0" aria-valuetext="25 percent" aria-valuemax="100">
      <div class="progress-meter" style="width: 25%">
        <p class="progress-meter-text">25%</p>
      </div>
    </div>

    <div class="warning progress">
      <div class="progress-meter" style="width: 50%">
        <p class="progress-meter-text">50%</p>
      </div>
    </div>

    <div class="alert progress">
      <div class="progress-meter" style="width: 75%">
        <p class="progress-meter-text">75%</p>
      </div>
    </div>
  markdown:
---
{% include code.markdown %}
