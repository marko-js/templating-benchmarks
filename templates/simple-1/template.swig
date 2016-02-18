<div class="colors">
    Hello {{ name }}!

    {% if colors && colors.length %}
    <ul>
        {% for color in colors %}
        <li class="color">{{ color }}</li>
        {% endfor %}
    </ul>
    {% else %}
    <div>
        No colors!
    </div>
    {% endif %}
</div>