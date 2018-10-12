let isPlayer1 = true;
let isPlayer2 = false;
let numClicked = 1;

let row = document.querySelectorAll('.row > div');
// row.addEventListener('click', function(e) { 
//     e.target.innerHTML = ('X');
// });
console.log(row);
row.forEach(function (cell) {
    cell.addEventListener("click", cellClicked);
});
// main game logic
function cellClicked(e) {
    //Assignment operator to increment var by one insteaad of arithmetic operator
    numClicked += 1;
    if (numClicked % 2 == 0) {
        e.target.textContent = 'X';

    } else if (numClicked % 2 != 0) {
        e.target.textContent = 'O';

    }
    
    // togglePlayer();
}
// Helper functions
function togglePlayer() {
    console.log('togglePlayer');
}