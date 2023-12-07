// import React from 'react';

    // Элемент который остаётся
    for (let i = 1; i <= 7; i++) {
        const element = document.getElementById(`nav_more${i}`);
        if (element) {
            element.addEventListener("mouseover", function () {
                showContent(`nav_more${i}`, `nav_item${i}`);
            });
        }
    }
    //________________________________________________________________________________
    // Элемент который скрывается
    for (let i = 1; i <= 7; i++) {
        const element = document.getElementById(`nav_more${i}`);
        if (element) {
            element.addEventListener("mouseout", function () {
                hideContent(`nav_more${i}`, `nav_item${i}`);
            });
        }
    }
    //________________________________________________________________________________
    // Элементы на которые наводимся
    for (let i = 1; i <= 7; i++) {
        const element = document.getElementById(`nav_item_div${i}`);
        if (element) {
            element.addEventListener("mouseover", function () {
                showContent(`nav_more${i}`, `nav_item${i}`);
            });
        }
    }
    //________________________________________________________________________________
    // Элементы от которых отводим курсор
    for (let i = 1; i <= 7; i++) {
        const element = document.getElementById(`nav_item_div${i}`);
        if (element) {
            element.addEventListener("mouseout", function () {
                hideContent(`nav_more${i}`, `nav_item${i}`);
            });
        }
    }
    //_____________________________________________________________________________________________
    document.getElementById('menu-icon').addEventListener('click', function (){
        showNavElements()
    })
    //_____________________________________________________________________________________________
    let allContent = document.querySelectorAll("div[id^='nav_more']");
    let allItems = document.querySelectorAll("span[class^='nav_item']");
    console.log(allItems)
    function showContent(contentId,itemId) {
        // Скрываем все div-ы содержимого
        for (let i = 0; i < allContent.length; i++) {
            allContent[i].style.display = "none";
            allItems[i].style.borderBottomColor = "rgba(0,0,0,0)";
            allItems[i].style.color = "#747474";
        }
        // Показываем div с соответствующим id
        document.getElementById(contentId).style.display = "flex";
        document.getElementById(itemId).style.borderBottomColor = "#AE946D";
        document.getElementById(itemId).style.color = "white";
    }
    function hideContent(contentId,itemId) {
        // setTimeout(() => {
            for (let i = 0; i < allContent.length; i++) {
                allContent[i].style.display = "none";
                allItems[i].style.borderBottomColor = "rgba(0,0,0,0)";
                allItems[i].style.color = "white";
            }
        // }, 250)


    }
    function showNavElements() {
        let nav = document.getElementById('menu-list');
        nav.style.display = (market.style.display === 'none') ? 'block' : 'none';
    }

    let nav = document.getElementById('menu-list');
    nav.addEventListener('click', function(event) {
        event.stopPropagation(); // Предотвращаем всплытие события
    });

    document.addEventListener('click', function(event) {
        let div = document.getElementById('menu-list');
        let showButton = document.getElementById('menu-icon');
        if (event.target !== div && event.target !== showButton   ) {
            nav.style.display = 'none';
        }
    });
    // Отображение рамки аккаунта
    document.getElementById('acc_btn').addEventListener('click', function() {
        let acc = document.getElementById('acc_div');
        acc.style.display = (acc.style.display === 'none') ? 'block' : 'none';
    });

    let div = document.getElementById('acc_div');

    div.addEventListener('click', function(event) {
        event.stopPropagation(); // Предотвращаем всплытие события
    });

    document.addEventListener('click', function(event) {
        let div = document.getElementById('acc_div');
        let showButton = document.getElementById('acc_btn');
        if (event.target !== div && event.target !== showButton) {
            div.style.display = 'none';
        }
    });
    //________________________________________________________________________
    // Отображение рамки покупки
    document.getElementById('market_btn').addEventListener('click', function() {
        let market = document.getElementById('market_div');
        market.style.display = (market.style.display === 'none') ? 'block' : 'none';
        if (market.style.display === 'none') {
            market.style.display = 'block'
            market.style.opacity = '1';
        }
    });

    let market = document.getElementById('market_div');

    market.addEventListener('click', function(event) {
        event.stopPropagation(); // Предотвращаем всплытие события
    });

    document.addEventListener('click', function(event) {
        let div = document.getElementById('market_div');
        let showButton = document.getElementById('market_btn');
        if (event.target !== div && event.target !== showButton   ) {
            market.style.display = 'none';
        }
    });

    function hideDivAccount() {
        let divToHide = document.getElementById('acc_div');
        divToHide.style.display = 'none';
    }
    function hideDivMarket() {
        let divToHide = document.getElementById('market_div');
        divToHide.style.display = 'none';
    }
    // document.addEventListener('DOMContentLoaded', function () {
    //     const menuIcon = document.getElementById('menu-icon');
    //     const navList = document.getElementById('nav');
    //
    //     menuIcon.addEventListener('click', function () {
    //         navList.classList.toggle('show');
    //     });
    // });