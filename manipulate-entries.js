function filterEntries(obj, func) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => func([key, value]))
  );
}

function mapEntries(obj, func) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => func([key, value]))
  );
}

function reduceEntries(obj, func, initialValue) {
  return Object.entries(obj).reduce(
    (acc, [key, value]) => func(acc, [key, value]),
    initialValue
  );
}

const totalCalories = (obj) => {
  let total = 0
  for (let key in obj) {
      total += nutritionDB[key].calories * obj[key] / 100
  }
  return Number(total.toFixed(1))
}

// lowCarbs
const lowCarbs = (obj) => {
  const newObj = {...obj}
  for(let key in obj){
      if(nutritionDB[key].carbs > 10){
          delete newObj[key]
      }
  }
  return newObj
}
const cartTotal = (obj) => {
  let newObj= {}
  for (let key in obj) {
      newObj[key] = {
          calories:Number( (nutritionDB[key].calories * obj[key] / 100).toLocaleString().replace(',',"")),
          protein: Number((nutritionDB[key].protein * obj[key] / 100).toLocaleString().replace(',',"")),
          carbs: Number((nutritionDB[key].carbs * obj[key] / 100).toLocaleString().replace(',',"")),
          sugar: Number(( nutritionDB[key].sugar * obj[key] / 100).toLocaleString().replace(',',"")),
          fiber: Number((nutritionDB[key].fiber * obj[key] / 100).toLocaleString().replace(',',"")),
          fat:  Number((nutritionDB[key].fat * obj[key] / 100).toLocaleString().replace(',',""))
      }
  }
  return newObj
}