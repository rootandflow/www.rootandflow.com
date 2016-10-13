---
title: Dropdown Menu
description: Change a basic Menu into an expandable dropdown menu with the Dropdown Menu plugin.
code:
  javascript:
  html: |
    <ul class="dropdown menu" data-dropdown-menu>
      <li>
        <a>Item 1</a>
        <ul class="menu">
          <li><a href="#">Item 1A Loooong</a></li>
          <li>
            <a href='#'> Item 1 sub</a>
            <ul class='menu'>
              <li><a href='#'>Item 1 subA</a></li>
              <li><a href='#'>Item 1 subB</a></li>
              <li>
                <a href='#'> Item 1 sub</a>
                <ul class='menu'>
                  <li><a href='#'>Item 1 subA</a></li>
                  <li><a href='#'>Item 1 subB</a></li>
                </ul>
              </li>
              <li>
                <a href='#'> Item 1 sub</a>
                <ul class='menu'>
                  <li><a href='#'>Item 1 subA</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="#">Item 1B</a></li>
        </ul>
      </li>
      <li>
        <a href="#">Item 2</a>
        <ul class="menu">
          <li><a href="#">Item 2A</a></li>
          <li><a href="#">Item 2B</a></li>
        </ul>
      </li>
      <li><a href="#">Item 3</a></li>
      <li><a href='#'>Item 4</a></li>
    </ul>
  markdown:
---
{% include code.markdown %}
