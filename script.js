// Grocery store purchase; prompt for items and price //
var item1 = prompt("Enter your first item.");
var item1Price = prompt("Enter the price of the item.");
var priceNum1 = parseFloat(item1Price);
var item2 = prompt("Enter your next item.");
var item2Price = prompt("Enter the price of the item.");
var priceNum2 = parseFloat(item2Price);

var item3 = prompt("Enter your final item.");
var item3Price = prompt("Enter the price of the item.");
var priceNum3 = parseFloat(item3Price);


let subTotal = (priceNum1 + priceNum2 + priceNum3);
var salesTax = .10 * subTotal;
let totalPrice = (subTotal + salesTax);
var priceNum4 = parseFloat(totalPrice); 

console.log("Item: " + item1);
console.log("Item price: " + item1Price);
console.log("Item: " + item2);
console.log("Item price: " + item2Price);
console.log("Item: " + item3);
console.log("Item price: " + item3Price);

console.log(`You have selected the following items:  \n${item1} which costs ${item1Price}\n${item2} which costs ${item2Price}\n${item3} which costs ${item3Price}`);
console.log(`your total price including sales tax is:  ${priceNum4}`);
