// Setup initial game stats
var score = 0;
var lives = 2;
var powerPellets = 4;
var dots = 240;
var ghostValue = 200;
var level = 1;
var fruit = '';
var fruitValue = 0;

// Define your ghosts here
var inky = {
  menu_option: '1',
  name: 'Inky',
  colour: 'Red',
  character: 'Shadow',
  edible: false
};

var blinky = {
  menu_option: '2',
  name: 'Blinky',
  colour: 'Cyan',
  character: 'Speedy',
  edible: false
};

var pinky = {
  menu_option: '3',
  name: 'Pinky',
  colour: 'Pink',
  character: 'Bashful',
  edible: false
};

var clyde = {
  menu_option: '4',
  name: 'Clyde',
  colour: 'Orange',
  character: 'Pokey',
  edible: false
}

// replace this comment with your four ghosts setup as objects

var ghosts = [inky, blinky, pinky, clyde];

// Draw the screen functionality
function drawScreen() {
  clearScreen();
  setTimeout(function() {
    displayStats();
    displayMenu();
    displayPrompt();
  }, 10);
}

function clearScreen() {
  console.log('\x1Bc');
}

function displayStats() {
  console.log('Score: ' + score + '     Lives: ' + lives);
  console.log('Power-Pellets: ' + powerPellets);
  console.log('Dots: ' + dots);
  console.log('Ghost-Value: ' + ghostValue)
  console.log('Level: ' + level);
}

function displayMenu() {
  console.log('\n\nSelect Option:\n');  // each \n creates a new line
  if (dots > 0) {
    console.log('(d) Eat Dot');
  } else {
  }
  if (dots > 9) {
    console.log('(t) Eat Ten Dots');
  } else {
  }
  if (dots > 99) {
    console.log('(c) Eat One Hundred Dots');
  } else {
  }
  if (dots > 0) {
    console.log('(a) Eat All Dots');
  } else {
  }
  if (dots < (Math.floor(Math.random() * 237) + 0)) {
    console.log('(f) Eat ' + eatFruit());
  }
  if (powerPellets > 0) {
    console.log('(p) Eat Power-Pellet');
  } else {
  }



  for (var step = 0; step < ghosts.length; step++) {
    if (ghosts[step].edible) {
      console.log('(' + ghosts[step].menu_option + ') Eat ' + ghosts[step].name + ' (edible)');
    } else {
      console.log('(' + ghosts[step].menu_option + ') Eat ' + ghosts[step].name + ' (inedible)');
    }
  }

  console.log('(q) Quit');

}

function displayPrompt() {
  // process.stdout.write is similar to console.log except it doesn't add a new line after the text
  process.stdout.write('\nWaka Waka :v '); // :v is the Pac-Man emoji.
}


// Menu Options
function eatDot() {
  console.log('\nChomp!');
  score += 10;
  dots--;
}

function eatTenDots() {
  console.log('\nChomp Chomp Chomp Chomp Chomp!!');
  score += 100;
  dots -= 10;
}

function eatCentiDots() {
  console.log('\nChomp Chomp Chomp Chomp Chomp Chomp Chomp Chomp Chomp Chomp Chomp!!!');
  score += 1000;
  dots -= 100;
}

function eatAllDots() {
  console.log('\nI\'m full!!!');
  score += 100000;
  dots -= dots;
}

