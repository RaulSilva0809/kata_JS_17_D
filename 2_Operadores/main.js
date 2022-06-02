console.log('operadores')


// operadores matematicos
// +
// concatenar
// template string (ECM16), como operador

console.log("hola" + " " + " " + 'como estas')
console.log("hola", 'como estas')

//para cambiar tipo de una variable
var noEsunNumero = '10'
console.log(typeof noEsunNumero)
console.log(+noEsunNumero)
let Numero = Number(noEsunNumero)
console.log(Numero)


//tipo numero
console.log(typeof noEsunNumero)

let numero = 'pepito';
console.log(+numero)

console.log(10+20)
console.log('10' + '20')

console.log('20' * '5')

//coloca el residuo
console.log(10 % 2)

let numero1 = 10
let numero2 = 9
console.log(numero1 <= numero2)

//= operador de asignacion
let numero3=10
let numero4=20
console.log(numero3 == numero4)


//=== ayuda a saber sin son del mismo tipo
let numero5=10
let numero6='10'
console.log(numero5 === numero6)

// operador de distinto !=
console.log(numero1 != numero2)

//la variable esta declarada pero no tiene ningun valor
let saludo
console.log(saludo)

//null se asigna a una variable que intencionalmente se le agrega este valor
let mensaje = null
console.log(mensaje)

//var puedes reasignar valores y  let no te permite reasignar y te dice que ya esta declarado con un valor 

//operador de asignacion matematica
let numero7=10
console.log(numero+=2)

//ejemplo de tempate string
console.log('el nuevo numero es' + ' ' + numero)
console.log(`el numero es ${numero}`)

//operador and &&
let mensajes=true
let noticias=true
console.log(mensajes && noticias)

//operador or ||
//retorna un true si alguna de las condiciones es verdadera 
let mensajes1 = 10
let numeroDeMensajes = mensajes || 'no hay mensajes'
console.log(numeroDeMensajes)



