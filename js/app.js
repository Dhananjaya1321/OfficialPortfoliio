let typed = new Typed("#type-script", {
    strings: ["","Software Engineer", "Mobile Application Developer", "Web Developer", "UI/UX Designer"],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true
});

window.addEventListener('load', function () {
    let professionElement = document.getElementById("profession");
    professionElement.style.display = "none";
    let style = document.createElement("style");
    style.innerHTML = `body::-webkit-scrollbar {display: block;}`;
    document.head.appendChild(style);
});

document.addEventListener('DOMContentLoaded', function () {
    let style = document.createElement("style");
    style.innerHTML = `body::-webkit-scrollbar {display: none;}`;
    document.head.appendChild(style);
});
