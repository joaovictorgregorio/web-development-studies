$( ".button-play" ).click(function() {

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber1) {
        case 1:
            $(".img1").attr("src", "images/dice1.png");
            break
        case 2:
            $(".img1").attr("src", "images/dice2.png");
            break
        case 3:
            $(".img1").attr("src", "images/dice3.png");
            break
        case 4:
            $(".img1").attr("src", "images/dice4.png");
            break
        case 5:
            $(".img1").attr("src", "images/dice5.png");
            break
        case 6:
            $(".img1").attr("src", "images/dice6.png");
            break
    }

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber2) {
        case 1:
            $(".img2").attr("src", "./images/dice1.png");
            break
        case 2:
            $(".img2").attr("src", "./images/dice2.png");
            break
        case 3:
            $(".img2").attr("src", "./images/dice3.png");
            break
        case 4:
            $(".img2").attr("src", "./images/dice4.png");
            break
        case 5:
            $(".img2").attr("src", "./images/dice5.png");
            break
        case 6:
            $(".img2").attr("src", "./images/dice6.png");
            break
    };

    if (randomNumber1 === randomNumber2) {
        $("h1").text("Draw!")
    }
    else {
        if (randomNumber1 > randomNumber2) {
            $("h1").html("&#x1F973 Player 1 Wins!");
        }
        else if (randomNumber2 > randomNumber1) {
            $("h1").html("Player 2 Wins! &#x1F973");
        }
    }
});





