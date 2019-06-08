(function () {
  'use strict'
  //Rover
  var rover1 = {
    direction: "N",
    position: [0, 0],
    travelLog: [[0, 0]]
  }

  //Directions
  function turnLeft(rover) {
    console.log("turnLeft was called!");
    if (rover.direction === "N") {
      rover.direction = "W";
    } else if (rover.direction === "E") {
      rover.direction = "N";
    } else if (rover.direction === "S") {
      rover.direction = "E";
    } else {
      rover.direction = "S";
    }
    console.log(`> The Rover is ${rover.direction} direction now!`);
  }

  function turnRight(rover) {
    console.log("turnRight was called!");
    if (rover.direction === "N") {
      rover.direction = "E";
    } else if (rover.direction === "E") {
      rover.direction = "S";
    } else if (rover.direction === "S") {
      rover.direction = "W";
    } else {
      rover.direction = "N";
    }
    console.log(`> The Rover is ${rover.direction} direction now!`);
  }

  function moveForward(rover) {
    console.log("moveForward was called");
    //last position
    let lastPosition = rover.travelLog[rover.travelLog.length-1];
    //"walk"
    if (rover.direction === "N") {
      lastPosition[1] -= 1;
      if (lastPosition[1] < 0) {
        console.log("Você morreu, porque caiu da borda do mundo!");
        return;
      } else {
        rover.position[1] -= 1;
      }
    } else if (rover.direction === "S") {
      if (lastPosition[1] > 8) {
        console.log("Você morreu, porque caiu da borda do mundo!");
        return;
      } else {
        rover.position[1] += 1;
      }
    } else if (rover.direction === "E") {
      if (lastPosition[0] > 8) {
        console.log("Você morreu, porque caiu da borda do mundo!");
        return;
      } else {
        rover.position[0] += 1;
      }
    } else if (rover.direction === "W") {
      if (lastPosition[0] < 0) {
        console.log("Você morreu, porque caiu da borda do mundo!");
        return;
      } else {
        rover.position[0] -= 1;
      }
    }
    console.log(`The Rover is ${rover.position} position now`);
    rover.travelLog.push([rover.position[0], rover.position[1]]);
  }

  function commandList(com) {
    for (let i = 0; i < com.length; i++) {
      switch (com[i]) {
        case "r":
          turnRight(rover1);
          break;
        case "l":
          turnLeft(rover1);
          break;
        case "f":
          moveForward(rover1);
          break;
        default:
          break;
      }
    }
  }
  // console.log('Viagem - Caminho Suave');
  // commandList("rffrfflfrff");
  // console.log(rover1.travelLog);
  
  // console.log('Viagem - Caminho From Hell 1');
  // commandList("f");
  // console.log(rover1.travelLog);

  console.log('Viagem - Caminho From Hell 2');
  commandList("rfrfrfrfrfrfrfrfrfrfrfrfrfrfrfrfrfrf");
  console.log(rover1.travelLog);

  // console.log('Viagem - Caminho From Hell 3');
  // commandList("rfflf");
  // console.log(rover1.travelLog);

  // console.log('Viagem - Caminho From Hell 4');
  // commandList("rfflf");
  // console.log(rover1.travelLog);

})()