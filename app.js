// gameboard object
const gameboard = (() => {
    // dom declarations for player info
    let player1token = document.getElementById('token1').value;
    let player1name = document.getElementById('name1').value;
    let player2token = document.getElementById('token2').value
    let player2name = document.getElementById('name2').value;
    const gameStartBtn = document.getElementById('gameStartBtn');
    gameStartBtn.addEventListener('click', () => {startGame()});

    // player creation
    const playerFactory = (name, token) => {
        return {name, token}
    }

    // create the game grid area
    let gameGridArray = ['', '', '', '', '', '', '', '', '', ];
    const _renderGrid = () => {
        const gameArea = document.querySelector('.gameArea');
        gameArea.innerHTML = '';
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
            if (gridArray[i] != ''){
                position.innerHTML = gridArray[i];
            }
        }
    }



        let player1 = playerFactory(player1name, player1token);
        let player2 = playerFactory(player2name, player2token);

    const startGame = () =>{
        gameStartBtn.value = 'Restart game'
        document.getElementById('gameInfo').innerHTML = 'Player 1 turn'
        _renderGrid();
        gameboard.gameGridArray = ['', '', '', '', '', '', '', '', '', ]
        player1token = document.getElementById('token1').value;
        player1name = document.getElementById('name1').value;
        player2token = document.getElementById('token2').value
        player2name = document.getElementById('name2').value;
        gameboard.player1.token = player1token;
        gameboard.player1.name = player1name;
        gameboard.player2.token = player2token;
        gameboard.player2.name = player2name;
        gameControl.setActivePlayer(gameboard.player2);
        // gameControl.activePlayer = gameboard.player2;
    }

    return{
        gameGridArray,
        placeTokens,
        player1,
        player2


    }
})();

// game control object
const gameControl = (() => {
    // DOM declarations
    let gameInfo = document.getElementById('gameInfo');
    // logic to control which players move it is
    let activePlayer = gameboard.player2;

    const switchPlayer = () => {
        if (activePlayer === gameboard.player1) {
            gameInfo.innerHTML = 'player1 turn'
            activePlayer = gameboard.player2;
            console.log(activePlayer);
        }
        else if (activePlayer === gameboard.player2) {
            activePlayer = gameboard.player1;
            gameInfo.innerHTML = 'player2 turn'
            console.log(activePlayer);
        }
        return activePlayer.token

    };

    const setActivePlayer = (newActivePlayer) => {
        activePlayer = newActivePlayer;
    }

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
        let gameOver = false;
        winConditions.forEach((item) =>{
            if (gameboard.gameGridArray[item[0]] === activePlayer.token && gameboard.gameGridArray[item[1]] === activePlayer.token && gameboard.gameGridArray[item[2]] === activePlayer.token){
                console.log(`${activePlayer.name} wins`)
                gameInfo.innerHTML= `${activePlayer.name} wins`;
                stopGame()
                gameOver = true;
            }
           if (gameOver === false) {
                let empty = 0;
            gameboard.gameGridArray.forEach((grid) => {
                 if (grid !== ''){
                     empty += 1;
                 }
                 if (empty === 9){
                     stopGame()
                     gameInfo.innerHTML= 'game is draw';
                 }
            })
           }
        })

    }

    const stopGame = () =>{
        for (let i = 0 ; i < 9; i++){
            let block = document.getElementById(`${i}`)
            block.style.backgroundColor = 'yellow'
            block.style.pointerEvents = 'none';
            };
    }

    const takeTurn = (e) => {
        let chosenBlock = e.srcElement.id;
        if (gameboard.gameGridArray[chosenBlock] == ''){
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
        setActivePlayer,
        takeTurn
    }
 })();
