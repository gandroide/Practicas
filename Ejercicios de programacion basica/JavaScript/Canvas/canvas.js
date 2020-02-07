var dibujo, lienzo;
function inicio()
{
    dibujo = document.getElementById("dibujito");
    lienzo = dibujo.getContext("2d");

    dibujarGrilla(lienzo);

    lienzo.beginPath();
    lienzo.fillStyle = "#00F";
    lienzo.strokeStyle = "#00F";
    lienzo.arc(150,150,100, (Math.PI * 2), false);
    lienzo.fill();
    lienzo.stroke();
    lienzo.closePath();

}

function dibujarGrilla (pony) 
{
    var ancho = 300, alto = 300;
    var linea, punto;
    var anchoLinea = 30;
    var limiteX = ancho / anchoLinea;
    var limiteY = alto / anchoLinea;

    pony.strokeStyle = "#AAA";

    for(linea = 0; linea <= limiteX; linea++)
    {
        punto = linea * anchoLinea;
        pony.beginPath();
        pony.moveTo(punto, 0);
        pony.lineTo(punto, ancho);
        pony.stroke();
        pony.closePath();
    }

    for(linea = 0; linea <= limiteY; linea++)
    {
        punto = linea * anchoLinea;
        pony.beginPath();
        pony.strokeStyle = "#AAA";
        pony.moveTo(0, punto);
        pony.lineTo(alto, punto);
        pony.stroke();
        pony.closePath();
    }
}






















/*
{
    lienzo.moveTo(0,0);
    lienzo.lineTo(300,0);
    lienzo.lineTo(300,300);
    lienzo.lineTo(0,300);
    lienzo.lineTo(0,0);
    lienzo.stroke();

    lienzo.moveTo(100,100);
    lienzo.lineTo(200,100);
    lienzo.strokeStyle = "#F00";
    lienzo.stroke();

    lienzo.beginPath();
    lienzo.fillStyle = "#00F";
    lienzo.strokeStyle = "#00F";
    lienzo.arc(150,150,100, (Math.PI * 2), false);
    lienzo.fill()
    lienzo.closePath();
    lienzo.stroke();
}
function dibujarGrilla (l) 
{
    var ancho = 300, alto = 300;
    var linea;
    var anchoLinea = 30;
    var limiteX = ancho / anchoLinea;
    var limiteY = alto / anchoLinea;

    for(linea = 0; linea <= limiteX; linea++)
    {
        l.beginPath();
        l.strokeStyle = "#AAA";
        l.moveTo(linea * anchoLinea, 0);
        l.lineTo(linea * anchoLinea, 300);
        l.closePath();
        l.stroke();
    }
    for(linea = 0; linea <= limiteY; linea++)
    {
        l.beginPath();
        l.strokeStyle = "#AAA";
        l.moveTo(0, linea * anchoLinea);
        l.lineTo(300, linea * anchoLinea);
        l.closePath();
        l.stroke();
    }
}
*/