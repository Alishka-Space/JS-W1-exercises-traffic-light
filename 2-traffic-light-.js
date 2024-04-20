
/**
 * The `possibleStates` property define the states (in this case: colours)
 * in which the traffic light can be.
 * The `stateIndex` property indicates which of the possible states is current.
 */


const trafficLight = {
    possibleStates: ["green", "orange", "red"],
    stateIndex: 0,
  };
  
  let cycle = 0;
  while (cycle < 2) {
    const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
    console.log("The traffic light is on", currentState);
  
      // TODO
  // if the color is green, turn it orange
  // if the color is orange, turn it red
  // if the color is red, add 1 to cycles and turn it green
    // Transition logic
    
    if (currentState === "green") {
      trafficLight.stateIndex = 1; // turn it orange
    } else if (currentState === "orange") {
      trafficLight.stateIndex = 2; // turn it red
    } else if (currentState === "red") {
      cycle++; // add 1 to cycles
      trafficLight.stateIndex = 0; // turn it green
    }
  }

  