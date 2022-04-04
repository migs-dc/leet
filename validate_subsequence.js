function isValidSubsequence(array, sequence) {
    if (array.length === 1 || array === sequence) return true;
      
      if (array.length < sequence.length) return false;
      
      let count = 0;
      
      for (let x = 0; x < array.length; x++){
          if ( sequence.includes(array[x]) ){
              if ( sequence.indexOf(array[x]) === count ){
                  count++;
              } else {
                  return false;
              }
          }
          
          return true;
      }
  }
  
  // Do not edit the line below.
  exports.isValidSubsequence = isValidSubsequence;