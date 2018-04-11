function showMenu() {
    var menu = document.getElementById("menu");

    if (menu.classList.contains("overlay--opened")) {
        menu.classList.remove("overlay--opened");
    }
    else {
        menu.classList.add("overlay--opened");
    }
}