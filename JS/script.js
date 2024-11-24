themeButton = document.querySelector(".theme-setter");
body = document.querySelector("#body");
navHolder = document.querySelector("#navHolder");
navBar = document.querySelector("#navBar");
navBarTitles = document.getElementsByTagName("a");
headingOne = document.querySelector("#text")
themeButton.addEventListener("click",() => {
    if(navBarTitles[0].classList.contains("a-light")) {
        headingOne.classList.add("text-color-black");
        headingOne.classList.remove("text-color");
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
    } else {
        headingOne.classList.remove("text-color-black");
        headingOne.classList.add("text-color");
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
    }

})