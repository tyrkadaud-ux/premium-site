document.addEventListener("DOMContentLoaded", () => {
    fetch('news.json?t=' + new Date().getTime())
        .then(res => res.json())
        .then(data => {
            const newsCont = document.getElementById("news-container");
            if (newsCont) {
                newsCont.innerHTML = "";
                data.forEach(n => {
                    newsCont.innerHTML += `<div class="news-item"><span>${n.date}</span><h4>${n.title}</h4><p>${n.text}</p></div>`;
                });
            }
        });
});