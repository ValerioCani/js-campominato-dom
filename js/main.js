let start = document.getElementById('play');
start.addEventListener('click', 
    function(){

        const griglia = document.getElementById('griglia');
        griglia.innerHTML="";

        for (let i = 0; i < 100; i++) {

            const square = createSquare(i + 1);
            square.addEventListener('click', 
                function () {
                    this.classList.toggle('clicked');
                    console.log(i + 1);
                }
            );

            griglia.append(square);
        };
    }
);

function createSquare(numero) {

    const newCell = document.createElement('div');
    newCell.classList.add('cell', 'cellcolor');
    
    const numberSquare = document.createElement('div');
    numberSquare.append(numero);

    newCell.append(numberSquare);

    return newCell;
};