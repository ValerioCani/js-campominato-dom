let start = document.getElementById('play');
start.addEventListener('click', startgrid);

function startgrid(){

    const difficulty = parseInt(document.getElementById('difficulty').value);
    console.log(difficulty);

    let cellBase = '';

    if(difficulty == 1){
        cellBase = 10;
    } else if (difficulty == 2){
        cellBase = 9;
    } else if (difficulty == 3){
        cellBase = 7;
    };

    const griglia = document.getElementById('griglia');
    griglia.innerHTML="";

    for (let i = 0; i < (cellBase * cellBase); i++) {

        const square = createSquare(i + 1 , cellBase);
        square.addEventListener('click', 
            function () {
                this.classList.toggle('clicked');
                console.log(i + 1);
            }
        );

        griglia.append(square);
    };
}


function createSquare(numero, cellSide) {

    const newCell = document.createElement('div');
    newCell.classList.add('cell', 'cellcolor');
    newCell.style.height = 'calc(100% / ' + cellSide + ')';
    newCell.style.width = 'calc(100% / ' + cellSide + ')';
    
    const numberSquare = document.createElement('div');
    numberSquare.append(numero);

    newCell.append(numberSquare);

    return newCell;
};