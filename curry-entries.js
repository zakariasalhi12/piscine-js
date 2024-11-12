const defaultCurry = (firstObj) => (secondObj) => {
    return { ...firstObj, ...secondObj };
  };
  
  const mapCurry = (callback) => (sourceObj) => {
    const objectEntries = Object.entries(sourceObj);
    const transformedEntries = objectEntries.map(([entryKey, entryValue]) => {
      const transformed = callback([entryKey, entryValue]);
      return [transformed[0], transformed[1]];
    });
    return Object.fromEntries(transformedEntries);
  };
  
  const reduceCurry = (callback) => (sourceObj, initialValue) => {
    const objKeys = Object.keys(sourceObj);
    return objKeys.reduce((accumulated, currentKey) => callback(accumulated, [currentKey, sourceObj[currentKey]]), initialValue);
  };
  
  const filterCurry = (callback) => (sourceObj) => {
    const objectEntries = Object.entries(sourceObj);
    const filteredEntries = objectEntries.filter(([entryKey, entryValue]) => callback([entryKey, entryValue]));
    return Object.fromEntries(filteredEntries);
  };
  
  const reduceScore = (sourceObj, initialScore) => {
    const forceUsers = filterCurry(([entryKey, entryValue]) => entryValue.isForceUser)(sourceObj);
    const startingScore = initialScore !== undefined ? initialScore : 0;
    
    return reduceCurry((total, nextEntry) => {
      const pilotingPoints = forceUsers[nextEntry[0]].pilotingScore;
      const shootingPoints = forceUsers[nextEntry[0]].shootingScore;
      return total + pilotingPoints + shootingPoints;
    })(forceUsers, startingScore);
  };
  
  const filterForce = (sourceObj) => {
    return filterCurry(([entryKey, entryValue]) => 
      entryValue.isForceUser && entryValue.shootingScore >= 80
    )(sourceObj);
  };
  
  const mapAverage = (sourceObj) => {
    const objectEntries = Object.entries(sourceObj);
    const transformedEntries = objectEntries.map(([entryKey, entryValue]) => {
      const avgScore = (entryValue.pilotingScore + entryValue.shootingScore) / 2;
      const updatedValue = {
        ...entryValue,
        averageScore: avgScore
      };
      return [entryKey, updatedValue];
    });
    return Object.fromEntries(transformedEntries);
  };
  