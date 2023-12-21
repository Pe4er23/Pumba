function toggleDivVisibility(divId,divPole,button) {
    // Скрываем все div
    document.getElementById('for-log').style.display = 'none';
    document.getElementById('for-reg').style.display = 'none';
    document.getElementById('pole-for-login').style.display = 'none';
    document.getElementById('pole-for-registr').style.display = 'none';
    document.getElementById('login').style.color = '#A9A9A9';
    document.getElementById('registr').style.color = '#A9A9A9';
    document.getElementById('login').style.borderBottom = '#C6C6C6 2px solid';
    document.getElementById('registr').style.borderBottom = '#C6C6C6 2px solid';

    // Показываем нужный div
    document.getElementById(divId).style.display = 'flex';
    document.getElementById(divPole).style.display = 'flex';
    document.getElementById(button).style.color = 'black';
    document.getElementById(button).style.borderBottom = 'black 2px solid';
}

// Назначаем обработчики событий на элементы
document.getElementById('login').addEventListener('click', function() {
    toggleDivVisibility('for-log','pole-for-login','login');
});

document.getElementById('registr').addEventListener('click', function() {
    toggleDivVisibility('for-reg', 'pole-for-registr','registr');
});