cards = document.querySelectorAll(".card")
const myUrl = new URL(window.location.toLocaleString()).searchParams
console.log(myUrl)
const alignment = myUrl.get('alignment')
console.log(alignment)
const media = myUrl.getAll('media')
console.log(media)

if (alignment != "villain") {
    document.querySelector("#hlink").classList.add("current")
}
if (alignment != "hero") {
    document.querySelector("#vlink").classList.add("current")
}

for (var i = 0; i < cards.length; i++) {
    for (var j = 0; j < media.length; j++) {
        if (!cards[i].classList.contains(media[j])) {
            cards[i].style.display = "none"
            console.log(cards[i].id + " removed from results")
        }
    }

    if (alignment != null && !cards[i].classList.contains(alignment)) {
        cards[i].style.display = "none"
        console.log(cards[i].id + " removed from results")
    }
}