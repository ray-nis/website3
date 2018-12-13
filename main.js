let navList = document.getElementById("list");
let menuIcon = document.getElementById("menu-btn");

menuIcon.addEventListener("click", ()=> {
    if (navList.className == "nav-list") {
        navList.className = "responsive";
    }
    else {
        navList.className = "nav-list";
    }});


///

let navBtn = document.getElementById("nav-btn");

navBtn.addEventListener("click", ()=> {document.getElementById('services').scrollIntoView();})


///

let navHeader = document.getElementById("top-bar");

function runOnScroll() {
    let windowY = Math.ceil(window.scrollY);
    console.log(windowY);
    if (windowY < 350) {
      navHeader.style.height = "10vh";
      document.getElementById("services-link").classList.remove("active-state");
      document.getElementById("portfolio-link").classList.remove("active-state");
      document.getElementById("about-link").classList.remove("active-state");
      document.getElementById("team-link").classList.remove("active-state");
      document.getElementById("contact-link").classList.remove("active-state");
      }
    else if (windowY > 350 && windowY < 800) {
        navHeader.style.height = "7vh";
        document.getElementById("services-link").classList.add("active-state");
        document.getElementById("portfolio-link").classList.remove("active-state");
        document.getElementById("about-link").classList.remove("active-state");
        document.getElementById("team-link").classList.remove("active-state");
        document.getElementById("contact-link").classList.remove("active-state");
    }
    else if (windowY > 800 && windowY < 1300){
        navHeader.style.height = "7vh";
        document.getElementById("portfolio-link").classList.add("active-state");
        document.getElementById("services-link").classList.remove("active-state");
        document.getElementById("about-link").classList.remove("active-state");
        document.getElementById("team-link").classList.remove("active-state");
        document.getElementById("contact-link").classList.remove("active-state");
    }
    else if (windowY > 1300 && windowY < 2200) {
        navHeader.style.height = "7vh";
        document.getElementById("services-link").classList.remove("active-state");
        document.getElementById("portfolio-link").classList.remove("active-state");
        document.getElementById("team-link").classList.remove("active-state");
        document.getElementById("about-link").classList.add("active-state");
        document.getElementById("contact-link").classList.remove("active-state");
    }

    else if (windowY > 2200 && windowY < 2650) {
        navHeader.style.height = "7vh";
        document.getElementById("services-link").classList.remove("active-state");
        document.getElementById("portfolio-link").classList.remove("active-state");
        document.getElementById("about-link").classList.remove("active-state");
        document.getElementById("team-link").classList.add("active-state");
        document.getElementById("contact-link").classList.remove("active-state");
    }

    else if (windowY > 2650) {
        navHeader.style.height = "7vh";
        document.getElementById("services-link").classList.remove("active-state");
        document.getElementById("portfolio-link").classList.remove("active-state");
        document.getElementById("about-link").classList.remove("active-state");
        document.getElementById("team-link").classList.remove("active-state");
        document.getElementById("contact-link").classList.add("active-state");
    }
}; 

 window.addEventListener("scroll", runOnScroll);