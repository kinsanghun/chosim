const TITLE = "Front-end 처음으로 돌아가기";
const SUB_TITLE = "처음부터 차근차근 공부해 밑바탕을 탄탄히 합시다.";
const DESCRIPTION = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const app = document.getElementById("app");

// Header
const header = document.createElement("header");
const title = document.createElement("h2");
title.textContent = TITLE;

const nav = document.createElement("nav");
const ul = document.createElement("ul");

const menuList = ["main", "menu", "notification", "contact"];
menuList.map(menu => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = menu;
    a.href = "#";
    
    li.appendChild(a);
    ul.appendChild(li);
})

nav.appendChild(ul);

header.appendChild(title);
header.appendChild(ul);

// main

const main = document.createElement("main");

const article = document.createElement("article");

const subTitle = document.createElement("h3");
subTitle.textContent = SUB_TITLE;

const description = document.createElement("div");
description.textContent = DESCRIPTION;

const button = document.createElement("button");
button.textContent = "Learn More";

article.appendChild(subTitle);
article.appendChild(description);
article.appendChild(button);

const circle = document.createElement("div");
circle.classList.add("circle");

main.appendChild(article);
main.appendChild(circle);

// final
app.appendChild(header);
app.appendChild(main);