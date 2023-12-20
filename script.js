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
        nav.style.display = (nav.style.display === 'none') ? 'block' : 'none';
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
    let notificationBox = document.getElementById("acc_div");
    // Функции для отображения и скрытия блока
    function toggleNotification() {
        if (notificationBox.style.opacity === "0" || notificationBox.style.opacity === "") {
            showNotification();
        } else {
            hideNotification();
        }
    }
    function showNotification() {
        notificationBox.style.display = "block";
        setTimeout(function() {
            notificationBox.style.opacity = "1";
            notificationBox.style.transform = "translateY(0)";
        }, 0);
    }
    function hideNotification() {
        notificationBox.style.opacity = "0";
        notificationBox.style.transform = "translateY(-20px)";
        setTimeout(function() {
            notificationBox.style.display = "none";
        }, 500);
    }
    document.addEventListener('click', function(event) {
        let showButton = document.getElementById('acc_btn');
        if (event.target !== notificationBox && event.target !== showButton) {
            hideNotification();
        }
    });


    let market = document.getElementById("market_div");
    function toggleMarket() {
        if (market.style.opacity === "0" || market.style.opacity === "") {
            showMarket();
        } else {
            hideMarket();
        }
    }
    function showMarket() {
        market.style.display = "block";
        setTimeout(function() {
            // market.style.opacity = "1";
            market.style.transform = "translateX(0)";
        }, 0);
    }
    function hideMarket() {
        // market.style.opacity = "0";
        market.style.transform = "translateX(100%)";
        setTimeout(function() {
            market.style.display = "none";
        }, 500);
    }
    document.addEventListener('click', function(event) {
        let showButton = document.getElementById('market_btn');
        if (event.target !== market && event.target !== showButton) {
            hideMarket();
        }
    })
    //________________________________________________________________________

    function hideDivAccount() {
        let divToHide = document.getElementById('acc_div');
        divToHide.style.display = 'none';
    }
    function hideDivMarket() {
        let divToHide = document.getElementById('market_div');
        divToHide.style.display = 'none';
    }