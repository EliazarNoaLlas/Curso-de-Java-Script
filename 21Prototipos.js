
// Programacion orientada a Objetos

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

// funcion constructora
/*function Animal(nombre,genero){
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
*/

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

// INSTANCIANDO LOS OBJETOS
const snoppy = new Animal("snoppy", "macho"),
lolabunny = new Animal("LolaBunny", "Hembra")
console.log(snoppy)
console.log(lolabunny)
snoppy.sonar()
snoppy.saludar()
lolabunny.sonar()
lolabunny.saludar()