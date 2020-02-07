// PIEDRA, PAPEL, TIJERA, LAGARTO, SPOCK...

function aleatorio(minimo, maximo)
{
  var numero = Math.floor( Math.random() * (maximo - minimo +1) + minimo );
  return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;

var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];

var opcionUsuario;
var opcionMaquina = aleatorio(0,4);

opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2\nLagarto: 3\nSpock: 4", 0);

alert("Elegiste " + opciones[opcionUsuario]);
alert("JavaScript eligió " + opciones[opcionMaquina]);
  
if(opcionUsuario == piedra)
{
  if(opcionMaquina == piedra)
    {
      alert("Empate!");
    }
  else if(opcionMaquina == papel)
    {
      alert("Papel tapa Piedra");
    }
  else if(opcionMaquina == tijera)
    {
      alert("Piedra aplasta Tijera");
    }
  else if(opcionMaquina == lagarto)
    {
      alert("Piedra aplasta Lagarto");
    }
  else if(opcionMaquina == Spock)
    {
      alert("Spock vaporiza Pieda");
    }
}
else if(opcionUsuario == papel)
  {
    if(opcionMaquina == piedra)
      {
        alert("Papel tapa Piedra");
      }
    else if(opcionMaquina == papel)
      {
        alert("Empate!");
      }
    else if(opcionMaquina == tijera)
      {
        alert("Tijera corta Papel");
      }
    else if(opcionMaquina == lagarto)
      {
        alert("Lagarto destroza Papel");
      }
    else if(opcionMaquina == spock)
      {
        alert("Papel desautoriza a Spock");
      }
}
else if(opcionUsuario == tijera)
  {
    if(opcionMaquina == piedra)
      {
        alert("Piedra aplasta Tijera");
      }
    else if(opcionMaquina == papel)
      {
        alert("Tijera corta Papel");
      }
    else if(opcionMaquina == tijera)
      {
        alert("Empate!");
      }
    else if(opcionMaquina == lagarto)
      {
        alert("Tijera decapita Lagarto");
      }
    else if(opcionMaquina == Spock)
      {
        alert("Spock rompe Tijera");
      }
}
else if(opcionUsuario == lagarto)
  {
    if(opcionMaquina == piedra)
      {
        alert("Piedra aplasta Lagarto :(");
      }
    else if(opcionMaquina == papel)
      {
        alert("Lagarto Devora Papel!");
      }
    else if(opcionMaquina == tijera)
      {
        alert("Tijera decapitan Lagarto!");
      }
    else if(opcionMaquina == lagarto)
      {
        alert("Empate!");
      }
    else if(opcionMaquina == spock)
      {
        alert("Lagarto envenena a Spock");
      }
}
else if(opcionUsuario == spock)
  {
    if(opcionMaquina == piedra)
      {
        alert("Spock vaporiza Piedra");
      }
    else if(opcionMaquina == papel)
      {
        alert("Papel desautoriza a Spock");
      }
    else if(opcionMaquina == tijera)
      {
        alert("Spock destruye Tijera");
      }
    else if(opcionMaquina == lagarto)
      {
        alert("Lagarto envenena a Spock");
      }
    else if(opcionMaquina == spock)
      {
        alert("Empate!");
      }
}
else
  {
    ("¿Pos qué carajo?");
  }

  