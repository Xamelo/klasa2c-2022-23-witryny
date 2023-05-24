let currentPlayer = 0;
const playersSign = ["O", "X"];
const arrayOfArea = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

function setMark(numberOfArea)
{
    let area = document.getElementById(arrayOfArea[numberOfArea]);
    if (area.innerHTML != "")
    {
        return;
    }
    area.innerHTML = playersSign[currentPlayer];

    
    checkWin();

    currentPlayer = (currentPlayer + 1) % playersSign.length;
}

function checkWin()
{
    checkColumn();
}

function checkColumn()
{
    if (document.getElementById(arrayOfArea[0]).innerHTML && document.getElementById(arrayOfArea[3]).innerHTML && document.getElementById(arrayOfArea[6]).innerHTML == "X")
    {
        alert("Wygral X"); 
    }
    else
    {
        return 0;
    }
}

function clearBoard()
{
    for(let i = 0; i <= arrayOfArea.length; i++)
    {
        document.getElementById(arrayOfArea[i]).innerHTML = "";
    }
}
