---
title: Reveal
description: Modal dialogs, or pop-up windows, are handy for prototyping and production. Foundation includes Reveal, our jQuery modal plugin, to make this easy for you.
code:
  javascript:
  html: |
    <p><a data-open="exampleModal1">Click me for a modal</a></p>

    <div class="reveal" id="exampleModal1" data-reveal>
      <h1>Awesome. I Have It.</h1>
      <p class="lead">Your couch. It is mine.</p>
      <p>I'm a cool paragraph that lives inside of an even cooler modal. Wins!</p>
      <button class="close-button" data-close aria-label="Close reveal" type="button">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  markdown:
---
{% include code.markdown %}
