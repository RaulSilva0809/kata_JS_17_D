//Ejercicios de Funciones
// 1.-Hacer una función que convierta pesos a dólares - RETURN
// 2.-Hacer una función que cuente el número de caracteres de una palabra - RETURN
// 3 . -
// Hacer una función que halle el máximo entre dos números - RETURN
// Hacer una función que halle el máximo entre tres números - RETURN
// Hacer una función que calcule el IVA de una cantidad (16%) - RETURN (editado) 
// 4.-Hacer una función para ingresar cualquier letra del alfabeto  - RETURN// y verifique si es vocal o consonante
// 5.-Hacer una función que verifique si un número es positivo o negativo - RETURN
// Funcion y for
// 6.- Hacer una función que imprima todos los números pares entre 1 y 100
// 7.-Hacer una función que halle la suma de todos los números naturales entre 1 y n - RETURN
//8.- Hacer una funcion que imprima una piramide de asteriticos como la siguiente
// *
// **
// ***
// ****
// *****
// ******
// *******
// ********
//EXTRA pasando una altura a la fucnion crea la piramide segun ese alto:
// 0     *         vuelta * 2 + 1
// 1    ***
// 2   *****
// 3  *******
// 4 *********
// 9.- Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.
// https://pastebin.com/Zzk8g7Z6
//10.- Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.



//console.log('EJERCICIO1')
let exchange = prompt('Ingresa MXN y te devolvemos dolares')
//let mxn = 300;

 function change(a) {
   let dolarPrice = 19.59;
   let dollars = a / dolarPrice;
 	// alert(dollars)
   return dollars;
 }
 console.log(change(exchange))

 //console.log('EJERCICIO2')
 function contadorPalabras (palabra){
   if (typeof palabra  !== 'string') {
     return 'Tienes que ingresar una palabra'
   }
   // para javascript un sting es un objeto iterable
   let numeroDePalabras = palabra.length
   return numeroDePalabras
 }
 console.log(contadorPalabras(10))


 //console.log('EJERCICIO3')
//podemos usar Math.min y Math.max
function Maximo2Num(a, b){
   let respuesta;
  if(a < b){
      respuesta = a + ' Es menor que: ' + b;
       return respuesta; 
   } else if(a > b){
       respuesta = a + ' Es mayor que: ' + b;
      return respuesta; 
  }else if(a === b){
      respuesta = a + ' Es igual que: ' + b;
       return respuesta; 
  }
 } 
 console.log(Maximo2Num(9, 7));

 //console.log('EJERCICIO4')
 function verificarLetra(letra) {
   let vocales = ['a', 'e', 'i', 'o', 'u']
   let letraMinuscula = letra.toLowerCase()
   if (vocales.includes(letraMinuscula)){
      return `La letra ${letra} es una vocal`
   } else {
     return `La letra ${letra} es una consonante`
   }
 }
  console.log(verificarLetra('e'))


 //***** console.log('EJERCICIO5')***** 
 function num(a) {
   if (a > 0) {
       return "positivo"
   } else if (a == 0) {
       return "Es igual a 0"
   } else {
       return "negativo"
   }
 }
  var numero = prompt("Ingresa tu numero")
 console.log(num(numero))


//console.log('EJERCICIO6')
for(let i = 1; i < 51; i++){
    console.log(i * 2);
}
//console.log('EJERCICIO7')
function factorial(a) {
if (typeof Number(a) !== 'number'){
         return 'Esto es un string'
   }
   let resul = 0
       for (let i = 1; i <= a; i++) {
               resul =  resul +i
   }
   return resul
 }
    
 var num = prompt("Numeros a sumar")
 console.log(factorial(num))

//console.log('EJERCICIO8')
//console.log('EJERCICIO9')
let pokemonesArray = [
    'bulbasaur',
    'ivysaur',
    'venusaur',
    'charmander',
    'charmeleon',
    'charizard',
    'squirtle',
    'wartortle',
    'blastoise',
    'caterpie',
    'metapod',
    'butterfree',
    'weedle',
    'kakuna',
    'beedrill',
    'pidgey',
    'pidgeotto',
    'pidgeot',
    'rattata',
    'raticate',
    'spearow',
    'fearow',
    'ekans',
    'arbok',
    'pikachu',
    'raichu',
    'sandshrew',
    'sandslash',
    'nidoran-f',
    'nidorina',
    'nidoqueen',
    'nidoran-m',
    'nidorino',
    'nidoking',
    'clefairy',
    'clefable',
    'vulpix',
    'ninetales',
    'jigglypuff',
    'wigglytuff',
    'zubat',
    'golbat',
    'oddish',
    'gloom',
    'vileplume',
    'paras',
    'parasect',
    'venonat',
    'venomoth',
    'diglett',
    'dugtrio',
    'meowth',
    'persian',
    'psyduck',
    'golduck',
    'mankey',
    'primeape',
    'growlithe',
    'arcanine',
    'poliwag',
    'poliwhirl',
    'poliwrath',
    'abra',
    'kadabra',
    'alakazam',
    'machop',
    'machoke',
    'machamp',
    'bellsprout',
    'weepinbell',
    'victreebel',
    'tentacool',
    'tentacruel',
    'geodude',
    'graveler',
    'golem',
    'ponyta',
    'rapidash',
    'slowpoke',
    'slowbro',
    'magnemite',
    'magneton',
    'farfetchd',
    'doduo',
    'dodrio',
    'seel',
    'dewgong',
    'grimer',
    'muk',
    'shellder',
    'cloyster',
    'gastly',
    'haunter',
    'gengar',
    'onix',
    'drowzee',
    'hypno',
    'krabby',
    'kingler',
    'voltorb'
  ]
  
    function pokemonesNumero(n) {
  
      // el numero ingresado por el usuario no debe ser mayor al array 
  
      // guardar los resultados en otro array y retornarlo
  
  
      for (let i = 1; i <= n; i++ ){
        if (i % 5 === 0) {
          console.log(pokemonesArray[i])
        }
      }
    }
  
    console.log(pokemonesNumero(100))
//console.log('EJERCICIO10')
let randomArreglo = [4,'dos',8,'tres',5,9,1,'cero']

function typeofArrego(arreglo) {

  let numeros = []

  for (let i = 0; i < arreglo.length; i++){    
      if (typeof arreglo[i] === 'number') {
        numeros.push(arreglo[i])
      }
    }   
     return numeros
  }
  console.log(typeofArrego(randomArreglo))