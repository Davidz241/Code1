let rowsArray: number[] = [1, 3, 5, 7];
let player: boolean = true;
let players: string;

play();

function play() {
    if (rowsArray[0] == 0 && rowsArray[1] == 0 && rowsArray[2] == 0 && rowsArray[3] == 0) {
        console.log('YOU WON');

    } else {

        let input: string | null = prompt('Wahl der Reihe : 1-4');
        let temp: number = Number(input);
        temp = temp - 1;
        futher(temp);
        console.log(rowsArray);
    }




    if (player == true) {
        players = 'Player 1';
        player = false;
    } else {
        players = 'Player 2';;
        player = true;
    }


    function futher(temp: number): any {
        if (!isNaN(temp) && temp > -1 && temp < 4) {


            let input: string | null = prompt('Wie viel willst du abziehen aus der Zeile: ' + temp);
            let temp1: number = Number(input);
            rowsArray[temp] = rowsArray[temp] - temp1;
            console.log(rowsArray);
            play();
        }

    }

}






