
let isPlayer1 = true;
let isPlayer2 = false;


let row = document.querySelectorAll('.row > div');
// row.addEventListener('click', function(e) { 
//     e.target.innerHTML = ('X');
// });
console.log(row);
row.forEach(function(cell)  {
    cell.addEventListener("click", cellClicked);
});
// main game logic
function cellClicked(e) {
    e.target.textContent = 'HI';
    togglePlayer();
}
// Helper functions
function togglePlayer ()    {
    console.log('togglePlayer');
}
