function btn() {
    const rodzaj = document.querySelector("#rodzaj")
    const ile = document.querySelector("#ile")
    let koszt

    switch (rodzaj) {
        case(1): {
            koszt = ile * 4
        }
        case(2): {
            koszt = ile * 3.5
        }
        default: {
            koszt = 0
        }
    }
}