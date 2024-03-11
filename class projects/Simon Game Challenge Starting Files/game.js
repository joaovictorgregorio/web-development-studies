var buttonColours = [ "red", "blue", "green", "yellow" ];

var gamePattern = [];

var userClickedPattern = [];

var gameStarted = false;

var level = 0;

function nextSequence() {
    var randomNumber = Math.round( Math.random() * 3 );

    var randomChosenColour = buttonColours[ randomNumber ];

    gamePattern.push( randomChosenColour );

    var selectedButton = $( "#" + randomChosenColour );

    selectedButton.fadeOut(150).fadeIn(150);

    switch ( randomChosenColour ) {
        case "red":
            var soundRed = new Audio("./sounds/red.mp3");
            soundRed.play();
            break;

        case "blue":
            var soundBlue = new Audio("./sounds/blue.mp3");
            soundBlue.play();
            break;

        case "green":
            var soundGreen = new Audio("./sounds/green.mp3");
            soundGreen.play();
            break;

        case "yellow":
            var soundYellow = new Audio("./sounds/yellow.mp3");
            soundYellow.play();
            break;

        default: alert("Recarregue a página!")
    }

    level++;
    updateLevelTitle();
} 

function playSound( name ) {

    switch ( name ) {
        case "red":
            var soundRed = new Audio("./sounds/red.mp3");
            soundRed.play();
            break;

        case "blue":
            var soundBlue = new Audio("./sounds/blue.mp3");
            soundBlue.play();
            break;

        case "green":
            var soundGreen = new Audio("./sounds/green.mp3");
            soundGreen.play();
            break;

        case "yellow":
            var soundYellow = new Audio("./sounds/yellow.mp3");
            soundYellow.play();
            break;

        default: alert("Recarregue a página!")
    }
    
}

function animatePress( currentColour ) {
    $( "#" + currentColour ).addClass( "pressed" );

    setTimeout( function() {
        $( "#" + currentColour ).removeClass( "pressed" );
    }, 100 );
}

function manipulating() {
    var userChosenColour = $( this ).attr( "id" );

    userClickedPattern.push( userChosenColour );
    
    playSound( userChosenColour );

    animatePress( userChosenColour );
}

function handleKeydown( event ) {
    if ( !gameStarted ) {
        gameStarted = true;
        nextSequence();
        updateLevelTitle();
    }
}

function updateLevelTitle() {
    $( "#level-title" ).text( "Nível " + level );
}

$( document ).keydown( handleKeydown );
$( ".btn" ).click( nextSequence );

