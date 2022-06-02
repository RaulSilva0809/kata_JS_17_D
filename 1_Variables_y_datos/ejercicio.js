// Variables

// Guarda en variables el nombre de las siguientes mascotas:

// 1. Pedrito
// 2. Rufo
// 3. Chancla

// Muestra en consola, accediendo a las variables, un mensaje como el siguiente:
// "Mis mascotas son Pedrito, Rufo y Chancla. Les quiero mucho"

// Input y Output

// Pedir mediante prompts el nombre de dos mascotas y mostrar en consola un mensaje como el siguiente:

// "Quiero mucho a mis mascotas mascota1 y mascota2"

// NOTA: mascota1 y mascota2 corresponden a los nombres introducidos mediante prompts

// Conversión de Tipos de Datos

// Guarda la cadena de texto "100" en una variable
// Muestra el contenido de esta variable en consola
// Muestra el TIPO DE DATO de esta variable en consola
// Transforma la variable de string a number
// Muestra nuevamente el contenido de esta variable en consola
// ¿Qué diferencias notas al mostrar en consola la variable antes y después de transformarla? ¿Qué es entonces un tipo de dato?


//Variable
console.log('EJERCICIO1');
var masc1 = 'Pedrito';
var masc2 = 'Rufo';
var masc3 = 'Chancla';
console.log("Mis mascotas son " + masc1 + ", " + masc2 + " y " + masc3 + ". Les quiero mucho");

console.log('EJERCICIO2');
var mascota1 = prompt('Introduce el nombre una mascota');
var mascota2 = prompt('Introduce el nombre de una segunda mascota');
console.log("Quiero mucho a mis mascotas " + mascota1 + " y " + mascota2)

console.log('EJERCICIO3');
var num = "100";
console.log(num);
console.log("Tipo de dato de la variable:" + typeof num );
var numTrans = parseInt(num)
console.log(numTrans);
console.log("Tipo de dato de la variable:" + typeof numTrans);