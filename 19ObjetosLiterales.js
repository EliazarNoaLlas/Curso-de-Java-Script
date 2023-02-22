let nombre = "Kenay"
let edad = 2

// definimos objeto perro
const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function(){
        console.log("GUA GUA")
    }
}
console.log(perro)
perro.ladrar()

// objetos literales ES6

const dog ={
    nombre,
    edad,
    raza : "callejero",
    ladrar(){
        console.log("GUA GUA GUA")
    }
}

console.log(dog)
dog.ladrar()