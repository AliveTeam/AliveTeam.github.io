---
permalink: /blog
layout: default
---

<link rel="stylesheet" href="/css/blog_index.css">

<div id="title">
    <div>
        <h1>Devlog</h1>
        <p>Here you can find all the development-related blogposts the team wrote since the beginning.</p>
    </div>
</div>

<div markdown=1 id="blog_root">
{% for post in site.posts %}
* {: .popup} ### [{{post.title}}]({{post.url}})
    {{ post.content | truncatewords: 40 }} 
{% endfor %}
</div>