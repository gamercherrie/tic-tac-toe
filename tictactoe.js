//O => <i class="fas fa-circle-notch"></i>
//X => <i class="fas fa-times"></i>
var buttonClick = document.getElementsByClassName('box');
var resetPlay = document.getElementById('reset');
var playerHeader = document.getElementById('Player');

let changeTurn = false;
var value = 0;
let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
resetPlay.style.display = "none";
resetPlay.addEventListener("click", resetButton)
for(b of buttonClick)
{
    b.addEventListener("click", changeTurns)
    
}
//this function disables button on click and changes turns
//if turn = false=> opponent's turn (O)
//if turn = true => your turn (x)
function changeTurns(){
    value = parseInt(this.value);
    changeTurn = !changeTurn;
    if(changeTurn == false)
    {
        buttonClick[value].innerHTML = '<i class="fas fa-circle-notch"></i>';
        console.log("O");
        buttonClick[value].id = "O";
        buttonClick[value].style.disabled = true;
        playerHeader.innerHTML = "Player X's turn!";
    }      
    else if(changeTurn == true)
    {
        buttonClick[value].innerHTML = '<i class="fas fa-times"></i>';
        console.log("x");
        buttonClick[value].id = "X";
        buttonClick[value].style.disabled = true;
        playerHeader.innerHTML = "Player O's turn!";
    }
    buttonClick[value].removeEventListener('click', changeTurns);
    winningPlayer();
}
function winningPlayer()
{
    for(var a = 0; a <= 7; a++)
    {
        let b = winningCombinations[a];
        if(buttonClick[b[0]].id =="" && buttonClick[b[1]].id =="" && buttonClick[b[2]].id == "")
        {
            continue;
        }
        else if(buttonClick[b[0]].id == "X" && buttonClick[b[1]].id =="X" && buttonClick[b[2]].id == "X")
        {
            playerHeader.innerHTML = "Player X Wins!";
            for(b of buttonClick)
            {
                b.removeEventListener("click", changeTurns)
            }
            resetPlay.style.display = "block";
        }
        else if(buttonClick[b[0]].id == "O" && buttonClick[b[1]].id =="O" && buttonClick[b[2]].id == "O")
        {
            playerHeader.innerHTML = "Player O Wins!";
            for(b of buttonClick)
            {
                b.removeEventListener("click", changeTurns)
            }
            resetPlay.style.display = "block";
        }
        else{
            draw();
        }
    }
}

function draw()
{
    if(buttonClick[0].id != "" && buttonClick[1].id != "" 
    && buttonClick[2].id != "" && buttonClick[3].id != ""
    && buttonClick[4].id != "" && buttonClick[5].id != ""
    && buttonClick[6].id != "" && buttonClick[7].id != ""
    && buttonClick[8].id != "")
    {
        playerHeader.innerHTML = "DRAW";
        for(b of buttonClick)
        {
            b.removeEventListener("click", changeTurns)
        }
        resetPlay.style.display = "block";
    }
}

function resetButton(){
    window.location.reload();
}