let renArr = [null, 0, 1, 22, 32, 1, 4, "a", "text", "", 19, NaN, NaN];
let evenEl = 0;
let oddEl = 0;
let zeroEl = 0;
let notNum = 0;

for (let i = 0; i < renArr.length; i++) {
    if(typeof (renArr[i]) == "number" && isNaN(renArr[i]) == false && renArr[i] != 0){
        
        if(renArr[i] % 2 == 0){
            evenEl++;
        } else {
            oddEl++;
        }
    } else if(renArr[i] == 0){
        zeroEl++;
    } else {
        notNum++;
    }
  
}
console.log (renArr);
console.log("Количество чётных элементов в массиве: " + evenEl);
console.log("Количество нечётных элементов в массиве: " + oddEl);
console.log("Количество нулей в массиве: " + zeroEl);
console.log("Количество элементов, не являющихся числом: " + notNum);