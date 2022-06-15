// Ejercicios IF-ELSE
// 1. Solicitar al usuario que responda a la pregunta ("¿Eres bellisimo/a?"), en caso de contestar sí, responder "Ciertamente", en caso de contestar no, responder: "No te creo".
// 2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de "x número es divisible entre 2" o "x núm
// 3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.    
// 4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir "Ganaste un premio", en caso contrario mostrar el número y el mensaje "Lo sentimos, sigue participando".
// 5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.
// 6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.
// 7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.
// 8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima "reprobado" si la calificación es inferior a 6, "regular" si está entre 6 y 8, "bien" si es 9, y por último, "excelente" si es 10.
// 9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija.
// El helado sin topping cuesta 50 MXN.
// El topping de oreo cuesta 10 MXN.
// El topping de KitKat cuesta 15 MXN.
// El topping de brownie cuesta 20 MXN.
// En caso de no disponer del topping solicitado por el usuario, el programa le indicará "no tenemos este topping, lo sentimos." y a continuación le informará el precio del helado sin ningún topping.
// 10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.
// El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual:
// Course: $4999 MXN
// Carrera $3999 MXN
// Master: $2999 MXN
// Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
// Beca Facebook: 20% de descuento.
// Beca Google: 15% de descuento.
// Beca Jesua: 50% de descuento.
// Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el curso elegido, tomando en cuenta las siguientes duraciones:
// Course: 2 meses
// Carrera 6 meses
// Master: 12 meses
// 11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
// Si el vehículo es "coche", el precio kilometro ha de ser 0.20, si es "moto" ha de ser 0.10 y si es "autobús" 0.5. 
// Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué: 
// total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.


//console.log(EJERCICIO1);
var respuestaBellisimo = prompt('¿Eres bellisimo/a?');
if(respuestaBellisimo === 'sí') {
     console.log('Ciertamente');
  } else if(respuestaBellisimo === 'no') {
     console.log('No te creo');
  } else {
      console.log('no entendí tu respuesta');
  }
  
  
//console.log(EJERCICIO2);
 var numDiv = Number(prompt('Ingresa un número'));
 // % - modulo: nos ayuda a obtener el residuo de una división %2 - 0
  if(numDiv%2 === 0) {
      console.log(`${numDiv} es divisible entre 2`)
  } else {
      console.log(`${numDiv} NO es divisible entre 2`)
  }
  
  
//console.log(EJERCICIO3);
var numParIm = Number(prompt('Intriduce un numero'));
 if(numParIm%2==0){    
     alert("El número "+numParIm+" es par");
 }else{
    alert("El número "+numParIm+" es impar")
};


//console.log(EJERCICIO4);
var numGanador =  Number(prompt('Introduce un numero:'));
 if (numGanador === 1000 ){
     alert("Ganaste un premio")
 }else{
     alert("Lo sentimos, sigue participando")
 }
 
 
//console.log(EJERCICIO5);
var numMen1 = Number(prompt('Introduce el primer numero'));
var numMen2 = Number(prompt('Introduce el segundo numero'));
 if(numMen1 > numMen2){
     alert(`El numero ${numMen2} es el menor`)
 }else{
     alert(`El numero ${numMen1} es el menor`)
 }
 
 
//console.log(EJERCICIO6);
 var numMay1 = Number(prompt('Introduce el primer numero'));
 var numMay2 = Number(prompt('Introduce el segundo numero'));
 var numMay3 = Number(prompt('Introduce el tercer numero'));
 if(numMay1 >= numMay2 && numMay1 >= numMay3) {
     alert(`El numero ${numMay1} es el mayor`);
}
 else if (numMay2 >= numMay1 && numMay2 >= numMay3) {
    alert(`El numero ${numMay2} es el mayor`);
 }
else {
     alert(`El numero ${numMay3} es el mayor`);
 }


//console.log(EJERCICIO7);
 var dia = prompt('Ingresa un dia de la semana:');
 if (dia === 'lunes') {
     alert(`Hoy es ${dia}, es el primer día de la semana`)
 }else if(dia === 'viernes'){
     alert(`Hoy es ${dia},hoy empieza la fiesta`)
 }else if(dia === 'sabado'){
   alert(`Hoy es ${dia},descansa casi comenzamos la semana`)
}else if(dia === 'domingo'){
     alert(`Hoy es ${dia},descansa casi comenzamos la semana`)
 }else{
     alert(`Hoy es ${dia},ombligo de semana`)
}



//console.log(EJERCICIO8);
  var calif = Number(prompt('Introduce tu calificacion entre el 1 y el 10'));
  if (calif < 11 ){
      if( calif  < 7){
          alert('REPROBADO');
      }else if(calif === 7 || calif === 8){
          alert('REGULAR');
      }else if( calif === 9){
          alert('BIEN');
      }else if (calif === 10){
          alert('EXCELENTE')
      }else{
          alert('Numero fuera del rango')
      }
  }else{
      alert('Numero fuera del rango')
  }


//console.log(EJERCICIO9);
var topping = prompt('Con que topping guastaria su helado:');
if(topping === 'oreo'){
    alert('Total: $60');
}else if(topping === 'kitkat'){
    alert('Total: $65');
}else if(topping === 'brownie'){
    alert('Total: $70');
}else{
    alert('no tenemos este topping, lo sentimos.');
    alert('El helado sin topping cuesta 50 MXN.');
}


//console.log(EJERCICIO10);
 var nivel = prompt('Qué nivel de curso estás tomando? Course/Carrera/Master');
 var beca = prompt('Cuentas con alguna beca? Fb/Google/Jesua/No')
  var descuento = 0;
  if (beca === 'Fb') {
      descuento = 20;
  } else if (beca === 'Google') {
      descuento = 15;
  } else if (beca === 'Jesua') {
      descuento = 50;
  }
  if(nivel === 'Course') {
   var mensualidad = 4999 - 4999*descuento/100;
   var totalCurso = mensualidad*2;
  } else if (nivel === 'Carrera') {
      var mensualidad = 3999 - 3999*descuento/100;
      var totalCurso = mensualidad*6;
  } else if (nivel === 'Master') {
      var mensualidad = 2999 - 2999*descuento/100;
      var totalCurso = mensualidad*12;
  }
  console.log(`Tu curso es ${nivel} y pagarás una mensualidad de $${mensualidad} y un total de $${totalCurso}`);
  
  
//console.log(EJERCICIO11);
var trans = prompt('Que tipo de transporte conduces?:');
var litros = prompt('Cuantos kilometros recorriste?:')
if(trans === 'coche' && litros < 100){
    console.log((0.20 * litros) + 5)
}else if(trans === 'moto' && litros < 100){
     console.log((0.10 * litros)+ 5)
}else if(trans === 'autobus' && litros < 100){
     console.log((0.5 * litros)+ 5)
}else if(trans === 'coche' && litros >= 100){
    console.log((0.20 * litros)+ 10)
}else if(trans === 'moto' && litros >= 100){
     console.log((0.10 * litros)+ 10)
}else if(trans === 'autobus' && litros >= 10){
     console.log((0.5 * litros)+ 10)
}else{
    console.log('Introduce datos correctos');
}