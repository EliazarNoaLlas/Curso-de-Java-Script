// Paramestros REST -> infinitos
function sumar(a,b, ...c){
    let resultado = a+b;
    c.forEach(function(n){
        resultado+=n;
    });
    console.log(resultado)
}

sumar(1, 2)
sumar(1, 2, 3)
sumar(1, 2, 3, 4)
sumar(1, 2, 3, 4, 5)