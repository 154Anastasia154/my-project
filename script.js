document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращает перезагрузку страницы

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    alert(`Спасибо, ${name}! Ваше сообщение было отправлено.`);

    // Здесь можно добавить код для отправки данных на сервер
    event.target.reset(); // Сброс формы
});