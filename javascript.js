// Date
document.getElementById("date").innerHTML = (new Date().getFullYear());

// Menu
const menuButton = document.getElementById("menu-button");
const closeButton = document.getElementById("close-button");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {menu.classList.add("show-menu");
});
closeButton.addEventListener("click", () => {menu.classList.remove("show-menu");
});
