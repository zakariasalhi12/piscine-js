  const fold = (array, fn, accumulator) => {
    let result = accumulator;
    for (let i = 0; i < array.length; i++) {
      result = fn(result, array[i]);
    }
    return result;
  };
  
  const foldRight = (array, fn, accumulator) => {
    let result = accumulator;
    for (let i = array.length - 1; i >= 0; i--) {
      result = fn(result, array[i]);
    }
    return result;
  };
  
  const reduce = (array, fn) => {
    let accumulator = array[0];
    for (let i = 1; i < array.length; i++) {
      accumulator = fn(accumulator, array[i]);
    }
    return accumulator;
  };
  
  const reduceRight = (array, fn) => {
    let accumulator = array[array.length - 1];
    for (let i = array.length - 2; i >= 0; i--) {
      accumulator = fn(accumulator, array[i]);
    }
    return accumulator;
  };
  