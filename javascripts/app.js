(function () {
  'use strict'
  //Rover
  var rover1 = {
    direction: 'N',
    position: [0, 0],
    travelLog: [[0, 0]]
  }

  //Directions
  function turnLeft(rover) {
    console.log('turnLeft was called!');
    if (rover.direction === 'N') {
      rover.direction = 'W';
    } else if (rover.direction === 'E') {
      rover.direction = 'N';
    } else if (rover.direction === 'S') {
      rover.direction = 'E';
    } else {
      rover.direction = 'S';
    }
    console.log(`> The Rover is ${rover.direction} direction now!`);
  }

  function turnRight(rover) {
    console.log('turnRight was called!');
    if (rover.direction === 'N') {
      rover.direction = 'E';
    } else if (rover.direction === 'E') {
      rover.direction = 'S';
    } else if (rover.direction === 'S') {
      rover.direction = 'W';
    } else {
      rover.direction = 'N';
    }
    console.log(`> The Rover is ${rover.direction} direction now!`);
  }

  function moveForward(rover) {
    console.log('moveForward was called');
    //last position
    let lastPosition = rover.travelLog[rover.travelLog.length - 1];
    //'walk'
    switch (rover.direction) {
      case 'N':
        lastPosition[1] -= 1;
        if (lastPosition[1] < 0 || lastPosition[1] > 9) {
          console.log('You died because you fell from the North edge of the world!');
          return;
        } else {
          rover.position[1] -= 1;
        }
        break;
      case 'S':
        lastPosition[1] += 1;
        if (lastPosition[1] > 9 || lastPosition[1] < 0) {
          console.log('You died because you fell from the South edge of the world!');
          return;
        } else {
          rover.position[1] += 1;
        }
        break;
      case 'E':
        lastPosition[0] += 1;
        if (lastPosition[0] > 9 || lastPosition[0] < 0) {
          console.log('You died because you fell from the East edge of the world!');
          return;
        } else {
          rover.position[0] += 1;
        }
        break;
      case 'W':
        lastPosition[0] -= 1;
        if (lastPosition[0] < 0 || lastPosition[0] > 9) {
          console.log('You died because you fell from the West edge of the world!');
          return;
        } else {
          rover.position[0] -= 1;
        }
        break;
      default:
        console.log('Position invalid!');
        break;
    }
    console.log(`The Rover is ${rover.position} position now`);
    //save logs
    rover.travelLog.push([rover.position[0], rover.position[1]]);
  }

  function moveBackward(rover) {
    console.log('moveForward was called');
    //last position
    let lastPosition = rover.travelLog[rover.travelLog.length - 1];
    //'walk'
    switch (rover.direction) {
      case 'N':
        lastPosition[1] += 1;
        if (lastPosition[1] < 0 || lastPosition[1] > 9) {
          console.log('You died because you fell from the South edge of the world!');
          return;
        } else {
          rover.position[1] += 1;
        }
        break;
      case 'S':
        lastPosition[1] -= 1;
        if (lastPosition[1] > 9 || lastPosition[1] < 0) {
          console.log('You died because you fell from the North edge of the world!');
          return;
        } else {
          rover.position[1] -= 1;
        }
        break;
      case 'E':
        lastPosition[0] -= 1;
        if (lastPosition[0] > 9 || lastPosition[0] < 0) {
          console.log('You died because you fell from the East edge of the world!');
          return;
        } else {
          rover.position[0] -= 1;
        }
        break;
      case 'W':
        lastPosition[0] += 1;
        if (lastPosition[0] < 0 || lastPosition[0] > 9) {
          console.log('You died because you fell from the West edge of the world!');
          return;
        } else {
          rover.position[0] += 1;
        }
        break;
      default:
        console.log('Position invalid!');
        break;
    }
    console.log(`The Rover is ${rover.position} position now`);
    //save logs
    rover.travelLog.push([rover.position[0], rover.position[1]]);
  }

  function commandList(com) {
    for (let i = 0; i < com.length; i++) {
      if (com[i] === 'r' || com[i] === 'l' || com[i] === 'f' || com[i] === 'b') {
        switch (com[i]) {
          case 'r':
            turnRight(rover1);
            break;
          case 'l':
            turnLeft(rover1);
            break;
          case 'f':
            moveForward(rover1);
            break;
          case 'b':
            moveBackward(rover1);
            break;
          default:
            break;
        }
      } else {
        console.log('Command invalid!!!');
      }
    }
  }

  console.log('Viagem - Caminho Suave');
  //commandList('rffrfflfrff');
  //commandList('rfrflfrflfrflfrflfrflfrflfrflfrflfrrffffffffflbbb');
  commandList('rfffffffffrfffffffffrfffffffffrfffffffffrfrflfrflfrflfrflfrflfrflfrflfrflfrfrffffffffflbbbbbbbbbb');
  console.log(rover1.travelLog);

})()