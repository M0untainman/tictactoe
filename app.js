// game control object
const gameControl = (() => {
    // dom declarations for player info
    const player1token = document.getElementById('token1').value;
    const player1name = document.getElementById('name1').value;
    const player2token = document.getElementById('token2').value
    const player2name = document.getElementById('name2').value;

    // player creation
    const playerFactory = (name, token) => {
        return {name, token}
    }

    const player1 = playerFactory(player1name, player1token);
    const player2 = playerFactory(player2name, player2token);
    
    // logic to control which players move it is
    let activePlayer = player2;
    
    const switchPlayer = () => {
        if (activePlayer === player1) {
            activePlayer = player2;
        }
        else if (activePlayer === player2) {
            activePlayer = player1;
        }
        return activePlayer.token
        
    };

    // logic to find winner
    const winConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    const checkWin = () => {
       winConditions.forEach((item) =>{
           if (gameboard.gameGridArray[item[0]] === activePlayer.token && gameboard.gameGridArray[item[1]] === activePlayer.token && gameboard.gameGridArray[item[2]] === activePlayer.token){
               console.log(`${activePlayer.name} wins`)
           }
       })  
    }

    const takeTurn = (e) => {
        let chosenBlock = e.srcElement.id;
        if (gameboard.gameGridArray[chosenBlock] == null){
            gameboard.gameGridArray[chosenBlock] = switchPlayer();
            checkWin(gameboard.gameGridArray);
            gameboard.placeTokens(gameboard.gameGridArray);
            
        }
        else{
            alert('Not a legal move')
        }  
    }

    return{
        switchPlayer,
        checkWin,
        activePlayer,
        takeTurn
    }
 })();



 // gameboard object
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
            block.addEventListener('click', (e) => {
                gameControl.takeTurn(e);
            })
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
    
    renderGrid();
    return{
        gameGridArray,
        placeTokens
    }
})();



 

