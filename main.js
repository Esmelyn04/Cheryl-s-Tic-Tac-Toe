console.log('Your JS is linked up. Be the person you needed when you were little.')

/*----- constants -----*/


/*----- app's state (variables) -----*/

let board;
let turn = 'X';
let win;

/*----- cached element references -----*/

const squares = Array.from(document.querySelectorAll('#board div'));
    
    const messages = document.querySelector('h2');

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);

/*----- functions -----*/

function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    
    render();
    };
//be sure to call the init function!
init();


function render() {
    board.forEach(function(mark, index){
        
        squares[index].textContent = mark;

    });

    messages.textContent = `It's ${turn}'s turn!`;
        
};

function handleTurn(event) {
    let idx = squares.findIndex(function(square) {
    return square === event.target;
    });
    
    board[idx] = turn;
    // check your console logs to make sure it's working!
    //console.log(board);

    turn = turn === 'X' ? 'O' : 'X';

    render();
    };

    win = board[0] && board[0] === board[1] && board[0] === board[2] ? board[0] : null;