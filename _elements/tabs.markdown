---
title: Tabs
description: Tabs are elements that help you organize and navigate multiple documents in a single container. They can be used for switching between items in the container.
code:
  javascript:
  html: |
    <ul class="tabs" data-tabs id="example-tabs">
      <li class="tabs-title is-active"><a href="#panel1" aria-selected="true">Tab 1</a></li>
      <li class="tabs-title"><a href="#panel2">Tab 2</a></li>
      <li class="tabs-title"><a href="#panel3">Tab 3</a></li>
      <li class="tabs-title"><a href="#panel4">Tab 4</a></li>
      <li class="tabs-title"><a href="#panel5">Tab 5</a></li>
      <li class="tabs-title"><a href="#panel6">Tab 6</a></li>
    </ul>

    <div class="tabs-content" data-tabs-content="example-tabs">
      <div class="tabs-panel is-active" id="panel1">
        <p>one</p>
        <p>Check me out! I'm a super cool Tab panel with text content!</p>
      </div>
      <div class="tabs-panel" id="panel2">
        <p>two</p>
        <img class="thumbnail" src="assets/img/generic/rectangle-7.jpg">
      </div>
      <div class="tabs-panel" id="panel3">
        <p>three</p>
        <p>Check me out! I'm a super cool Tab panel with text content!</p>
      </div>
      <div class="tabs-panel" id="panel4">
        <p>four</p>
        <img class="thumbnail" src="assets/img/generic/rectangle-2.jpg">
      </div>
      <div class="tabs-panel" id="panel5">
        <p>five</p>
        <p>Check me out! I'm a super cool Tab panel with text content!</p>
      </div>
      <div class="tabs-panel" id="panel6">
        <p>six</p>
        <img class="thumbnail" src="assets/img/generic/rectangle-8.jpg">
      </div>
    </div>
  markdown:
---
{% include code.markdown %}
