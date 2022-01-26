let fields = document.querySelectorAll(".field")
let moleIndex = 0;

setInterval("moveMole()", 2000)

function moveMole() {
    x = getRandomInt(8)

    if (moleIndex == x) {
        setMole(8)
    } else {
        setMole(x)
    }
}

function setMole(index) {
    fields[moleIndex].classList.remove('mole')

    if (index < fields.length && index >= 0) {
        moleIndex = index
        fields[index].classList.add('mole')
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}