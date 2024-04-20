

const spotLight = {
    state: "green",
  };
  
  let i = 0;
  do {
    const currentState = spotLight.state;
    
    console.log(`this traffic light is ${currentState}`);
    

    if (currentState === "green") {
        spotLight.state = "orange"; 
    } else if (currentState === "orange") {
        spotLight.state = "red"; 
    } else if (currentState === "red") {
        spotLight.state = "green"; 
      i++;
    }
  }while (i < 2);
  console.log('_______________________');
   // TODO
  // if the color is green, turn it orange
  // if the color is orange, turn it red
  // if the color is red, add 1 to rotations and turn it green


/**
 * The output should be:

The traffic light is on green
The traffic light is on orange
The traffic light is on red
The traffic light is on green
The traffic light is on orange
The traffic light is on red

*/