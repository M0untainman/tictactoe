const gameboard = (() => {
    // create the game grid area
    const gameGridArray = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']
    const renderGrid = () => {
        const gameArea = document.querySelector('.gameArea');
        let gameGrid = document.createElement('div');
        gameGrid.id = ('game_grid');
        for (let i = 0; i < 9 ; i++){
            let block = document.createElement('div')
            block.className = ('blocks')
            let blockNum = `block${i}`
            block.classList.add(blockNum)
            gameGrid.appendChild(block);
        }
        gameArea.appendChild(gameGrid);
    }
    
    renderGrid();

    const placeTokens = (gridArray) => {
        for (let i = 0; i < 9; i++){
            let position = document.querySelector(`.block${i}`);
            position.innerHTML = gridArray[i];
        }
    }
    placeTokens(gameGridArray);

})();

