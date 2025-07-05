let currentTheme = "light";

function changeColor () {
    const body = document.body;

    if(currentTheme == "light"){
        body.classList.remove("light");
        body.classList.add("dark");
        currentTheme="dark";
    } else {
        body.classList.remove("dark");
        body.classList.add("light");
        currentTheme="light"; 
    }
}

function changeImageForButton(){
    const buttonImage = document.getElementById("button-image");
    if(currentTheme == "dark"){
        buttonImage.src = "images/light-bulb.png"
    } else {
        buttonImage.src = "images/bulb-off.png"
    }
}

function changePanelColorForButton(){
    const navPanel = document.getElementById("navigation_panel");
    if(currentTheme == "dark"){
        navPanel.classList.remove("lightPanel");
        navPanel.classList.add("darkPanel");
    } else {
        navPanel.classList.remove("darkPanel");
        navPanel.classList.add("lightPanel");
    }
}

document.addEventListener("DOMContentLoaded", function(){
    const toggle = document.getElementById("bg-change");
    toggle.addEventListener("click", () => {
        changeColor();
        changeImageForButton();
        changePanelColorForButton();
    });

})