{% assign swap = "Flex Grid|Grid" | split: "|" %}
{% for lang in page.code %}
{% if lang[1] %}

_Raw {{ lang[0] | capitalize }}:_  

```{{ lang[0] }}
{{ lang[1] }}
```

_Rendered Web Content:_  
{% if lang[0] == 'html' %}{% if swap contains page.title %}{{ lang[1] | replace: "row","row display" }}{% else %}{{ lang[1] }}{% endif %}{% endif %}
{% endif %}
{% endfor %}
