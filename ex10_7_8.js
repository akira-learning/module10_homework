let myMap = new Map([
    ["1", "один"],
    ["2", "два"],
    ["3", "три"],
    ["4", "четрые"],
    ["5", "пять"]
]);

myMap.forEach((value, key, map) => {
    console.log(`${key} - ключ, ${value} - значение`); 
  });