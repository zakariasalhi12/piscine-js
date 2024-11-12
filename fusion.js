function fusion(obj1, obj2) {
    const res = {};
    const allKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
  
    allKeys.forEach((key) => {
      const val1 = obj1[key];
      const val2 = obj2[key];
  
      if (Array.isArray(val1) && Array.isArray(val2)) {
        res[key] = [...val1, ...val2];
      } else if (typeof val1 === 'string' && typeof val2 === 'string') {
        res[key] = val1 + ' ' + val2;
      } else if (typeof val1 === 'number' && typeof val2 === 'number') {
        res[key] = val1 + val2;
      } else if (typeof val1 === 'object' && val1 && typeof val2 === 'object' && val2) {
        res[key] = fusion(val1, val2);
      } else if (val2 !== undefined) {
        res[key] = val2;
      } else {
        res[key] = val1;
      }
    });
  
    return res;
  }

console.log(fusion({ arr: [1, "2"] }, { arr: [2] })); // -> { arr: [ 1, '2', 2 ] }
console.log(fusion({ arr: [], arr1: [5] },{ arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] }));  // ->{ arr: [ 10, 3 ], arr1: [ 5, 15, 3 ], arr2: [ '7', '1' ] }
console.log(fusion({ str: "salem" }, { str: "alem" })); // -> { str: 'salem alem' }
console.log(fusion({ str: "salem" }, { str: "" })); // -> { str: 'salem ' });
console.log(fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 }));  // -> { a: 20, b: 10, c: 1 }
console.log(fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } })) // -> { a: 11, x: [], b: { c: 'Salem alem' } }
console.log(fusion( { a: { b: [3, 2], c: { d: 8 } } },{ a: { b: [0, 3, 1], c: { d: 3 } } })) // -> { a: { b: [ 3, 2, 0, 3, 1 ], c: { d: 11 } } }
console.log(fusion({ a: "hello", b: [] }, { a: 4 })) // -> { a: 4, b: [] }
