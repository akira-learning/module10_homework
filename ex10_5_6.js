//let randomArray = [6, 21, 76, 43, 12, 11, 90, 51, 65, 3, 6, 21, 11];
let randomArray = [21, 21, 21, 21, 21];
//let randomArray = ["g", "g", "nb"];

let unique = Array.from(new Set(randomArray));  // структура данных Set хранит только уникальные значения

if(unique.length == 1){
  console.log("true");
} else {
  console.log("false");
}

