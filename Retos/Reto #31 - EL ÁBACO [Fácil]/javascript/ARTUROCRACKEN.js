/*
 * Crea una función que sea capaz de leer el número representado por el ábaco.
 * - El ábaco se representa por un array con 7 elementos.
 * - Cada elemento tendrá 9 "O" (aunque habitualmente tiene 10 para realizar operaciones)
 *   para las cuentas y una secuencia de "---" para el alambre.
 * - El primer elemento del array representa los millones, y el último las unidades.
 * - El número en cada elemento se representa por las cuentas que están a la izquierda del alambre.
 *
 * Ejemplo de array y resultado:
 * ["O---OOOOOOOO",
 *  "OOO---OOOOOO",
 *  "---OOOOOOOOO",
 *  "OO---OOOOOOO",
 *  "OOOOOOO---OO",
 *  "OOOOOOOOO---",
 *  "---OOOOOOOOO"]
 *  
 *  Resultado: 1.302.790
 */

// 1.302.790
const abaco1 = 
[
"O---OOOOOOOO",
"OOO---OOOOOO",
"---OOOOOOOOO",
"OO---OOOOOOO",
"OOOOOOO---OO", 
"OOOOOOOOO---",
"---OOOOOOOOO"]

// 3.400.585
const abaco2 = 
[
"OOO---OOOOOO",
"OOOO---OOOOO",
"---OOOOOOOOO",
"---OOOOOOOOO",
"OOOOO---OOOO", 
"OOOOOOOO---O",
"OOOOO---OOOO"]

function leerAbaco(abaco) {
  // Validations
  if (typeof abaco !== "object" || abaco.length !== 7) {
    console.error("El abaco debe ser un array de 7 elementos.");
  }
  let result = "";

  // iterate every element in abaco
  for (let element = 0; element < abaco.length; element++) {

    // initialize variable number to store current element's value.
    let number = 0;

      // iterate every character in element to determine element's value.
      for (let j = 0; j < abaco[element].length; j++) {
        if (abaco[element][j] !== "-") {
          number += 1;
        } else {
          break;
        }
      }

      // add value to result.
      result += number;
    }
    console.log(`Resultado: ${result}`);
}

leerAbaco(abaco1);
leerAbaco(abaco2);
