let start = document.getElementById('play');
start.addEventListener('click', startgrid);

function startgrid(){

    document.getElementById('you-lose').classList.remove('lose');
    document.getElementById('victory').classList.remove('win');


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
    
    let counter = 0; 
    for (let i = 0; i < (cellBase * cellBase); i++) {

        const square = createSquare(i + 1 , cellBase, randomNumbers);

        square.addEventListener('click', 
            function () {
                if(randomNumbers.includes(i+1)){

                    const bombarray = document.getElementsByClassName('bombcolor');
                    for( let i=0; i<bombarray.length; i++){
                        bombarray[i].classList.add('boom');
                    };
                    document.getElementById('you-lose').classList.add('lose');
                    console.log(i + 1);

                }else if(!this.classList.contains('bombfree')){

                    this.classList.add('bombfree');
                    console.log(i + 1);
                    counter++;
                    document.getElementById('counter').innerHTML = `Hai trovato ${counter} caselle senza bomba , te ne mancano ${(cellBase * cellBase) - 16 - counter}`;
                    console.log(counter)

                    if(counter == (cellBase * cellBase) - 16){
                        document.getElementById('victory').classList.add('win');
                    };

                };
            }
        );

        griglia.append(square);
    };

};


function createSquare(numero, cellSide, randomNumbers) {

    const newCell = document.createElement('div');
    newCell.style.height = 'calc(100% / ' + cellSide + ')';
    newCell.style.width = 'calc(100% / ' + cellSide + ')';
    
    const numberSquare = document.createElement('div');
    numberSquare.append(numero);

    //per semplificare la correzione, senn?? viene voglia di spararsi a fare numero per numero dalla console
    //adesso che ci penso poteva venirmi in mente prima di finire... 
    if(randomNumbers.includes(numero)){
        newCell.classList.add('cell', 'bombcolor');
        numberSquare.style.color = 'red';
        numberSquare.style.fontSize = '20px';
    } else {
        newCell.classList.add('cell', 'cellcolor');
    }

    newCell.append(numberSquare);

    return newCell;
};