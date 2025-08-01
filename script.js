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
        changePanelColorForButton();
    });
    const accordionToggle = document.getElementById("exp-accordion");
    accordionToggle.addEventListener("click", () => {});
})


// This function is used to toggle the accordion for work experience details
function toggleAccordion() {
    
}