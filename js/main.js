// 1 - Scrivi un programma che stampi i numeri da 1 a 100.
var numero = 100;
for (i = 0; i < numero; i++) {
    console.log(i + 1);
}

// 2 - Per i multipli di 3 stampi “Fizz” al posto del numero 
var numero = 100;
for (i = 1; i < numero +1; i = ++i) {
    if ((i % 3) == 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}
   

// 3 - Per i multipli di 5 stampi Buzz.
var numero = 100;
for (i = 1; i < numero +1; i = ++i) {
    if ((i % 5) == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
/* 4 - Per i numeri che sono sia multipli di 3 che di 5 stampi 
FizzBuzz.*/
var numero = 100;
for (i = 1; i < numero +1; i = ++i) {
    if (((i % 3) == 0) && ((i % 5) == 0)) {
        console.log("FizzBuzz");
    } else {
        console.log(i);
    }
}
