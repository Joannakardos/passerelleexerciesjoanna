for (i = 0; i < 19; i++) { //on lui crée une variable et on lui dit tant que i<19 ajoute 1 a i donc ca le fait 1,2,3,4  jusqua 19
    console.log(i)
}

let j = 1;// on l'initialise AVANT la variable que on va utuliser//
do {
    console.log(j);
    j++;
} while (j > 30) // c'est un autre type de loop  on fait l'action tant que  n'est pas j>3
// ca s'arretera a 31 pcq ca cheque APRES la condition
a = 2
while (a < 34) {
    console.log(a);
    a++
}
const arr = [1, 2, 5, 4,]
console.log('arr.lenght,arr.lenght');
for (let i = onabort; i < arr.length; i++) {
    arr

}

console.info('Breaking loop');
for (let i = 0; i < 10; i++) {
    console.log(i)
    i++
    if (i == 5) break; {//ca arrete a partir de 5 
        console.log(i);
    }
    if (i % 2 == 0) continue; {
        console.log(i);
    }
}
