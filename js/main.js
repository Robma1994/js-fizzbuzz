// 1 - Scrivi un programma che stampi i numeri da 1 a 100.
var numero = 100;


/* 2 - Per i multipli di 3 stampi “Fizz” al posto del numero.
Per i multipli di 5 stampi "Buzz" e per i multipli di entrambi 
stampi "FizzBuzz"*/


for (i = 1; i < numero +1; i = ++i) {
    
    if (((i % 3) == 0) && ((i % 5) == 0)) {
        console.log("FizzBuzz");
    }
    else if ((i % 3) == 0) 
    {
        console.log("Fizz");
    } 
    else if ((i % 5) == 0)
     {
        console.log("Buzz");
    } 
    else {
        console.log(i);
    } 
}
   


