console.log('Your JS is linked up. Be the person you needed when you were little.')

/*----- constants -----*/


/*----- app's state (variables) -----*/

let board;
let turn = 'X';

/*----- cached element references -----*/

const squares = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);

/*----- functions -----*/

function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    // new code here
    render();
    };
//be sure to call the init function!
init();


function render() {
    board.forEach(function(mark, index){
        //console.log(mark, index);
        //this sets the text content of the square of the same position to the mark on the board. 
        squares[index].textContent = mark;

    });
        
};