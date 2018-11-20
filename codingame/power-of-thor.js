// https://www.codingame.com/training/easy/power-of-thor-episode-1

// Thor moves on a map which is 40 wide by 18 high. Note that the coordinates (X and Y) start at the top left! 
// This means the most top left cell has the coordinates "X=0,Y=0" and the most bottom right one has the coordinates "X=39,Y=17".

// Once the program starts you are given:
// the variable lightX: the X position of the light of power that Thor must reach.
// the variable lightY: the Y position of the light of power that Thor must reach.
// the variable initialTX: the starting X position of Thor.
// the variable initialTY: the starting Y position of Thor.

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTX = parseInt(inputs[2]); // Thor's starting X position
const initialTY = parseInt(inputs[3]); // Thor's starting Y position
let currentTX = initialTX;
let currentTY = initialTY;

// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.

    // Write an action using print()
    // To debug: printErr('Debug messages...');
    let direction = '';
    
    if (currentTY < lightY) {
        direction += 'S';
        currentTY++;
    } else if (currentTY > lightY) {
        direction += 'N';
        currentTY--;
    }
    
    if (currentTX < lightX) {
        direction += 'E';
        currentTX++;
    } else if (currentTX > lightX) {
        direction += 'W';
        currentTX--;
    }
    

    // A single line providing the move to be made: N NE E SE S SW W or NW
    print(direction);
}