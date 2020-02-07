//Ejemplo de como construir correctamente un Objeto dentro de JavaScript

function Pokemon(n,v,a)
{
    this.grito = "Pika";
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
    this.gritar = function ()
    {
        alert(this.grito);
    }
}

function inicio()
{
    let rattata = new Pokemon("Rattata", 40, 2);
    rattata.vida = rattata.vida - 13;
}


/*
function pokemon(nombrePokemon, vidaPok, ataPoke)
{
    var estructuraPokemon =
    {
        nombre: nombrePokemon,
        vida: vidaPoke,
        ataque: ataPoke,
        datos: {tipo: "Tierra", debilidad: "Fuego"}
    };
    return estructuraPokemon;
}

var pikachu = Pokemon("Pikachu", 100, 55);
var bulbasaur = pokemon("Bulbasaur", 90, 50);
*/