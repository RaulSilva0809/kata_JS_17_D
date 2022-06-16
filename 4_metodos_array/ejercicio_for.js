//EJERCICIOS FOR
// 1.Paco hizo travesuras en el salón y la maestra lo castigó, para poder salir tiene// escribir en el pizarrón todos los números pares  del 1 al 100, ¿puedes ayudarle a Paco a// hacer un algoritmo que haga esto por el? 
// 2.-Escribir todos los números que terminan en 0 y estén entre 2 y 121 



// //EXTRA 3-Joel lleva 5 materias, el quiere saber su promedio al recibir sus calificaciones,// ¿podrías ayudarle a crear un algoritmo que haga eso por el?


//console.log(EJERCICIO1)
for(let i = 1; i < 51; i++){
    console.log(i * 2);
}

//console.log(EJERCICIO2)
function imprimirNumeros(){
  for (let i = 10; i <= 121; i+=10)
     console.log(i)
}
imprimirNumeros()

//console.log(EJERCICIO3)
let calificaciones = [10, 6, 8, 6, 5]
//                    0   1  2  3  4  
// accumulador
 let sumaCalificaciones = 0
 for (let i = 0; i < calificaciones.length; i ++){
   sumaCalificaciones = sumaCalificaciones +  calificaciones[i]
 }

 console.log(`la calificacion de Joel es: ${sumaCalificaciones / calificaciones.length}`)
 console.log('la calificacion es: '+ '  ' + sumaCalificaciones / calificaciones.length)
