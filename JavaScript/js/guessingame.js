let randomnumber = Math.floor(Math.random() * 10);
console.log("i bet i you can't guess the number i'm thinking of");
let guess = prompt("try a number between 0 and 10")
while (guess != randomnumber) {
    if (guess < randomnumber) {
        if ((randomnumber - guess) == 3) {
            alert("Guess what , it's just a few numbers bigger")
        }
        else {
            alert("oh come on its much bigger than that try again")
        }
    }
    else {
        if ((guess - randomnumber) == 3) {
            alert("Guess what , it's just a few numbers before")
        }
        else {
            alert("oh come on its  less bigger than that")
        }
    }
}
