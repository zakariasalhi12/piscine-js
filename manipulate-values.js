function filterValues(obj, func) {
    const result = {};
    for (let key in obj) {
      if (func(obj[key], key, obj)) {
        result[key] = obj[key];
      }
    }
    return result;
  }
  
  function mapValues(obj, func) {
    const result = {};
    for (let key in obj) {
      result[key] = func(obj[key], key, obj);
    }
    return result;
  }
  
  function reduceValues(obj, func, initialValue) {
    let accumulator = initialValue;
    for (let key in obj) {
      accumulator = accumulator === undefined 
        ? obj[key] 
        : func(accumulator, obj[key], key, obj);
    }
    return accumulator;
  }