console.log("probando")


// En JS, hacer ; es completamente opcional en el 99% de los casos


// FUNCTIONS


/* 

- Declaración de la funcion:

function nombreDeLaFuncion( opcionalmente hay argumentos ) {
  los argumentos son valores que se usan dentro de la funcion

  habrá multiples lineas de código que realizan la acción 


  opcionalmente tendrá un return => un valor que requerimos fuera de la funcion. Algo que la función debe devolver

}


- Invocar o llamar la función

nombreDeLaFuncion( opcionalmente unos parametros )

*/


function saludarAUnaPersona( username ) {
  // los argumentos son como variables internas para usar informacion
  // let username = "Jorge"; // esto ocurre detras de camaras en JS
  console.log(username)

  console.log( `Hola ${username}, como estas hoy?` )
  // console.log( "Bienvenido a esta sección de la pagina" )
  // let variable = "patata"
  // console.log( "No olvide visitar nuestros otros lugares" )
  // console.log(variable)

}

// saludarAUnaPersona( "Jorge" ) // activar la funcion

// console.log("UNA EJECUCION DIFERENTE")

// saludarAUnaPersona( "Oriol" )
// saludarAUnaPersona( "Meri" )


for (let i = 0; i < 10; i++) {
  saludarAUnaPersona()
}


function sumarDosNumeros(num1, num2) {
  let sum = num1 + num2;
  console.log(sum)

  return sum

}



let result1 = sumarDosNumeros(20, 15)
let result2 = sumarDosNumeros(10, 2)

// que pasa si quiero multiplicar los dos resultados
console.log("desde fuera de la funcion", result1)
console.log( result1 * result2 )



// Example

let staff1 = "jorge";
let staff2 = "juliette"

// let capitalized1 = staff1[0].toUpperCase() + staff1.slice(1)

function capitalize( name ) {

  let nameCapitalized = name[0].toUpperCase() + name.slice(1)
  return nameCapitalized

}

// console.log( capitalize(staff1) )

console.log(`Nuestro staff está conformado por ${capitalize(staff1)} y ${capitalize(staff2)}. Siempre para ayudarlos`)




// ARRAYS


/* 

[ elemento1, elemento2, elemento3, .... ]

*/



let unArray = [ "hola", 20, true, undefined, null, [ "patata" ], { name: "Jorge" }, function() {/* algun codigo*/ } ]

console.log(unArray)


let cities = [ "Valencia", "Barcelona", "Sevilla", "Tarragona", "Madrid", "Granada", "Girona" ]

console.log( cities )

// la cantidad de elementos que hay del array
console.log( cities.length )

// quiero el primer elemento del array
console.log( cities[0] )


// quiero el primer caracter de el primer elemento del array
console.log( cities[0][0] )

console.log( cities[0].slice(0,3) )


// quiero el ultimo elemento del array
console.log( cities.length - 1 )
console.log( cities[cities.length - 1] )


// quieremos el ultimo caracter de el ultimo elemento del array
console.log(cities[cities.length - 1][cities[cities.length - 1].length - 1])

let ultimoElemento = cities[cities.length - 1]
console.log(ultimoElemento)
let ultimoCaracter = ultimoElemento[ultimoElemento.length - 1]
console.log(ultimoCaracter)


// METODOS de ARRAYS


// indexOf e includes

console.log( cities.indexOf("Madrid") ) // 4
console.log( cities.indexOf("Berlin") ) // -1


console.log( cities.includes("Tokyo") ) // false
console.log( cities.includes("Barcelona") ) // true


let result = cities.includes("Barcelona") // retornan un valor
console.log(result)


// slice()

let someCities = cities.slice(1, 3)
console.log(someCities)


// split y join
// convertir strings en arrays y viceversa

let string = "hola mundo como estas";

// let algo = string.split("") // el argumento es el separador
let algo = string.split("o") // el argumento es el separador
console.log(algo)

let joinedCities = cities.join(" - ")
console.log(joinedCities)



// MUTABILIDAD Y OTROS METODOS DE ARRAYS



let someString = "hola"


console.log( someString[0] )

someString[0] = "H"; // esto lo ignoro

console.log(someString)

// .TODOS los valores primitivos de JS son INMUTABLES



let friends = [ "Ross", "Chandler", "Phoebe", "Rachel", "Joey", "Monica" ]

console.log(friends[0])

let newFriend = "Mike"

friends[0] = newFriend; // esto si lo procesa

