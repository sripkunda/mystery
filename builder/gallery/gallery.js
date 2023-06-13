document.addEventListener("DOMContentLoaded", (e) => {
    fetch("https://cdn.jsdelivr.net/gh/sripkunda/mystery/builder/gallery/gallery.html").then(async res => {
        const template = await res.text();
        const rendered = Mustache.render(template, options);
        document.documentElement.innerHTML = rendered;
        document.body.style.opacity = 0;
        document.body.className = "loaded";
    });  
});