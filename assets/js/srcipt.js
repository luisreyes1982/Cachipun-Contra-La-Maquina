// Definir Constantes

const piedra = 0;
const papel = 1;
const tijeras = 2;

// Definir Variables

var usuario;
var maquina;
var turno;
var opciones1;
var opciones2;

// Cantidad De Turnos

turno =prompt("Ingrese la Cantidad de Partidas que Desea Jugar", 3);

// Creacion Del Bucle For

for(i=0;i<turno;i++) {

    // Eleccion al Azar por Parte de la Maquina

    maquina = Math.floor (Math.random() * 3);

//  Solicitud al Usuario

usuario = prompt("Elija Alguna Opcion : \n Piedra: 0\n Papel: 1\n Tijeras: 2", 0);

// Condicional para Seleccionar el Nombre de la Opcion Escogida por el Usuario

if (usuario == piedra) {
    opciones1 ="Piedra";
}
else if (usuario == papel) {
    opciones1 ="Papel";
}
else if (usuario == tijeras) {
    opciones1 ="Tijeras";
}

// Condicional para Seleccionar el Nombre de la Opcion Escogida por la Maquina

  if (maquina == piedra) {
    opciones2 ="Piedra";
}
else if (maquina == papel) {
    opciones2 ="Papel";
}
else if (maquina == tijeras) {
    opciones2 ="Tijeras";
}

// Alerta del Usuario y la Maquina

alert(" El Usuario ha Escogido " +opciones1+ " Y La Maquina ha Escogido " +opciones2 );

// Condicionales del Juego para Asignar Ganador, Perdedor o Empate

if (usuario == piedra) {
    if (maquina == piedra) {
        alert("Es un Empate");
    }
    else if (maquina == papel) {
        alert("Que Lastima, Perdiste, Vuelve a Intentarlo");
    }
    else if (maquina == tijeras) {
        alert("Felicitaciones Ganaste!!!");
    }
}
else if (usuario == papel) {
    if (maquina == piedra) {
        alert("Felicitaciones Ganaste!!!");
    }
    else if (maquina == papel) {
        alert("Es un Empate");
    }
    else if (maquina == tijeras) {
        alert("Que Lastima, Perdiste, Vuelve a Intentarlo");
    }
}
else if (usuario == tijeras) {
    if (maquina == piedra) {
        alert("Que Lastima, Perdiste, Vuelve a Intentarlo");
    }
    else if (maquina == papel) {
        alert("Felicitaciones Ganaste!!!");
    }
    else if (maquina == tijeras) {
        alert("Es un Empate");
    }
}
else {
    alert("Error");
}
// cierre del bucle

}

alert("Gracias Por Jugar!!!")