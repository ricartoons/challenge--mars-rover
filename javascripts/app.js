(function () {
  'use strict'
  //Rover
  var roverVeicule = {
    direction: "N",
    position: [0,0],
    travelLog: []
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
    //"walk"
    if(rover.direction === "N"){
      rover.position[1] -= 1;
    } else if(rover.direction === "S"){
      rover.position[1] += 1;
    } else if(rover.direction === "E"){
      rover.position[0] -= 1;
    } else if(rover.direction === "W"){
      rover.position[0] += 1;
    }
    console.log(`The Rover is ${rover.position} position now`);
    //rover.travelLog.push([...rover.position]);
    rover.travelLog.push([rover.position[0],rover.position[1]]);
  }

  function commandList(com){
    for(let i = 0; i<com.length; i++){
      switch (com[i]) {
        case "r":
          turnRight(roverVeicule);
          break;
        case "l":
          turnLeft(roverVeicule);
          break;  
        case "f":
          moveForward(roverVeicule);
          break;    
        default:
          break;
      }
    }
  }

  commandList("rffrfflfrff");
  console.log(roverVeicule.travelLog);
  
})()