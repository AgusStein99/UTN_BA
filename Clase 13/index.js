/* OPERADORES ARITMÉTICOS */

/* 

+ CONCATENAR
Solo ocurre cuando hay un string en la operación
Transforma el dato distinto de string a string y devuelve la unión de los dos string. Devuelve string siempre.
Ej: 
'pepe' + null
'pepe' + String(null)
'pepe' + 'null'
'pepenull'

//LOS PROXIMOS 5 OPERADORES DEVEULVEN NUMEROS
//Transforman el dato que no es número en número
//Si algún dato es NaN la operación devuelve NaN


+ SUMAR
Ocurre cuando no hay string

//Strings que solo tienen números pueden transformarse a números
- RESTAR
/ DIVIDIR
% MODULO O RESTO
*

*/

console.log(NaN + '' + Number('null'))
/* Proceso interno
String(NaN) + '' + String(NaN)
'NaN' + 'NaN'
*/
console.log(1 + 7 * 10)
console.log(9 - '1a')

console.log('pepe' + String(null))
console.log('juan'+10)
console.log(true +true)
Number(true) + Number (true)
1 + 1
2

console.log(NaN + 1)
console.log('null' + 1)
console.log(9 + null)
console.log(9 + undefined)

console.log(10/2)
console.log(11/2)
console.log(11%2)
console.log('pepe'%2)

console.log('9' * 1)
console.log(9 * NaN)

console.log(10 - '')
console.log(9*undefined)

console.log(7 * NaN + Number('null')) // NaN

console.log(Number(undefined + 0 + '' + "JUAN")) // NaN

console.log(Number(Boolean(true)) + 0 ) // 1
/* 1 + 1

20 - 1

60 * 3

true * 7

null / 0

'pepe' + 'hola' */


// COMPARADORES
    // SIEMPRE DEVUELVEN BOOLEANOS
    //NULL NO PUEDE SER IGUAL A NADIE EXCEPTO A UNDEFINED U OTRO NULL

    /*
    ==   IGUAL
    ===  ESTRICTAMENTE IGUAL (Compara valor y tipo de dato)
    !=   DISTINTO DE
    !==  ESTRICTAMENTE DISTINTO DE (Compara valor y tipo de dato)
    >    MAYOR A
    <    MENOR A
    >=   MAYOR O IGUAL A
    <=   MENOR O IGUAL A
 */

    console.log(10 == 9 + 1 )
    console.log ((10 ==9) + 1)
    console.log(false + 1)
    console.log(1==true)
    console.log(1=='1')
    console.log(0=='')
    console.log(undefined==0)
    console.log(undefined==NaN)
    console.log(NaN==NaN) //Excepción de JS no se puede comparar con ningún dato. Ni siquiera consigo mismo. Siempre será distinto.
    console.log(null==undefined) //NULL NO PUEDE SER IGUAL A NADIE EXCEPTO A UNDEFINED U OTRO NULL
    console.log(null==null) //NULL NO PUEDE SER IGUAL A NADIE EXCEPTO A UNDEFINED U OTRO NULL

    console.log(1===true)
    console.log(1 != 1)
    console.log('1' != 1)

/* Truthy y Falsy
    TODOS LOS DATOS SE PUEDEN TRANSFORMAR A BOOLEANO
    LOS VALORES TRUTHY SON LOS QUE AL TRANSFORMARSE EN BOOLEANO DEVUELVEN TRUE
    LOS VALORES FALSY SON LOS QUE AL TRANSFORMARSE EN BOOLEAN DEVUELVEN FALSE
*/

/* VALORES FALSY
    0
    ''
    NaN
    Undefined
    Null
    false

TODOS LOS DEMÁS DATOS SON TRUTHYS
*/


/* OPERADORES LÓGICOS
    !  NOT: Devuelve el valor Boolean opuesto al valor negado

    && AND: 
    Selecciona entre dos valores, 
    Si el primer valor es Truthy, devuelve el segundo.
    Si el primer valor es Falsy, devuelve el primero.

    || OR
    Selecciona entre dos valores, 
    Si el primer valor es Truthy, devuelve el primero.
    Si el primer valor es Falsy, devuelve el segundo.
 */

    console.log(!8)
    console.log(!'pepe')

    console.log(!'')
    console.log(7 && 'pepe')

    console.log(10 && false)
    console.log('' && 0)

    console.log(5 || false)
    console.log(0 || 15)

/* PRIORIDAD
    NOT 
    AND
    OR
*/      

/* TABLAS DE LA VERDAD:
    AND:
        true && true   = true
        true && false  = false
        false && true  = false
        false && false = false

    OR:
        true || true   = true
        true || false  = true
        false || true  = true
        false || false = false

*/

console.log(!5 && 'pepe' || false)

/* VARIABLES

    var
    let
    const

 */

    /* 
    cammelCase
    snake_case
    UpperCammelCase
    */

    var nivel = 1000
    nivel = 450
    var condicion = nivel > 400 && nivel < 900
    console.log(condicion)