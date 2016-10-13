---
title: Off-canvas
description: Off-canvas menus are positioned outside of the viewport and slide in when activated. Setting up an off-canvas layout in Foundation is super easy.
code:
  javascript:
  html: |
    <body>
      <div class="off-canvas-wrapper">
        <div class="off-canvas-wrapper-inner" data-off-canvas-wrapper>
          <div class="off-canvas position-left" id="offCanvasLeft" data-off-canvas>
            <!-- left off-canvas markup -->
          </div>
          <div class="off-canvas position-right" id="offCanvasRight" data-off-canvas data-position="right">
            <!-- right off-canvas markup -->
          </div>
          <div class="off-canvas-content" data-off-canvas-content>
            <!-- page content -->
          </div>
        </div>
      </div>
    </body>
    <button type="button" class="button" data-toggle="offCanvasLeft">Open Menu</button>
  markdown:
---

```html
<body>
  <div class="off-canvas-wrapper">
    <div class="off-canvas-wrapper-inner" data-off-canvas-wrapper>
      <div class="off-canvas position-left" id="offCanvasLeft" data-off-canvas>
        <!-- left off-canvas markup -->
      </div>
      <div class="off-canvas position-right" id="offCanvasRight" data-off-canvas data-position="right">
        <!-- right off-canvas markup -->
      </div>
      <div class="off-canvas-content" data-off-canvas-content>
        <!-- page content -->
      </div>
    </div>
  </div>
</body>
<button type="button" class="button" data-toggle="offCanvasLeft">Open Menu</button>
```

<button type="button" class="button" data-toggle="offCanvasLeft">Open Menu</button>
