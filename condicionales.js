
///Variables
let helado = 'Fresa';   // String
const pastel = 'dos leches'; //String
let count = 1; //Numerica
let estado = true; // Booleana
let edades = [0,10,20,30,40,50]; //Array


/////Condicionales
// IF

if (helado == 'Fresa'){
    console.log(helado)
}else{
    helado = 'Ron Pasas'
    console.log(helado)
}

//Ternario

helado == 'Fresa' ? console.log(helado) : console.log('Otro helado');

//LOOPS bucles

console.log('While')
while (count < 10) {
    console.log(count);
    count +=1;
}

count = 1
console.log('do While')
do {
    console.log(count);
    count++;
  } while (count < 5)

  console.log('For')
for (count= 0; count < 10; count += 2) {
  console.log(count);
}