var shoppingList = [ "water","burger","pizza","chicken","salad","icecream","flan","milkshake"];
var bucketList = ["Milk", "Eggs", "Frosted Flakes", "Salami", "Juice"];

//for (var i = 0; i < groceries.length; i++) {
    //var item = groceries[i];
    bucketList.push("Cookies");
//}
console.log(bucketList);
var myList = shoppingList.concat(bucketList); 
console.log(myList);