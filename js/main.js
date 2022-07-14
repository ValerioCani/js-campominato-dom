let start = document.getElementById('play');
start.addEventListener('click', startgrid);

function startgrid(){

    document.getElementById('you-lose').classList.remove('lose');

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
    
    let randomNumbers = [];
    
    while( randomNumbers.length < 16 ){

        let random = Math.floor(Math.random() * (cellBase * cellBase)) + 1;

        if( !randomNumbers.includes(random)){
            randomNumbers.push(random);
        };
    };

    console.log(randomNumbers);
    
    const griglia = document.getElementById('griglia');
    griglia.innerHTML="";

    for (let i = 0; i < (cellBase * cellBase); i++) {

        const square = createSquare(i + 1 , cellBase);

        square.addEventListener('click', 
            function () {
                if(randomNumbers.includes(i+1)){
                    this.classList.add('boom');
                    document.getElementById('you-lose').classList.add('lose');
                    console.log(i + 1);
                }else{
                    this.classList.add('bombfree');
                    console.log(i + 1);
                }
            }
        );

        griglia.append(square);
    };

};


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