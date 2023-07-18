var svetafor = prompt("color")
var colors = {
    red: "red",
    yellow: "yellow",
    green : "green",
}

switch (svetafor) {
    case colors.red:
        alert("stop")
        break;
    case colors.yellow:
        alert("wait")
        break    
    case colors.green:
        alert("go")
        break 
    default:
        alert("не правилный цвет")
        break        
}


var arr =  ["Bishkek", 'LosAngeles', 'Chicago',  'NewYork', 'Houston', 'Dallas', 'Philadelphia', 'Seattle']
var arr2 = [], arr3 = []

for (var i = 0; i < arr.length; i++) {
    if(arr[i].length > 6) arr3.push(arr[i])
    if (arr[i].includes('s') || (arr[i].includes('S')))  arr2.push(arr[i])
}

console.log(arr3);
console.log(arr2)