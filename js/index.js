document.querySelector("#menu").addEventListener("click", function() {
    console.log("menu")
    links = document.querySelector("nav>ul")
    main = document.getElementById("main")
    if (links.style.display == "grid") {
        links.style.display = "none"
        main.style.marginTop = "initial"
        main.style.marginRight = "initial"
    } else {
        links.style.display = "grid"
        if (window.matchMedia("(min-width: 1000px)").matches) {
            main.style.marginTop = "2.2em"
        }
        else {
            main.style.marginRight = "8em"
        }
    }
})

filters = document.querySelector("form")

document.querySelector("#filter").addEventListener("click", function() {
    console.log("filter")
    if (filters.style.display == "block") {
        console.log("hide")
        filters.style.display = "none"
    } else {
        console.log("show")
        filters.style.display = "block"
    }
})

navLinks = document.querySelectorAll("nav a")

for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].setAttribute('tabindex', 0)
    navLinks[i].addEventListener("mouseover", function(){
        console.log("link")
        this.innerHTML = "&#11031" + this.innerHTML.slice(1)
    })
    navLinks[i].addEventListener("mouseout", function(){
        this.innerHTML = "&#10240" + this.innerHTML.slice(1)
    })
    navLinks[i].addEventListener("focus", function(){
        console.log("link")
        this.innerHTML = "&#11031" + this.innerHTML.slice(1)
    })
    navLinks[i].addEventListener("blur", function(){
        this.innerHTML = "&#10240" + this.innerHTML.slice(1)
    })
}

cards = document.querySelectorAll("div.card")

for (var i = 0; i < cards.length; i++) {
    cards[i].setAttribute('tabindex', 0)
}
