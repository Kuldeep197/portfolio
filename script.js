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

// This function is used to toggle the accordion for work experience details
function toggleAccordion(event) {
    const arrow = event.currentTarget;
    console.log("toggling accordion");
    const container = arrow.closest('.comp-container');
    const accordionContent = container.querySelector('.accordion-content');
    console.log('content div :', accordionContent);
    console.log('arrow :', arrow);
    console.log("showing accordion");
    accordionContent.classList.toggle("show");
    arrow.classList.toggle("rotated");
}

document.addEventListener("DOMContentLoaded", function(){
    console.log("DOM fully loaded and parsed");
    const toggle = document.getElementById("bg-change");
    toggle.addEventListener("click", () => {
        changeColor();
        changePanelColorForButton();
    });
    const accordionToggles = document.querySelectorAll(".experience-accordion");
    accordionToggles.forEach(accordion => {
        accordion.addEventListener("click", toggleAccordion);
    });
})


