let a =2;
        let b = new Number(1);
        let c = 7.19
        let d = "5.6"

        console.log(a,b)
        // cuantos numeros decimales
        console.log(c.toFixed(1))
        //parte numerica
        console.log(parseInt(c))
        //parte decimal
        console.log(parseFloat(c))
        // tipo de variable
        console.log(typeof c, typeof d)
        // suma de a + b
        console.log(a+b)
        // concatenacion de la cadena c con d
        // Casting y Parsing
        // parseInt solo sumo la parte entera
        console.log(c+parseInt(d))
        // parseInt lo suma muy bien 
        console.log(c+Number.parseFloat(d))
        // todos los metodos cuelgan del objeto Number
        console.log(c+Number.parseInt(d))
        console.log(c+Number.parseFloat(d))