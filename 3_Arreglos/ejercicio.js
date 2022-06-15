// 1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.
// 2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.
// 3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.

//console.log(EJERCICIO1);
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  // Creo un array para llevar la cuenta de los valores
  let valueAppearances = [];
  
  // inicializo el array con la cuenta de los valores a cero
  for (let index = 0; index < 10; index++) {
    valueAppearances.push(0);
  }
  
  // saco aleatorios un montón de veces
  for (let i = 0; i <= 100; i++) {
    // obtengo el aleatorio entre 2 y 9
    let randomIndex = random(0, 9);
    // incremento las apariciones de este valor
    valueAppearances[randomIndex]++;
  }
  // muestro el array resultante, que debería tener más o menos las mismas apariciones
  // recuerda, para los índices entre 2 y 9
  console.log(valueAppearances);


  //console.log(EJERCICIO2);
  let arrays = prompt('Introduce varias palabras separadas por comas:')
  let arr = arrays.split(',')
  console.log(arr)

  let num = [10,40,30,20,15,5]
  let numform = num.sort((a, b) => a - b )
  console.log(numform);
  console.log(numform[0] + ' Es tu numero menor');
  console.log(numform[5] + ' Es tu numero mayor');