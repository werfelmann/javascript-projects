function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
  let randomElement = arr[Math.floor(Math.random()*arr.length)];

  return randomElement;
}

//TODO: Export the randomFromArray function.

module.exports = randomFromArray;