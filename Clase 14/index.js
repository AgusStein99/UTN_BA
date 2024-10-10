//VAR LET CONST

//VAR
    //No hay diferencia entre reasignar y redeclarar
    //Var tiene hoisting: Se puede llamar a var antes de la declaración (undefined).
    //Sólo ocurre con var
    //Hoisting es una mala práctica

/*         
        console.log(nombre) //Hoisting

        console.log(apellido) //Hoisting
        var apellido = null
        console.log(apellido)

        var nombre = 'pepe'
        console.log(nombre)

        console.log(nombre)

        nombre='juan' //Reasignación
        var nombre='juan' //Redeclaración

        console.log(nombre) 
        */

//LET ES6 (javascript moderno) 
//No tiene hoisting, se debe realizar manualmente
//No se puede redeclarar rn un mismo bloque
//Por defecto inicia en undefined
//Se puede reasignar

//Variables globales (Bloque principal)

/* let nombre //Hoisting manual
let edad =70 
console.log(nombre)
nombre = 'pepe'
console.log(nombre)

//Este es el bloque principal
//If (valor) {acción}
//Si el valor es verdadero la acción se ejecuta

if (nombre === 'pepe'){

    //Variable local
    let nombre = 'juan'
    let edad = 80
    edad = 100

    //Esto es un sub-bloque
    console.log(nombre)
    console.log(edad)
    /* console.log('Hola estoy en un segundo bloque') 
}

/* 
MALA PRACTICA
precio = 100
console.log(precio)
 */

/* console.log(nombre)
console.log(edad) */ 

//CONST ES6 (javascript moderno) 
//No tiene hoisting
//No se puede reasignar
//No se puede dar una inicialización por defecto (DEBE INICIALIZARSE)
//No se puede redeclarar en el mismo bloque

// const username {declarar}
//const username = 'pepe' {inicializar}

const username = 'pepe'
console.log(username)


