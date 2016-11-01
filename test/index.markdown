---
title: Test
---
<h2>Site Collections:</h2>
{% for collection in site.collections %}
<h3>Collection (Label): {{ collection.label }}</h3>
<p>Number of Static Files: {{ collection.files | size }}</p>
<p>Relative directory: {{ collection.relative_directory }}</p>
<p>Directory: {{ collection.directory }}</p>
<p>Output: {{ collection.output }}</p>
<h4>Docs:</h4>
{% for doc in collection.docs %}
<p>URL: {{ doc.url }}</p>
<p>Path: {{ doc.path }}</p>
<p>Relative Path: {{ doc.relative_path }}</p>
<p>Collection: {{ doc.collection }}</p>
<p>Date: {{ doc.date }}</p>
<p>Content:</p>
{{ doc.content }}
{% endfor %}
{% endfor %}

<h3>JSON Test</h3>

<script>

// ID of the Google Spreadsheet
var spreadsheetID = '16FuP13iOQWUAeZEQX4RTPTrnUhDG58gvY2kCo-RRye8';
var worksheet = 'od6';

// Make sure it is public or set to Anyone with link can view
var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/" + worksheet + "/public/values?alt=json";

$.getJSON(url, function(data) {

  var entry = data.feed.entry;

  //first row "title" column
  console.log(entry[0]['gsx$term']['$t']);
  console.log(entry[0]['gsx$loc']['$t']);
  console.log(entry[1]['gsx$term']['$t']);
  console.log(entry[1]['gsx$loc']['$t']);

  $(entry).each(function(){
    // Column names are name, age, etc.
    $('.fetched').prepend('<p><strong>'+this.gsx$term.$t+'</strong></p><p>'+this.gsx$loc.$t+'</p>');
  });

});

</script>

<div class="fetched"></div>

### Env Test
{: .text-right}

## Markdown Tests

Links  
Typed out absolute reference: [Google](http://www.google.com)  

<b>https://www.google.com</b>

<p>https://www.google.com</p>
http://www.google.com

  <p>https://www.google.com</p>
http://www.google.com

### Liquid Tests

```ruby
{% raw %}{{ content | replace: '<li>[ ]', '<li class = "box">' | replace: '<li>[x]', '<li class = "box_done">'  }}{% endraw %}
```

#### Site variables

site.time:  
{{ site.time }}

page.url:  
{{ page.url }}

site.url:  
{{ site.url }}

site.github.url:  
{{ site.github.url }}

#### site.pages "for" loops

Original for loop using:

1. FOR my_page in site.pages
    1. IF my_page.title
        1. Link
    1. ENDIF
1. ENDFOR

{% for my_page in site.pages %}
  {% if my_page.title %}
  <a href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title }}</a>
  {% endif %}
{% endfor %}

First iteration using:

1. FOR my_page in site.pages
    1. IF my_page.top_nav
        1. Link
    1. ENDIF
1. ENDFOR

{% for my_page in site.pages %}
  {% if my_page.top_nav %}
  <a href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title }}</a>
  , {{ my_page.url }}
  {% endif %}
{% endfor %}

Second iteration using:

1. FOR my_page in site.pages
    1. IF my_page.top_nav != "dev"
        1. Link
    1. ENDIF
1. ENDFOR

{% for my_page in site.pages %}
  {% if my_page.top_nav != "dev" %}
  <a href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title }}</a>
  , {{ my_page.url }}
  {% endif %}
{% endfor %}

Third iteration using:

1. FOR my_page in site.pages
    1. IF page.top_nav
        1. IF my_page.url != page.url
            1. Link
        1. ENDIF
    1. ENDIF
1. ENDFOR

{% for my_page in site.pages %}
  {% if my_page.top_nav %}
    {% if my_page.url != page.url %}
<a href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title }}</a>, {{ my_page.url }}
    {% endif %}
  {% endif %}
{% endfor %}

Fourth iteration using:

1. FOR my_page in site.pages
    1. IF my_page.top_nav
        1. IF site.url == site.github.url
            1. IF my_page.top_nav != dev
                1. Link
            1. ENDIF
        1. ELSE site.url != site.github.url
            1. Link
        1. ENDIF
    1. ENDIF
1. ENDFOR

{% for my_page in site.pages %}
  {% if my_page.top_nav %}
    {% if site.url == site.github.url %}
      {% if my_page.top_nav != 'dev' %}
<a href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title }}</a>, {{ my_page.url }}
      {% endif %}
    {% else %}
<a href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title }}</a>, {{ my_page.url }}
    {% endif %}
  {% endif %}
{% endfor %}

Fifth iteration using:

1. FOR my_page in site.pages
    1. IF my_page.top_nav AND my_page.url != page.url
        1. IF site.url == site.github.url
            1. IF my_page.top_nav != dev
                1. Link
            1. ENDIF
        1. ELSE site.url != site.github.url
            1. Link
        1. ENDIF
    1. ENDIF
1. ENDFOR

{% for my_page in site.pages %}
  {% if my_page.top_nav and my_page.url != page.url %}
    {% if site.url == site.github.url %}
      {% if my_page.top_nav != 'dev' %}
<a href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title }}</a>, {{ my_page.url }}
      {% endif %}
    {% else %}
<a href="{{ my_page.url | prepend: site.baseurl }}">{{ my_page.title }}</a>, {{ my_page.url }}
    {% endif %}
  {% endif %}
{% endfor %}

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

