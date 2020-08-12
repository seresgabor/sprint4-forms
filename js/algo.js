/*
Összegzés algoritmusa:

összeg = 0
CIKLUS AMÍG van még szám, ADDIG
    szám = következő elem
    összeg = összeg + szám
CIKLUS VÉGE
*/

let numericArray = [1, 3, 2, 5, 4, 7, 6, 9];
let sum = 0;
for (let i = 0; i < numericArray.length; i++) {
    sum += numericArray[i];
}
console.log("Sum: ", sum);


/*
Számlálás algoritmusa:

db = 0
CIKLUS AMÍG van még szám, ADDIG
    szám  = következő elem
    HA igaz a feltétel a számra, AKKOR
        db = db+1
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/
let db = 0;
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] % 2 == 0) {
        db++;
    }
}
console.log("Even numbers: ", db, "db");

/*
Szélsőérték keresés algoritmusa:

legnagyobb = első elem
CIKLUS AMÍG van még szám, ADDIG
    szám = következő szám
    HA szám > legenagyobb, AKKOR
        legnagyobb = szám
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/

let biggest = numericArray[0];
let smallest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
      if (biggest < numericArray[i]) {
          biggest = numericArray[i];
      }
      if (smallest > numericArray[i]) {
          smallest = numericArray[i];
      }
}
console.log("A maximuma: ", biggest);
console.log("A minimuma: ", smallest);

/*
ELdöntés tétele (algoritmusa):

találat = HAMIS
CIKlUS AMÍG van elem ÉS találat = HAMIS, ADDIG
    szám = következő elem
    HA igaz a feltétel, AKKOR
        találat = IGAZ
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/

let find = false;
let found =7;
for (let i = 0; i < numericArray.length && find == false; i++) {
    if (numericArray[i] === found) {
        find = true;
        console.log("A keresett elem '", found, "' megtalálható a tömbben.");
        console.log("Az elem indexe:", i);
        } else if (i == numericArray.length-1 && find == false) { 
        console.log("A keresett elem '", found, "' nincs a tömbben.");
    }
}
console.log("This array contains ", found, ":", find);