'use strict';

const c1 = document.getElementById("b1");
const c2 = document.getElementById("b2");
const c3 = document.getElementById("b3");
const c4 = document.getElementById("b4");
const c5 = document.getElementById("b5");
const c6 = document.getElementById("b6");
const c7 = document.getElementById("b7");
const c8 = document.getElementById("b8");
const c9 = document.getElementById("b9");

const cells = [];

cells.push(c1);
cells.push(c2);
cells.push(c3);
cells.push(c4);
cells.push(c5);
cells.push(c6);
cells.push(c7);
cells.push(c8);
cells.push(c9);

let currentPlayerId = 1;

function getPlayerSymbol(playerId) {
    if (playerId == 1) {
        return 'X';
    } else {
        return'0'
    }
}

function hasCurrentPlayerWon() {
    return hasPlayerWon(currentPlayerId);
}


function isFull() {
    for (let cell of cells) {
        if (cell.value == '') {
            return false;
        }
    }
    return true;
}


function isDraw() {
    return isFull();
}


function getNextPlayerId() {
    if (currentPlayerId == 1) {
        return 0;
    } else {
        return 1;
    }
}

/*  trying new method */
function printWinRow(i, requiredLength, step) {
    let firstIndex = testArray[i];
    for (i; i < requiredLength; i = i+step) {        

        while (firstIndex !== testArray[i]) {
            return false;
        }
    }
    return true;
}
/*  end of new method */


function hasPlayerWon(playerId) {
    
    let playerSymbol = getPlayerSymbol(playerId);
    
    // Checking if Player X won or not and after
	// disable all the other fields
    if ( (c1.value == playerSymbol) && (c2.value == playerSymbol) && (c3.value == playerSymbol) ) {
        return true;
    }
    else if ( (c4.value == playerSymbol) && (c5.value == playerSymbol) && (c6.value == playerSymbol) ) {
        return true;
    }
    else if ( (c7.value == playerSymbol) && (c8.value == playerSymbol) && (c9.value == playerSymbol) ) {
        return true;
    }
    else if ( (c1.value == playerSymbol) && (c4.value == playerSymbol) && (c7.value == playerSymbol) ) {
        return true;
    }
    else if ( (c2.value == playerSymbol) && (c5.value == playerSymbol) && (c8.value == playerSymbol) ) {
        return true;
    }
    else if ( (c3.value == playerSymbol) && (c6.value == playerSymbol) && (c9.value == playerSymbol) ) {
        return true;
    }
    else if ( (c1.value == playerSymbol) && (c5.value == playerSymbol) && (c9.value == playerSymbol) ) {
        return true;
    }
    else if ( (c3.value == playerSymbol) && (c5.value == playerSymbol) && (c7.value == playerSymbol) ) {
        return true;
    }
    return false;

}

function handleGameOver() {

    let playerSymbol = getPlayerSymbol(currentPlayerId);

    for (let cell of cells) {
        cell.disabled = true;
    }
    
    document.getElementById('print')
        .innerHTML = "Player <b> "+ playerSymbol +" </b> Won!";
    setTimeout(() => {
        window.alert('Player  '+ playerSymbol +'  Won!');
    }, 20)
    
}


// this function called whenever user tab on any box
function processGameState() {

    if (hasCurrentPlayerWon()) {
        handleGameOver()
    }

    // After Player 0 finish,
	// checking for Tie
    else if ( isDraw() ) {
            document.getElementById('print')
                .innerHTML = "<b>Matched Tie!</b>";
            setTimeout(() => {
                window.alert('Matched Tie!'); 
            }, 20)
            
    }  
    
    else {

        // Printing result below boxes       
        const nextPlayerId = getNextPlayerId();                    
        const nextPlayerSymbol = getPlayerSymbol(nextPlayerId);
        document.getElementById('print')
            .innerHTML = "Player <b>"+ nextPlayerSymbol +"</b> turn";
        
    }  
}


// Function to reset game
function resetFunction() {
    location.reload();
}

// Checking functions turn of the player
// and put accordingly value X or 0

function handlePlayerClick(elementId) {
    const c = document.getElementById(elementId);
    if (currentPlayerId == 1) {
        c.value = "X";
        c.disabled = true;
    }
    else {
        c.value = "0";
        c.disabled = true;
    }

    processGameState();
    
    currentPlayerId = getNextPlayerId();
    
}
