const gameboard = (() => {
    // create the game grid area
    const render = () => {
        const gameArea = document.querySelector('.gameArea');
        let gameGrid = document.createElement('div');
        gameGrid.id = ('game_grid');
            for (let i = 0; i < 9 ; i++){
            let block = document.createElement('div')
            block.className = ('block')
            gameGrid.appendChild(block);
        }
        gameArea.appendChild(gameGrid);
}
render();

})();

