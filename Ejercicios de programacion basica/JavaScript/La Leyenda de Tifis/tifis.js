var tablero, direccion; 

var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var fondo = {
    imagenURL: "fondo.png",
    imagenOK: false
};

var tifis = {
    x: 100,
    y: 100,
    frenteURL: "diana-frente.png",
    frenteOK: false,
    atrasURL: "diana-atras.png",
    atrasOK: false,
    derURL: "diana-der.png",
    derOK: false,
    izqURL: "diana-izq.png",
    izqOK: false,
    velocidad: 20
};

var liz = {
    lizURL: "liz.png",
    lizOk: false, 
    x: 400,
    y: 200
};


function inicio()
{
    var canvas = document.getElementById("campo");
    tablero = canvas.getContext("2d");

    fondo.imagen = new Image();
    fondo.imagen.src = fondo.imagenURL;
    fondo.imagen.onload = confirmarFondo;

    tifis.frente = new Image();
    tifis.frente.src = tifis.frenteURL;
    tifis.frente.onload = confirmarFrente;

    tifis.atras = new Image();
    tifis.atras.src = tifis.atrasURL;
    tifis.atras.onload = confirmarAtras;

    tifis.izq = new Image();
    tifis.izq.src = tifis.izqURL;
    tifis.izq.onload = confirmarIzq;

    tifis.der = new Image();
    tifis.der.src = tifis.derURL;
    tifis.der.onload = confirmarDer;

    liz.lizy = new Image();
    liz.lizy.src = liz.lizURL;
    liz.lizy.onload = confirmarLiz;

    document.addEventListener("keydown", teclado);

}

function teclado(datos)
{
     //Guardo en "codigo" el numero de la tecla oprimida
    var codigo = datos.keyCode;

     if(codigo == teclas.UP)
     {
        tifis.y -= tifis.velocidad;
     }

     if(codigo == teclas.DOWN)
     {
        tifis.y += tifis.velocidad;
     }  
     
     if(codigo == teclas.LEFT)
     {
        tifis.x -= tifis.velocidad;
     }  
     
     if(codigo == teclas.RIGHT)
     {
        tifis.x += tifis.velocidad;
     }
     direccion = codigo;
     dibujar();
}
function confirmarLiz()
{
    liz.lizOk = true;
    dibujar();
} 
function confirmarFondo()
{
    fondo.imagenOk = true;
    dibujar();
} 
function confirmarFrente()
{
    tifis.frenteOk = true;
    dibujar();
} 
function confirmarAtras()
{
    tifis.atrasOk = true;
    dibujar();
} 
function confirmarIzq()
{
    tifis.izqOk = true;
    dibujar();
} 
function confirmarDer()
{
    tifis.derOk = true;
    dibujar();
} 
function dibujar()
{
    //Capa 1: Fondo
    if(fondo.imagenOk == true)
    {
        tablero.drawImage(fondo.imagen, 0, 0);
    }
    //Capa 2: Tifis
    var tifiDibujo = tifis.frente;
    if(tifis.frenteOk && tifis.atrasOk && tifis.izqOk && tifis.derOk)
    {
        if(direccion == teclas.UP)
        {
            tifiDibujo = tifis.atras;
        }
        if(direccion == teclas.DOWN)
        {
            tifiDibujo = tifis.frente;
        }
        if(direccion == teclas.LEFT)
        {
            tifiDibujo = tifis.izq;
        }
        if(direccion == teclas.RIGHT)
        {
            tifiDibujo = tifis.der;
        }
        tablero.drawImage(tifiDibujo, tifis.x, tifis.y);
    }
    //Capa 3: Liz
    //Como lizOk es booleana (verdadera o falsa), no necesito comparar
    if(liz.lizOk)
    {
        tablero.drawImage(liz.lizy, liz.x, liz.y);
    }
}