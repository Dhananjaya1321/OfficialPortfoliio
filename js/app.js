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


/*================================ my works ======================================*/
$("#show-all-btn").click(function () {
    $("#show-all").css("display","flex");
    $("#show-less-btn").css("display","block");
    $("#show-all-btn").css("display","none");
});

$("#show-less-btn").click(function () {
    $("#show-all").css("display","none");
    $("#show-less-btn").css("display","none");
    $("#show-all-btn").css("display","block");
});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("#header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});













