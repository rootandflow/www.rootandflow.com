---
layout: page
title: Test
---

### Env Test
{: .text-right}

### Foundation JS

<ul class="accordion" data-accordion role="tablist">
  <li class="accordion-item is-active">
    <!-- The tab title needs role="tab", an href, a unique ID, and aria-controls. -->
    <a href="#panel1d" role="tab" class="accordion-title" id="panel1d-heading" aria-controls="panel1d">Accordion 1</a>
    <!-- The content pane needs an ID that matches the above href, role="tabpanel", data-tab-content, and aria-labelledby. -->
    <div id="panel1d" class="accordion-content" role="tabpanel" data-tab-content aria-labelledby="panel1d-heading">
      Panel 1. Lorem ipsum dolor
    </div>
  </li>
  <li class="accordion-item">
    <!-- The tab title needs role="tab", an href, a unique ID, and aria-controls. -->
    <a href="#panel1d" role="tab" class="accordion-title" id="panel1d-heading" aria-controls="panel1d">Accordion 1</a>
    <!-- The content pane needs an ID that matches the above href, role="tabpanel", data-tab-content, and aria-labelledby. -->
    <div id="panel1d" class="accordion-content" role="tabpanel" data-tab-content aria-labelledby="panel1d-heading">
      Panel 2. Lorem ipsum dolor
    </div>
  </li>
  <li class="accordion-item">
    <!-- The tab title needs role="tab", an href, a unique ID, and aria-controls. -->
    <a href="#panel1d" role="tab" class="accordion-title" id="panel1d-heading" aria-controls="panel1d">Accordion 1</a>
    <!-- The content pane needs an ID that matches the above href, role="tabpanel", data-tab-content, and aria-labelledby. -->
    <div id="panel1d" class="accordion-content" role="tabpanel" data-tab-content aria-labelledby="panel1d-heading">
      Panel 3. Lorem ipsum dolor
    </div>
  </li>
</ul>

#### Site Config variables

+ site.env - upcase: {{ site.env | upcase }}
+ site.title - downcase: {{ site.title | downcase }}
+ jekyll.environment value is: **{{ jekyll.environment }}**
+ jekyll.environment equals "development": {% if jekyll.environment == 'development' %}True{% else %}False{% endif %}
+ jekyll.environment equals "production": {% if jekyll.environment == 'production' %}True{% else %}False{% endif %}
+ jekyll.environment - remove 'ment': {{ jekyll.environment | remove: 'ment' }}
+ jekyll.environment - truncated 3: {{ jekyll.environment | truncate: 3, '' }}
+ site.url value is: {{ site.url }}
+ site.baseurl value is: {{ site.baseurl }}
+ site.github.url is: {{ site.github.url }}
+ site.url is equal to site.github.url: {% if site.url == site.github.url %}True{% else %}False{% endif %}
+ site.baseurl is NIL: {% if site.baseurl == NIL %}True{% else %}False{% endif %}
+ site.title value is: {{ site.title }}
+ site.title value - downcase - is: {{ site.title | downcase }}
+ site.title - downcase - is equal to Repo name: {% if site.title | downcase == site.github.repository_name %}True{% else %}False{% endif %}

#### Data variables

#### Holder.js image placeholders

<img data-src="holder.js/300x200?outline=yes&theme=lava">

##### Site.Github.Versions

+ site.github.versions: {{ site.github.versions }}
+ site.github.versions.jekyll: {{ site.github.versions.jekyll }}
+ site.github.versions.kramdown: {{ site.github.versions.kramdown }}
+ site.github.versions.liquid: {{ site.github.versions.liquid }}
+ site.github.versions.maruku: {{ site.github.versions.maruku }}
+ site.github.versions.rdiscount: {{ site.github.versions.rdiscount }}
+ site.github.versions.redcarpet: {{ site.github.versions.redcarpet }}
+ site.github.versions.RedCloth: {{ site.github.versions.RedCloth }}
+ site.github.versions.jemoji: {{ site.github.versions.jemoji }}
+ site.github.versions.jekyll-mentions: {{ site.github.versions.jekyll-mentions }}
+ site.github.versions.jekyll-redirect-from: {{ site.github.versions.jekyll-redirect-from }}
+ site.github.versions.jekyll-sitemap: {{ site.github.versions.jekyll-sitemap }}
+ site.github.versions.github-pages: {{ site.github.versions.github-pages }}
+ site.github.versions.ruby: {{ site.github.versions.ruby }}

#### Site.Github variables

+ site.github.hostname: {{ site.github.hostname }}
+ site.github.pages_hostname: {{ site.github.pages_hostname }}
+ site.github.api_url: {{ site.github.api_url }}
+ site.github.environment: {{ site.github.environment }}
+ site.github.organization_members: {{ site.github.organization_members }}
+ site.github.build_revision: {{ site.github.build_revision }}
+ site.github.project_title: {{ site.github.project_title }}
+ site.github.project_tagline: {{ site.github.project_tagline }}
+ site.github.owner_name: {{ site.github.owner_name }}
+ site.github.owner_url: {{ site.github.owner_url }}
+ site.github.owner_gravatar_url: {{ site.github.owner_gravatar_url }}
+ site.github.repository_url: {{ site.github.repository_url }}
+ site.github.repository_nwo: {{ site.github.repository_nwo }}
+ site.github.repository_name: {{ site.github.repository_name }}
+ site.github.zip_url: {{ site.github.zip_url }}
+ site.github.tar_url: {{ site.github.tar_url }}
+ site.github.clone_url: {{ site.github.clone_url }}
+ site.github.releases_url: {{ site.github.releases_url }}
+ site.github.issues_url: {{ site.github.issues_url }}
+ site.github.wiki_url: {{ site.github.wiki_url }}
+ site.github.language: {{ site.github.language }}
+ site.github.is_user_page: {{ site.github.is_user_page }}
+ site.github.is_project_page: {{ site.github.is_project_page }}
+ site.github.show_downloads: {{ site.github.show_downloads }}
+ site.github.url: {{ site.github.url }}
+ site.github.contributors: {{ site.github.contributors }}
+ site.github.releases: {{ site.github.releases }}
+ site.github.public_repositories: {{ site.github.public_repositories }}

