let fields = document.querySelectorAll(".field")
let moleIndex = 0
let points = 0
let counter = 50

setInterval("tick()", 300)

document.onclick = function(event) {
    // Index des angeklickten Feldes finden
    i = 0;
    while (i < fields.length && fields[i] != event.target) {
        i++
    }

    // Falls Maulwurf da, entfernen und Punkt hinzufuegen
    if (i < fields.length && i == moleIndex) {
        setMole(-1)
        points += 1
        document.getElementById("points").innerHTML = points
    }

    if (event.target == ocument.querySelectorAll(".start")) {
        alert("click")
    }
};

function tick() {
    if (counter < 50) {
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

        counter += 1;
        document.getElementById("sec").innerHTML = 15.0 - (counter * 0.3)
    } else {
        setMole(-1)
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
    if (moleIndex != -1) fields[moleIndex].classList.remove('mole')

    if (index < fields.length && index >= 0) {
        moleIndex = index
        fields[index].classList.add('mole')
    } else {
        moleIndex = -1
    }
}

function getRandomInt(max) {
    // Gibt eine Zufallszahl von 0 bis zum Parameter
    return Math.floor(Math.random() * max);
}