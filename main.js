let fields = document.querySelectorAll(".field")
let moleIndex = 0;

//setInterval("tick()", 500)

function tick() {
    x = getRandomInt(4)
    
    if (x == 0) {
        // Maulwurf entfernen
        setMole(-1)
    } else if (x == 1) {
        // Maulwurf bewegen
        moveMole()
    } else {
        // Nichts tun
    }
}

function moveMole() {
    // Bewegt den Maulwurf zu einer zufaelligen (neuen) Position
    x = getRandomInt(8)

    if (moleIndex == x) {
        setMole(8)
    } else {
        setMole(x)
    }
}

function setMole(index) {
    // Bewegt den Maulwurf zu der im Parameter gegebenen Position
    // Wenn der Inex außerhalb des Definitinsbereiches liegt wird der Maulwurf nur entfernt
    fields[moleIndex].classList.remove('mole')

    if (index < fields.length && index >= 0) {
        moleIndex = index
        fields[index].classList.add('mole')
    }
}

function getRandomInt(max) {
    // Gibt eine Zufallszahl von 0 bis zum Parameter
    return Math.floor(Math.random() * max);
}