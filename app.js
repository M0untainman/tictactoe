const gameboard = (() => {
    // create the game grid area
    const gameGridArray = []
    const renderGrid = () => {
        const gameArea = document.querySelector('.gameArea');
        let gameGrid = document.createElement('div');
        gameGrid.id = ('game_grid');
        for (let i = 0; i < 9 ; i++){
            let block = document.createElement('div')
            block.className = ('blocks')
            block.addEventListener('click', (e) => {takeTurn(e)})
            let blockNum = i
            block.id = blockNum;
            gameGrid.appendChild(block);
        }
        gameArea.appendChild(gameGrid);
    }
    const placeTokens = (gridArray) => {
        for (let i = 0; i < 9; i++){
            let position = document.getElementById(i);
            if (gridArray[i] != null){
                position.innerHTML = gridArray[i];
            }
        }
    }
    const takeTurn = (e) => {
        let chosenBlock = e.srcElement.id;
        gameGridArray[chosenBlock] = switchPlayer();
        placeTokens(gameGridArray);
    }
    renderGrid();

})();

// const gameControl = (() => {
    // dom declarations for player info
    const player1token = document.getElementById('token1').value;
    const player1name = document.getElementById('name1').value;
    const player2token = document.getElementById('token2').value
    const player2name = document.getElementById('name2').value;

    const playerFactory = (name, token) => {
        return {name, token}
    }

    const player1 = playerFactory(player1name, player1token);
    const player2 = playerFactory(player2name, player2token);
    
    let activePlayer = player1;
    const switchPlayer = () => {
        
        if (activePlayer == player1) {
            activePlayer = player2;
            return player1.token;
        }
        else if (activePlayer == player2) {
            activePlayer = player1;
            return player2.token;
        }
        
    };

    
// })();

 

