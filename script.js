let blocks = document.querySelectorAll('.block');
let resetButton = document.getElementById('#reset');
let newGameButton = document.getElementById('#btn');
let winMessage = document.getElementById('#win');
let infoBox = document.querySelector('.info');

let currentPlayerO = true;

const board = [ 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],


]

blocks.forEach((block) => {
    block.addEventListener('click', () => {
        console.log('clicked');
      if(currentPlayerO){
        block.textContent = 'O';
        currentPlayerO = false;
      } else {
        block.textContent = 'X';
        currentPlayerO = true;
      }
      block.disabled = true;

     checkWin();

    });
});


const disableAllBlocks = () => {
    for(let block of blocks) {
        block.disabled = true;
    }
};


const enableAllBlocks = () => {
    for(let block of blocks) {
        block.disabled = false;
        block.innerText = '';
    }
};



 const showWinMessage = (winner) => { 
     infoBox.innerText = `${winner} has won!`;
    winMessage.classList.remove('hide');
    disableAllBlocks();

 };
     



const checkWin = () => {
    for( let pattern of board) {
        console.log
        (blocks[pattern[0]].innerText,
        blocks[pattern[1]].innerText,
        blocks[pattern[2]].innerText
        );

        let pos1Value = blocks[pattern[0]].innerText;
        let pos2Value = blocks[pattern[1]].innerText;
        let pos3Value = blocks[pattern[2]].innerText;

        if(pos1Value !== '' && pos1Value === pos2Value && pos2Value === pos3Value) {
            if(pos1Value === pos2Value && pos2Value === pos3Value) {
                alert(`${pos1Value} has won!`);

                showWinMessage(post1Value);

                    
        }
    }  
}

};

const resetGame = () => {
   currentPlayerO = true;
   enableAllBlocks();




}