function eatGhost(ghost) {
  if (ghost.edible) {
    // if (ghosts.length > 4) {
    //   eatGhost.score += 200
    //   ghosts--
    // } else if (ghosts.length > 2 && ghosts.length < 4) {
    //   eatGhost.score += 400
    //   ghosts--
    // } else if (ghosts.length > 1 && ghosts.length < 3) {
    //   eatGhost.score += 800
    //   ghosts--
    // } else if (ghosts.length > 1 && ghosts.length < 3) {
    //   eatGhost.score += 1600
    //   ghosts--
    // }
    // if (eatenGhosts == (2 % 2) || eatenGhosts) {
    //   score += 200
    //   eatenGhosts += 1;
    // } else if (eatenGhosts == (5 % 2) || ) {
    //   score += 400
    //   eatenGhosts += 1;
    // } else if (eatenGhosts == (5 % 3) || ) {
    //   score += 800
    //   eatenGhosts += 1;
    // } else if (eatenGhosts == (7 % 4) || ) {
    //   score += 1600
    //   eatenGhosts += 1;
    // }

    score += ghostValue;
    ghostValue *= 2;

    console.log('\nYou ate ' + ghost.name + ' and that ghost is a ' + ghost.character + ' ghost!')
    ghost.edible = false;
  } else {
    lives--;
    console.log('\nThe ' + ghost.colour + ' ghost with a name of ' + ghost.name + ' just killed you!')
  }
}
function gameOver() {
  if (lives < 0) {
    process.exit();
  }
}
function eatPowerPellet() {
  score += 50;
  ghostValue = 200;
  powerPellets--;
  for (var step = 0; step < ghosts.length; step++) {
      ghosts[step].edible = true;
  }
}
function newLevel() {
  if (dots === 0 && powerPellets === 0) {
    level++;
    dots = 240;
    powerPellets = 4;
    for (var step = 0; step < ghosts.length; step++) {
        ghosts[step].edible = false;
    }
  }
}
function eatFruit() {
  if (level === 1) {
    fruit = 'Cherry';
    fruitValue = 100;
  } else if (level === 2) {
    fruit = 'Strawberry';
    fruitValue = 300;
  } else if (level === 3 || level === 4) {
    fruit = 'Orange';
    fruitValue = 500;
  } else if (level === 5 || level === 6) {
    fruit = 'Apple';
    fruitValue = 700;
  } else if (level === 7 || level === 8) {
    fruit = 'Pineapple';
    fruitValue = 1000;
  } else if (level === 9 || level === 10) {
    fruit = 'Galaxian Spaceship';
    fruitValue = 2000;
  } else if (level === 11 || level === 12) {
    fruit = 'Bell'
    fruitValue = 3000;
  } else if (level >= 13) {
    fruit = 'Key'
    fruitValue = 5000;
  }
  score += (fruitValue / 2);
  return fruit;
}

// Process Player's Input
function processInput(key) {
  switch(key) {
    case '\u0003': // This makes it so CTRL-C will quit the program
    case 'q':
      process.exit();
      break;
    case 'd':
      if (dots > 0) {
        eatDot();
        break;
      } else {
        console.log('\nNo dots left');
        score = score - 100;
        break;
      }
    case 't':
      if (dots > 9) {
        eatTenDots();
        break;
      } else {
        console.log('\nNot enough dots left');
        score = score - 100;
        break;
      }
    case 'c':
      if (dots > 99) {
        eatCentiDots();
        break;
      } else {
        console.log('\nNot enough dots left');
        score = score - 100;
        break;
      }
    case 'a':
      if (dots > 0) {
        eatAllDots();
        break;
      } else {
        console.log('\nNo dots left');
        score = score - 100;
        break;
      }
    case 'f':
      if (dots < (Math.floor(Math.random() * 237) + 0)) {
        eatFruit();
        break;
      } else {
        console.log('\nNo ' + eatFruit() + '\'s at the moment.')
        score = score - 100;
        break;
      }
    case '1':
      eatGhost(inky);
      break;
    case '2':
      eatGhost(blinky);
      break;
    case '3':
      eatGhost(pinky);
      break;
    case '4':
      eatGhost(clyde);
      break;
    case 'p':
      if (powerPellets > 0) {
        eatPowerPellet();
        break;
      } else {
        console.log('\nNo Power-Pellets left!');
        break;
      }
    default:
      console.log('\nInvalid Command!');
  }
  newLevel();
  gameOver();
}

//
// YOU PROBABLY DON'T WANT TO CHANGE CODE BELOW THIS LINE
//

// Setup Input and Output to work nicely in our Terminal
var stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

// Draw screen when game first starts
drawScreen();

// Process input and draw screen each time player enters a key
stdin.on('data', function(key) {
  process.stdout.write(key);
  processInput(key);
  setTimeout(drawScreen, 300); // The command prompt will flash a message for 300 milliseoncds before it re-draws the screen. You can adjust the 300 number to increase this.
});

// Player Quits
process.on('exit', function() {
  console.log('\n\nGame Over!\n');
});
