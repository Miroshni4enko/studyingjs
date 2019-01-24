var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = [];
for (var i = 0; i < arr.length; i++) {
    arrLength[i] = arr[i].length;
}

alert( arrLength ); // 4,5,2,5


function tryMap() {
    arr.map(function (item, i, array) {
        item.length
    })
}
