/*
Manejo de rrores en java Script
*/
 try{
    console.log("En el try se agrega el codigo a evaluar")
 }catch(eror){
    console.log("Catch, captura cualquier error surgido en el Try")
    console.log(error   )
 }
 finally{
    console.log("Se ejecuta siempre al final de una sentencia try-catch")
 }

/*El siguiente codigo es un ejemplo del uso de un bloque try-catch en JavaScript para manejar errores.

En este código, el bloque try contiene algún código que multiplica una variable numero por sí misma. Antes de hacer la multiplicación, comprueba si numero no es un número usando la  función isNaN. Si numero no es un número, arroja un error al usar la  declaración throw con un mensaje personalizado 'El caracter introducido no es un numero'.

Si se arroja un error dentro del bloque try, el bloque catch detectará el error y ejecutará su código. En este caso, el bloque catch registra un mensaje que incluye el mensaje de error en la consola.

Entonces, en resumen, este código generará el resultado de multiplicar numero por sí mismo si numero es un número, y generará un mensaje de error si numero no es un número.
*/

 // Example
 try{
    let numero = 10
    if(isNaN(numero)){
        throw new Error("El caracter introducido no es un numero")
    }
    console.log(numero*numero)
 }
 catch(error){
    console.log(`Se produjo el siguiente error: ${error}`)
 }

/*Se puede utilizar la declaración finally en JavaScript para realizar cualquier tarea necesaria que deba ocurrir, independientemente de si se produce o no una excepción. Por ejemplo, puede usarse para cerrar una conexión de base de datos o para liberar recursos que se han reservado dentro del bloque try.*/
