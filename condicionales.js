
///Variables
let helado = 'Fresa';   // String
const pastel = 'dos leches'; //String
let count = 1; //Numerica
let estado = true; // Booleana
let edades = [0,10,20,30,40,50]; //Array
let dia = 3;
let diaNombre;

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
///////////////////////////////////// While
console.log('While')
while (count < 10) {
    console.log(count);
    count +=1;
}

//////////////////////////////////// Do While
count = 1
console.log('do While')
do {
    console.log(count);
    count++;
  } while (count < 10)

//////////////////////////////////// For
console.log('For')
for (count= 0; count < 10; count += 1) {
  console.log(count);
}

//////////////////////////////////// Switch
const fecha = new Date();
console.log(fecha);
dia = fecha.getDay();

switch (dia) {
  case 1:
      diaNombre = 'Lunes';
      break
  case 2:
      diaNombre = 'Martes';
      break;
  case 3:
      diaNombre = 'Miercoles';
      break;
  case 4:
      diaNombre = 'Jueves';
      break
  case 5:
      diaNombre = 'Viernes';
      break;
  case 6:
      diaNombre = 'Sabado';
      break;
  case 7:
      diaNombre = 'Domingo';
      break;
  default:
    diaNombre = 'Dia invalido';
}
console.log(diaNombre)

//FUNCIONES
/// basica
function saludar(nombre){
  console.log('Hola Mundo Millonario soy '+ nombre);
}

saludar('Ismael');
// con return
function sumar (numero1,numero2){
  return numero1 + numero2;
}
let valor = sumar(10,20)
console.log(valor);

//almacenar funcion en una variable
let resultado = sumar
//funcion como parametro de otr funcion

function sumar2(numero1, numero2, sumar){
    return numero1 + numero2 + sumar(10,20)
}

let res = sumar2(100,200,sumar);
console.log(res);
//// return de funciones desde funcioines
function comparar(valor){
  return function (a, b) {
  let x = a[valor], y = b[valor];
  if (x > y) {
    return 1;
  } else if (x < y) {
    return -1;
  } else {
    return 0;
  }
};

}
let productos = [
  { nombre: 'Iphone', valor: 1200 },
  { nombre: 'Motorola', valor: 2000 },
  { nombre: 'Kyocera', valor: 3000 },
  { nombre: 'Siemens', valor: 1500 },
  { nombre: 'Nokia', valor: 800 },
  { nombre: 'Samsung', valor: 900 }
]
productos.sort();
console.table(productos);

