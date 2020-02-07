function descuento(numero) {
    let factorial = null;
    let predeterminado = null;
    if (numero == 0) {
        return 1;
    }
    for (i = numero; i >= 1; i--) {
        if (numero == i) {
            console.log("iteracion saltada");
        }else   {
            numero *= i;
            factorial = numero * i;
        }
    }
    return factorial;
}
console.log(descuento(6));