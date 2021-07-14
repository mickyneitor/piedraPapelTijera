// Definí una función jugarPiedraPapelTijera que reciba como argumentos dos strings a y b que representen una jugada (piedra, papel, tijera) y retorne un string con un mensaje avisando qué jugada ganó (o si hubo empate)

// const respuestaUsuario1 = prompt('Usuario 1: piedra, papel o tijera?')

// const respuestaUsuario2 = prompt('Usuario 2: piedra, papel, tijera?')

// const jugarPiedraPapelTijera = (respuestaUsuario1, respuestaUsuario2) => {
//      if (respuestaUsuario1 === "piedra" && respuestaUsuario2 === "piedra"){
//         return "¡Empate!"
//     }
//     else if 
//         (respuestaUsuario1 === "piedra" && respuestaUsuario2 === "tijera"){
//             return "¡Ganó piedra!"
//         }
    
//     else if 
//         (respuestaUsuario1 === "piedra" && respuestaUsuario2 === "papel"){
//             return "¡Ganó papel!"
//         }
//     else if 
//         (respuestaUsuario1 === "papel" && respuestaUsuario2 === "papel"){
//             return "¡Empate!"
//         }
//     else if 
//         (respuestaUsuario1 === "papel" && respuestaUsuario2 === "tijera"){
//             return "¡Ganó tijera!"
//         }
//     else if 
//         (respuestaUsuario1 === "papel" && respuestaUsuario2 === "piedra"){
//             return "¡Ganó papel!"
//         }
//     else if 
//         (respuestaUsuario1 === "tijera" && respuestaUsuario2 === "tijera"){
//             return "¡Empate!"
//         } 
//     else if     
//         (respuestaUsuario1 === "tijera" && respuestaUsuario2 === "piedra"){
//             return "¡Ganó piedra!"
//         }
//     else if     
//         (respuestaUsuario1 === "tijera" && respuestaUsuario2 === "papel"){
//             return "¡Ganó tijera!"
//         }
 
// }

// console.log(jugarPiedraPapelTijera(respuestaUsuario1, respuestaUsuario2));

// alert(jugarPiedraPapelTijera(respuestaUsuario1, respuestaUsuario2));



// VERSION CORTA -------------------------------------------------------------

const jugador1 = prompt("Jugador 1: ¿Piedra, papel o tijera? ");
const jugador2 = prompt("Jugador 2: ¿Piedra, papel o tijera?");

jugarPiedraPapelTijera = (jugador1, jugador2) => {
    if (jugador1 === jugador2){
        return "¡Empate!"
    }
    else if (jugador1 === "piedra" && jugador2 === "tijera" || jugador2 === "piedra" && jugador1 === "tijera"){
        return "¡Ganó piedra!";
    }
    else if (jugador1 === "tijera" && jugador2 === "papel" || jugador2 === "tijera" && jugador1 === "papel"){
        return "¡Ganó tijera!";
    }
    else if (jugador1 === "papel" && jugador2 === "piedra" || jugador2 === "papel" && jugador1 === "piedra"){
        return "¡Ganó papel!";
    }    
}

console.log(jugarPiedraPapelTijera (jugador1, jugador2));
