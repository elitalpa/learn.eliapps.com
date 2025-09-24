---
layout: base.njk
permalink: /
eleventyExcludeFromCollections: true
---

<script>
  // Redirect to user's preferred language or default to English
  const userLang = navigator.language.slice(0, 2);
  const supportedLangs = Object.keys({{ i18n.languages | dump | safe }});
  const redirectLang = supportedLangs.includes(userLang) ? userLang : '{{ i18n.defaultLang }}';
  window.location.href = `/${redirectLang}/`;
</script>

<noscript>
  <meta http-equiv="refresh" content="0; url=/{{ i18n.defaultLang }}/">
</noscript>

<p>Redirecting to your preferred language... 
{% for code, lang in i18n.languages %}
  <a href="/{{ code }}/">{{ lang.nativeName }}</a>{% if not loop.last %} | {% endif %}
{% endfor %}
</p>
