themeButton = document.querySelector(".theme-setter");
body = document.querySelector("#body");
navHolder = document.querySelector("#navHolder");
navBar = document.querySelector("#navBar");
navBarTitles = document.getElementsByTagName("a");
themeIcons = document.getElementsByTagName("i");
headingOne = document.querySelectorAll("#text");
themeButton.addEventListener("click",() => {
    if(navBarTitles[0].classList.contains("a-light")) {
        body.classList.add("body-black");
        body.classList.remove("body");
        navBar.classList.add("nav-bar-black");
        navBar.classList.remove("nav-bar");
        navHolder.classList.add("nav-holder-black");
        navHolder.classList.remove("nav-holder");
        for (let i = 0; i < navBarTitles.length; i++) {
            navBarTitles[i].classList.add("a-dark");
            navBarTitles[i].classList.remove("a-light")
        }
        for(let i = 0; i <headingOne.length; i++) {
            headingOne[i].classList.add("text-color-black");
            headingOne[i].classList.remove("text-color");
        }
        themeIcons[0].classList.add("hide");
        themeIcons[1].classList.remove("hide");
        themeButton.classList.add("theme-setter-black");
    } else {        
        for(let i = 0; i <headingOne.length; i++) {
            headingOne[i].classList.remove("text-color-black");
            headingOne[i].classList.add("text-color");
        }
        body.classList.remove("body-black");
        body.classList.add("body");
        navBar.classList.remove("nav-bar-black");
        navBar.classList.add("nav-bar");
        navHolder.classList.add("nav-holder");
        navHolder.classList.remove("nav-holder-black");
        for (let i = 0; i < navBarTitles.length; i++) {
            navBarTitles[i].classList.remove("a-dark");
            navBarTitles[i].classList.add("a-light")
        }
        themeIcons[0].classList.remove("hide");
        themeIcons[1].classList.add("hide");
        themeButton.classList.remove("theme-setter-black");
    }

})