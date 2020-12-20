var number1 = 100;
var number2 = 102;
console.log(number1+number2);

var number3 = 1002;
var number4 = "103"; //String numbers do not add directly to any number,'
console.log(number3+number4);

var number5 = 2370;
var number6 = "8786";
number6 = parseFloat(number6); //Now parseFloat will convert the string number into a numeric value
console.log(number5+number6);

var number7 = 23436;
var number8 = "675654.9787";
number9 = parseInt(number8); //parseInt will will give the Integer
console.log(number7 + number9);

var number10 = "112.21";
number10 = parseInt(number10); //parseInt will will give the Integer
console.log(number10);


var number11 = 10;
var number12 = '7878';
number12 = +number12; // "+" will also work as parseFloat
console.log(number12 + number11);


var number13 = 40;
var number14 = 23;
number14 = ""+number14; //this will convert to string number by {""+number14}
console.log(typeof number14);

var number15 = 0.2;
var number16 = 0.1;
var total = number15 + number16;
total = total.toFixed(3);
console.log(total);