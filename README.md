## Parte 1 OBJETOS LITERALES

En este código se definen dos objetos **`animal`** y **`animal2`** utilizando la sintaxis de objetos literales de JavaScript.

Cada objeto tiene un atributo **`nombre`** con un valor de cadena de texto y un método **`sonar`** que imprime un mensaje en la consola.

Luego, se imprime cada objeto en la consola utilizando el método **`console.log`**.

En resumen, este código crea dos objetos con atributos y métodos básicos y luego los imprime en la consola.

### COMENTARIO

Si se tienen múltiples objetos con los mismos atributos y métodos, la creación de múltiples objetos con código duplicado puede ser problemático para el almacenamiento y el mantenimiento del código.

Una forma de resolver este problema es utilizando la programación orientada a objetos (POO) en JavaScript.

```jsx
const animal = {
    nombre : "Snopy",
    sonar(){
        console.log("Hago un sonido porque estoy vivo");
    }
}
const animal2 = {
    nombre : "Lola Bunny",
    sonar(){
        console.log("Hago un sonido porque estoy vivo");
    }
}
console.log(animal)
console.log(animal2)
```

## Parte 2 POO en Java Script

La función **`Animal`** es una función constructora de objetos en JavaScript. Toma dos parámetros: **`nombre`** y **`genero`**, y crea un objeto con los atributos **`nombre`**, **`genero`**y dos métodos **`sonar`**y **`saludar`**.

```jsx
function Animal(nombre,genero){
    // atributos
    this.nombre = nombre,
    this.genero = genero,
    // Metodos
    this.sonar = function(){
        console.log("Hago sonido porque estoy vivo")
    }
    this.saludar = ()=>{
        console.log(`Hola me llamo ${this.nombre}`)
    }
}
```

## Parte 3 Prototipos

Esta es una alternativa más avanzada para definir objetos en JavaScript utilizando funciones constructoras y prototipos. En esta versión, se definen los atributos **`nombre`**y **`genero`**
 como propiedades del objeto **`this`**dentro de la función constructora. En lugar de definir los métodos **`sonar`**y **`saluda`** dentro de la función constructora, se definen en el prototipo de la función constructora **`Animal`**
.

```jsx
function Animal(nombre,genero){
    // atributos
    this.nombre = nombre;
    this.genero = genero;
}
//Metodos
Animal.prototype.sonar = function(){
    console.log("Hago sonido porque estoy vivo")
}
Animal.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre}`)
}
```

## Parte 3 Programacion orientada a objetos

```jsx
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  sonar() {
    console.log("Hago un sonido porque estoy vivo");
  }

  saludar() {
    console.log(`Hola, me llamo ${this.nombre}`);
  }
}

const snoppy = new Animal("Snoppy");
const lolaBunny = new Animal("Lola Bunny");

console.log(snoppy);
console.log(lolaBunny);

snoppy.sonar();
snoppy.saludar();

lolaBunny.sonar();
lolaBunny.saludar();
```

En este ejemplo, se define una clase **`Animal`** con un constructor que toma un parámetro **`nombre`**, y dos métodos **`sonar`** y **`saludar`**. Luego, se instancian dos objetos **`snoppy`** y **`lolaBunny`** de la clase **`Animal`**.

Cada objeto tiene un atributo **`nombre`** y puede invocar los métodos **`sonar`** y **`saludar`** de la clase **`Animal`** utilizando la notación de punto. De esta manera, se puede reutilizar el mismo código en lugar de duplicarlo varias veces.

## Conclusiones

<aside>
👌 Los objetos literales son la forma más simple y directa de crear objetos, pero pueden ser limitados en términos de escalabilidad y reutilización de código.

</aside>

<aside>
🧐 Las funciones constructoras y los prototipos son una forma más avanzada de crear objetos en JavaScript que permiten una mayor reutilización de código y una mejor escalabilidad, pero pueden requerir más conocimientos técnicos.

</aside>

<aside>
👍 Las clases son una adición relativamente nueva a JavaScript y proporcionan una sintaxis más clara y similar a la programación orientada a objetos tradicional, pero todavía utilizan la misma mecánica de prototipos detrás de escena.

</aside>