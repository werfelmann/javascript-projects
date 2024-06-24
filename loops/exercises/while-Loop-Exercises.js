//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let fuelLevel
let astronautCount
let altitude = 0



/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

const input = require('readline-sync')

queryFuel = input.question("Please enter the fuel level.")

while (queryFuel <= 5000 || queryFuel >= 30000) {
  console.log("Fuel level must be greater than 5000 and less than 30000. Please reenter the fuel level");
  queryFuel = input.question("Please reenter the fuel level.");
}

fuelLevel = queryFuel
console.log(`${fuelLevel} is acceptable.`);



//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
queryAstroCount = input.question("How many astronauts are on board?");

while (queryAstroCount < 1 || queryAstroCount > 7) {
  console.log("Number of astronauts must be between 1 and 7.");
  queryAstroCount = input.question("Please reenter the number of astronauts on board.");
}
astronautCount = queryAstroCount
console.log(`Astronout count of ${queryAstroCount} confirmed.`)

  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (fuelLevel - 100 * astronautCount >= 0) {
  fuelLevel -= (100 * astronautCount);
  altitude += 50;
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/


console.log(`The shuttle gained an altitude of ${altitude}km.`);

if (altitude >= 2000) {
  console.log("Orbit achieved!");
} else {
  console.log("Failed to reach orbit. Try again with more fuel or fewer astronauts.")
}