const menuButton = document.getElementById("menu-btn");
const hiddenMenu = document.getElementById("hidden-menu");
const miButton = document.getElementById("mi-btn");


menuButton.addEventListener("click", function() {
    // switch .menu-wrapper visibility
    if (hiddenMenu.style.visibility === "hidden" || hiddenMenu.style.visibility === "") {
        hiddenMenu.style.visibility = "visible";
        menuButton.textContent = 'Close'; 
    } else {
        hiddenMenu.style.visibility = "hidden";
        menuButton.textContent = 'Menu'; 
    }
});

miButton.addEventListener("click", function() {
    // switch .menu-wrapper visibility
    if (hiddenMenu.style.visibility === "visible" ) {
        hiddenMenu.style.visibility = "hidden";
        menuButton.textContent = 'Menu'; 
    }
});

