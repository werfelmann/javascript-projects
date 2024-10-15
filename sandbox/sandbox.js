function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    let nextSq;
    
    if (!Number.isInteger(Math.sqrt(sq))) {
      return -1;
    } else {
        
        for (let i = sq+1; nextSq === 0; i++) {
          if (Number.isInteger(Math.sqrt(i))) {
            nextSq = i;
          }
          
          
      } 
    }
    return nextSq;
  }

  console.log(findNextSquare(121));