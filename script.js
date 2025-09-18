let blocks = document.querySelectorAll('.block');
let resetButton = document.getElementById('#reset');

let currentPlayer0 = true;

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

    })
});