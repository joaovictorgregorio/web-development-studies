var randomNumber1 = Math.floor(Math.random() * 7);

switch (randomNumber1) {
    case 1:
        document.querySelector(".img1").setAttribute("src", "./images/dice1.png")
        break
    case 2:
        document.querySelector(".img1").setAttribute("src", "./images/dice2.png")
        break
    case 3:
        document.querySelector(".img1").setAttribute("src", "./images/dice3.png")
        break
    case 4:
        document.querySelector(".img1").setAttribute("src", "./images/dice4.png")
        break
    case 5:
        document.querySelector(".img1").setAttribute("src", "./images/dice5.png")
        break
    case 6:
        document.querySelector(".img1").setAttribute("src", "./images/dice6.png")
        break
}

var randomNumber2 = Math.floor(Math.random() * 7);

switch (randomNumber2) {
    case 1:
        document.querySelector(".img2").setAttribute("src", "./images/dice1.png")
        break
    case 2:
        document.querySelector(".img2").setAttribute("src", "./images/dice2.png")
        break
    case 3:
        document.querySelector(".img2").setAttribute("src", "./images/dice3.png")
        break
    case 4:
        document.querySelector(".img2").setAttribute("src", "./images/dice4.png")
        break
    case 5:
        document.querySelector(".img2").setAttribute("src", "./images/dice5.png")
        break
    case 6:
        document.querySelector(".img2").setAttribute("src", "./images/dice6.png")
        break
}

if ( randomNumber1 === randomNumber2 ) {
    document.querySelector("h1").textContent = "Draw!"
} 
else {
    if ( randomNumber1 > randomNumber2 ) {
        document.querySelector("h1").innerHTML = "&#x1F973 Player 1 Wins!"
    }
    else if ( randomNumber2 > randomNumber1 ) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! &#x1F973"
    }
}





