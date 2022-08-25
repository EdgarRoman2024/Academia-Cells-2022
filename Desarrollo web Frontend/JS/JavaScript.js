////////////////////////GRAMATICAS Y TIPOS//////////////////////
//////////-------------VARIABLES------------///////////////
var a;
console.log('El valor de a es ' + a); // El valor de a es undefined

console.log('El valor de b es ' + b); // El valor de b es undefined
var b;
// Esto puede desconcertarte hasta que leas 'Elevación de variable' a continuación

console.log('El valor de c es ' + c); // Error de referencia no detectado: c no está definida

let x;
console.log('El valor de x es ' + x); // El valor de x es undefined

console.log('El valor de y es ' + y); // Error de referencia no detectada: y no está definida
let y;

/////////-----------NUMEROS----------//////////////
x = 'La respuesta es ' + 42 // "La respuesta es 42"
y = 42 + ' es la respuesta' // "42 es la respuesta"

'1.1' + '1.1' // '1.11.1'
(+'1.1') + (+'1.1') // 2.2
// Nota: los paréntesis se agregan para mayor claridad, no son necesarios.


///////-----------AREGLOS LITERALES----/////////
let coffees = ['French Roast', 'Colombian', 'Kona'];


//////-----------OBJETOS LITERALES--------////////7
var sales = 'Toyota';

function carTypes(name) {
  if (name === 'Honda') {
    return name;
  } else {
    return "Lo sentimos, no vendemos " + name + ".";
  }
}

var car = { myCar: 'Saturn', getCar: carTypes('Honda'), special: sales };

console.log(car.myCar);   // Saturn
console.log(car.getCar);  // Honda
console.log(car.special); // Toyota


//////////////////////Control de flujo y manejo de errores//////////////////////7
////////////////////-----Condiciones-----////////////////////////////
function checkData() {
    if (document.form1.threeChar.value.length == 3) {
      return true;
    } else {
      alert(
          'Introduce exactamente tres caracteres. ' +
          `${document.form1.threeChar.value} no es válido.`);
      return false;
    }
  }
/////////---------SWITCH------------////////
var fruittype = "Oranges";
  switch (fruittype) {
    case 'Oranges':
      console.log('Las naranjas cuestan $0.59 la libra.');
      break;
    case 'Apples':
      console.log('Las manzanas cuestan $0.32 la libra.');
      break;
    case 'Bananas':
      console.log('Los plátanos cuestan $0.48 la libra.');
      break;
    case 'Cherries':
      console.log('Las cerezas cuestan $3.00 la libra.');
      break;
    case 'Mangoes':
      console.log('Los mangos cuestan $0.56 la libra.');
      break;
    case 'Papayas':
      console.log('Los mangos y las papayas cuestan $2.79 la libra.');
      break;
    default:
     console.log(`Lo sentimos, no tenemos ${fruittype}.`);
  }
  console.log("¿Hay algo más que quieras?");
