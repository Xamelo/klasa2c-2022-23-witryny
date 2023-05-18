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



    currentPlayer = (currentPlayer + 1) % playersSign.length;
}