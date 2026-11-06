document.addEventListener("DOMContentLoaded", () => {
    const newsData = [
        { date: "Ноябрь 2026", title: "Аудит безопасности TON", text: "Успешно завершен аудит пула ликвидности." },
        { date: "Октябрь 2026", title: "Новый кастодиальный сервис", text: "Запуск архитектуры с разделением ключей." }
    ];
    const newsCont = document.getElementById("news-container");
    if (newsCont) {
        newsData.forEach(n => {
            newsCont.innerHTML += `<div class="news-item"><span>${n.date}</span><h4>${n.title}</h4><p>${n.text}</p></div>`;
        });
    }
});