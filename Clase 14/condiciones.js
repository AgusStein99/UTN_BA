//FUNCIONES NATIVAS

//PopUp con un mensaje
//alert('Hola')

//PopUp con input para enviar datos
//Cuando el usuario le de aceptar, el valor se devolverá//retornará
//Prompt puede devolver String o null
//Prompt devuelve string si el usuario clickea el boton aceptar
//Prompt devuelve null si el usuario clickea el boton cancelar

/* let nombre = prompt('Ingrese su nombre')

if(!nombre){
    alert('ERROR: Debe escribir su nombre')
}

//Else debe ir siempre despues de un if
if (nombre === 'agustin') {
    alert('Usuario ingresado correctamente')
}

else {
alert('Usuario no ingresado')
} */

// let edad = prompt('Dime tu edad')
//NO PUEDE SER 0

//ESTO ES BUENO: ELSE IF ANIDADO
//ELSE IF HELL

/* 
if(!edad){
    alert('Dato no valido')
}

else{
    if(Number(edad) <= 0){
    alert('ERROR NO PUEDE SER 0 O MENOR')
    }
    else{
        if (Number(edad) === 88){
            console.log("La edad no puede ser 88")
        }
        else{
        alert('EDAD INGRESADA CORRECTAMENTE')
        /* alert('Tu edad es ' + edad) */
        //TEMPLATE STRING
        /* alert(`Tu edad es ${edad} buen trabajo 😉`) */
/*         }
    }
    
}   */


//PERO PODRÍA SER MEJOR...

/* if(!edad){
    alert('Dato no válido')
}
else if(Number(edad) <= 0){
    alert('ERROR NO PUEDE SER 0 O MENOR')
}
else if((Number(edad) === 88)){
    alert("La edad no puede ser 88")
}
else if(isNaN(edad)){
    alert('Debe insertar un número')
}
else{
    alert(`Tu edad es ${edad} buen trabajo 😉`)
}
 */
//Bucle WHILE

// while(true)[] ERROR WHILE-TRUE (NO SE DEBE REALIZAR NUNCA)

/* let precio = prompt('Ingrrese el precio')

while(!precio || isNaN(precio)){
    if(precio === null){
        //Corta la ejecución del bucle
        break
    }
    alert('Error dato inválido')
    precio = prompt('ingrese nuevamente')
}

if(precio === null){
    alert('Has cancelado el proceso')
}
else{
alert('Precio ingresado correctamente')
} */

let eresHumano = confirm('Eres un humano')

if(eresHumano){
    alert('Eres humano')
}
else{
    alert('No que miedo')
}