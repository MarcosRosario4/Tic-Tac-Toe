/*----- constants -----*/
/*----- app's state (variables) -----*/
let board;
let turn = 'X';

/*----- cached element references -----*/
const squares = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/
/*----- functions -----*/
function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    //be sure to call the init function!
    render();
};

function render() {
    board.forEach(function(mark, index){
        
        //this sets the text content of the square of the same position to the mark on the board. 
        squares[index].textContent = mark;
        });
};