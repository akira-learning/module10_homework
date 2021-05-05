let inputValue = prompt("Введите значение: ");
let valueToNumber = +inputValue;

if (inputValue != null && inputValue != "" && typeof valueToNumber == "number"){
    if (isNaN(valueToNumber)){
      console.log ("Упс, кажется, вы ошиблись");
    }
    else if (inputValue % 2 == 0){
      console.log ("Ваше число четное");
    } else {
      console.log ("Ваше число нечетное");
    } 
} else if (inputValue == ""){
  console.log ("Упс, введите значение");
}
else {
  console.log ("Упс, кажется, вы ошиблись");
}
