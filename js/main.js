// 1 - Scrivi un programma che stampi i numeri da 1 a 100.
var numero = 100;
for (i = 0; i < numero.length; i++) {
    console.log(i + 3);
}

// 2 - Per i multipli di 3 stampi “Fizz” al posto del numero 
for (i = 3; i < numero; i = ++i) {
    if ((i % 3) == 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}
   

// 3 - Per i multipli di 5 stampi Buzz.
/* 4 - Per i numeri che sono sia multipli di 3 che di 5 stampi 
FizzBuzz.*/