const blah = 0; /* we created a constant calling blah
/*num = 1;/* we cant change  a constant value or type thats why its called a constant*/
console.log(blah);

const bool = false;
console.log(bool);

const arr = [0, 2, 3, 4];
// arr=['a',] on peut pas non plus changer les arr ou mettre un arr dans un arr
console.log(arr)
arr[0] = 99;/* on PEUT  UNIQUEMENT les  valeurs du tableau PAS LE TABLEAU EN LUI MEME*/
arr[1] = 'yo';

const obj = {
    name: 'PIka',
    age: 9
};
console.log(obj)
obj.age = 99; /* on peut changer les valeurs attribuer a la variable de l'objet mais PAS l'objet en lui meme*/
console.log(obj)

const ah = null;/* null ets considerer comme un objet et lorsque un objet est considerer comme null ON NE PEUT PAS CHANGER SA PROPERTIES*/
console.log(null);
// nulla.property=0; donc sa la on peut pas 