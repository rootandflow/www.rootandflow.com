---
title: Magellan
description: Magellan allows you to create navigation that tracks the active section of a page your user is in. Pair it with our Sticky plugin to create a fixed navigation element.
code:
  javascript:
  html: |
    <ul class="horizontal menu" data-magellan>
      <li><a href="#first">First Arrival</a></li>
      <li><a href="#second">Second Arrival</a></li>
      <li><a href="#third">Third Arrival</a></li>
    </ul>
    <div class="sections">
      <section id="first" data-magellan-target="first">
        <h4>First section</h4>
        <p>Prime number, quasar tingling of the spine network of wormholes billions upon billions? Encyclopaedia galactica from which we spring, Sea of Tranquility, concept of the number one.</p>
      </section>
      <section id="second" data-magellan-target="second">
        <h4>Second section</h4>
        <p>A very small stage in a vast cosmic arena paroxysm of global death birth. Flatland tesseract the only home we've ever known?</p>
      </section>
      <section id="third" data-magellan-target="third">
        <h4>Second section</h4>
        <p>Emerged into consciousness galaxies trillion the only home we've ever known, brain is the seed of intelligence finite but unbounded billions upon billions, cosmic ocean, dispassionate extraterrestrial observer Orion's sword. Gathered by gravity.</p>
      </section>
    </div>
  markdown:
---
{% include code.markdown %}
