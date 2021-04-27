//Scrivi un programma che stampi i numeri da 1 a 100
//Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi "Buzz".
//Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".
for (var i = 0; i < 100; i++) {
    var num = 1;
    num += i;
    if (num % 3 == 0 && num % 5 == 0) {
        num = "FizzBuzz"
    } else if (num % 5 == 0) {
        num = "Buzz"
    } else if (num % 3 == 0) {
        num = "Fizz"
    }
    console.log(num);

}