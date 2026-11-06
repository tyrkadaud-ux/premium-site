document.addEventListener("DOMContentLoaded", () => {
    // Новости
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

    // Форма
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Сообщение отправлено! (Демо-режим)");
            form.reset();
        });
    }

    // Виджет чата
    const chat = document.getElementById("chatWidget");
    if (chat) {
        chat.addEventListener("click", () => alert("Чат поддержки: мы онлайн!"));
    }
});