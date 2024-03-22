
"use strict";

// Dark and Light Mode

const themeBtn = document.querySelector(".theme-btn");
const html = document.documentElement;


let isdark = html.dataset.theme;

if (sessionStorage.getItem("theme")) {
    html.dataset.theme = sessionStorage.getItem("theme");
} else {
    isdark = isdark === "dark" ? "dark" : "light";
    sessionStorage.setItem("theme", html.dataset.theme);
}

const changeTheme = () => {
    html.dataset.theme = sessionStorage.getItem("theme") === "dark" ? "light" : "dark";
    sessionStorage.setItem("theme", html.dataset.theme);
}

themeBtn.addEventListener('click', changeTheme);


const tabsBtn = document.querySelectorAll("[data-tab-btn]");
const tabContent = document.querySelectorAll("[data-tab-content]");


function getLen(tabsBtn) {
    let len = 0;

    for (let i = 0; i < tabsBtn.length; i++) {
        len++;
    }
   
    return len;
}

function changeTab(eventTab) {

    const currentTab = eventTab.currentTarget.dataset.tabBtn;
   
    let length = getLen(tabsBtn);

    for (let i = 0; i < length; i++) {
        if (tabsBtn[i].dataset.tabBtn === currentTab) {
           
            tabsBtn[i].classList.add("active");
            tabContent[i].classList.add("active");
        }
        else {
            tabsBtn[i].classList.remove("active");
            tabContent[i].classList.remove("active");
        }
    }
}

tabsBtn.forEach(element => {
    element.addEventListener('click', (eventTab) => {
        changeTab(eventTab);
    });
});