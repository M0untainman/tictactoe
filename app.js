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
            block.addEventListener('click', (e, gameGridArray) => {takeTurn(e)})
            let blockNum = i
            block.id = blockNum;
            gameGrid.appendChild(block);
        }
        gameArea.appendChild(gameGrid);
    }

    renderGrid();

    
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
        gameGridArray[chosenBlock] = 'x';
        placeTokens(gameGridArray);
    }

    return{
        takeTurn
    }

})();

