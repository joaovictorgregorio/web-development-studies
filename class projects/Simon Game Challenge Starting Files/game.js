var buttonColours = [ "red", "blue", "green", "yellow" ],
    gamePattern = [],
    userClickedPattern = [],
    started = false,
    level = 0;

// Detecta o pressionamento de alguma tecla para iniciar o game
$( document ).keydown( function () {
    // Forma de descobrir se o jogo foi iniciado ou não
    if ( !started ) {
        $( "#level-title" ).text( "Nível " + level );
        nextSequence();
        started = true;
    }
} );

// Função utilizando jQuery para pegar o click do usuário
$( ".btn" ).click( function() {
    var userChosenColour = $( this ).attr( "id" );
    
    userClickedPattern.push( userChosenColour );

    playSound( userChosenColour );
    animatePress( userChosenColour );
    checkAnswer( userClickedPattern.length - 1 );
} );

// Função do jogo execução da sua lógica
function checkAnswer( currentLevel ) {
    if ( gamePattern[ currentLevel ] === userClickedPattern[ currentLevel ] ) {
        if ( userClickedPattern.length === gamePattern.length ) {
            setTimeout( function () {
                nextSequence();
            }, 1000 );
        }
    } else {
        playSound("wrong");
        $( "body" ).addClass( "game-over" );
        $( "#level-title" ).text( "Game Over, pressione qualquer tecla para reiniciar" );
        
        setTimeout( function() {
            $( "body" ).removeClass( "game-over" );
        }, 200 );

        startOver();
    }
}


// Função inicial com os parâmetros de lógica para processamento
function nextSequence() {
    // Aumento de nível toda vez que a função next é chamada
    userClickedPattern = [];
    level++;
    $( "#level-title" ).text( "Nível " + level );

    var randomNumber = Math.round( Math.random() * 3 );

    var randomChosenColour = buttonColours[ randomNumber ];

    gamePattern.push( randomChosenColour );

    $( "#" + randomChosenColour ).fadeIn( 100 ).fadeOut( 100 ).fadeIn( 100 );

    playSound( randomChosenColour );
}

// Função para colocar a animação nas cores, quando pressionado ou selecionado pelo sistema do jogo, com a técnica de adicionar e remover a classe depois de certo tempo personalizado!
function animatePress( currentColour ) {
    $( "#" + currentColour ).addClass( "pressed" );

    setTimeout( function() {
        $( "#" + currentColour ).removeClass( "pressed" );
    }, 100 );
}

// Função para realizar o som do botão
function playSound( name ) {

    var audio = new Audio( "./sounds/" + name + ".mp3" );
    audio.play();
}

// Função para reiniciar o jogo novamente, após o erro do usuário
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}