console.log(friends)


// En JS, los tipo de data complejos (objetos) SI son MUTABLES.

console.log(friends.slice(2, 3))
console.log(friends)


// aunque los arrays son MUTABLES, eso no significa que todos los metodos en array modifican el original


console.log( friends.pop() ) // remueve el ultimo del array
// pop y otros metodos similares hacen dos cosas:
// 1. REMUEVE el ultimo del array
// 2. RETORNA el elemento removido

console.log(friends)

// console.log( friends.shift() )
// let removedElement = friends.shift()
friends.shift() // la accion ocurre aunque no almacenemos el valor retornado
console.log("despues del shift", friends)


friends.push( "Janice" )
console.log("despues del push", friends)


friends.unshift( "Gunther" )
console.log("despues del unshift", friends)


// splice() // NO CONFUNDIRLO CON SLICE

friends.splice(1, 0, "Emily", "Robert")
console.log("despues del splice", friends)



let removedLastElement = friends.pop()
friends.splice(4, 0, removedLastElement)
console.log(friends)



// LOOPS en ARRAYS


let arrayOfNumbers = [4, true, 10, "hola", 7, 20, "patata", false]

// 1. Remover todos los elementos del array que no sean numeros
// 2. Almacenar todos esos elementos en otro array

// CHECK condicional para verificar si es numero o no
// CHECK usar un typeof
// CHECK crear variable nuevo
// CHECK usamos push para añadir elementos

let onlyNumbers = [];
let impostors = [];

//                            8
for (let i = 0; i < arrayOfNumbers.length; i++) {

  // console.log("i", i)
  // console.log( "el elemento es:", arrayOfNumbers[i] )

  if (typeof arrayOfNumbers[i] === "number") {
    // console.log(arrayOfNumbers[i], "es un numero")
    onlyNumbers.push( arrayOfNumbers[i] )
  } else {
    impostors.push( arrayOfNumbers[i] )
  }


}

console.log(onlyNumbers)
console.log(impostors)



// REFERENCIAS

let num1 = 20;
let num2 = 20;

console.log(num1 === num2)

let someArr = [2, 10, 5]; // ref. 1234
let someArr2 = [2, 10, 5]; // ref. XZAS

// for (let i = 0; i < someArr.length; i++) {
//   if  (someArr[i] === someArr2[i]) {
//     console.log("es igual")
//   } else {
//     console.log("el elemento no es igual")
//   }
// }

console.log(someArr === someArr2) // false. ref. 1234 === ref. XZAS false
// en JS, los valores primitivos se comparan por su valor.
// en JS, los objetos se comparan por su referencia.

// JSON.stringify() => convierte una data en JS a su representación en string.

console.log( JSON.stringify( someArr ) === JSON.stringify( someArr2 ) )



let someArr3 = someArr; // ref. 1234
// esta linea es algo que nosotros como desarrolladores NUNCA deberiamos hacer
// JS realiza esta operacion automaticamente en algunos casos

console.log(someArr3)
someArr3.pop()

console.log("someArr3", someArr3)
console.log("someArr", someArr)




// crear una funcion que busque en un array, todos los nombres que empiecen por una letra especifica.
// de array busca todos con "a"
// de array busca todos con "p"
// de otro array busca todos con "h"

function allNamesThatStartWith( arrayOfNames, letter ) {
  // console.log(arrayOfNames, letter)
  // let arrayOfName = array;
  // let letter = "a"

  // Creamos una clausula de guardia
  if (arrayOfNames.length === 0) {
    return "No hay nombres en el array"
    // cada vez que JS consiga un return en la funcion. Deja de ejecutar el codigo que continue.
  }


  let namesFound = [];

  for (let i = 0; i < arrayOfNames.length; i++) {
    // console.log(arrayOfNames[i])
    if (arrayOfNames[i].startsWith(letter) === true) {
      // console.log(`${arrayOfNames[i]} empieza en ${letter}`)
      namesFound.push(arrayOfNames[i])
    }
  }

  // console.log(namesFound)
  return namesFound

}

// ejemplo.
let array = ["josep", "oriol", "meri", "adri", "pablo", "fran", "jorge"]
console.log( allNamesThatStartWith(array, "a") )// ["adri"]
console.log( allNamesThatStartWith(array, "j") )// ["josep", "jorge"]
console.log( allNamesThatStartWith(["jorge", "juliette"], "x") )// []

console.log( allNamesThatStartWith( [], "a" ) )