let inputValue = "54";
let valuetype = typeof inputValue;

switch (valuetype){
    case "number":
        console.log(`${inputValue} - число`);
        break;
    case "string":
        console.log(`${inputValue} - строка`);
        break;
    case "boolean":
        console.log(`${inputValue} - логический тип`);
        break;
    default:
        console.log(`Тип ${inputValue} не определен`);
}

