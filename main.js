let navList = document.getElementById("list");
let menuIcon = document.getElementById("menu-btn");

menuIcon.addEventListener("click", ()=> {
    if (navList.className == "nav-list") {
        navList.className = "responsive";
    }
    else {
        navList.className = "nav-list";
    }});


let navBtn = document.getElementById("nav-btn");

navBtn.addEventListener("click", ()=> {document.getElementById('services').scrollIntoView();})