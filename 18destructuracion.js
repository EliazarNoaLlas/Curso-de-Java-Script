const numeros = [1, 2, 3];

// --sin destructuracion
let uno = numeros[0],
dos = numeros[1],
tres = numeros[2];

console.log(uno, dos, tres)

// --con destructuracion
const [one, two, three] = numeros;
console.log(one, two, three)

// ====================== EN OBJETOS ================
let Persona ={
    nombre:  "Eliazar",
    apellido: "Noa",
    edad: 20
}
let {edad, apellido, nombre}= Persona; // el orden no importa
console.log(nombre, apellido, edad);

// console.log(nombre, apellido, age); => error age: undefined

const numeros1 = [1, 2, 3];
const [dos1, uno1, tres1] = numeros1;
console.log(uno1, dos1, tres1);

const persona = { nombre: 'Juan', edad: 30 };
function imprimirNombreYEdad({ nombre, edad }) {
  console.log(nombre, edad);
}
imprimirNombreYEdad(persona); 