//Variables
let bandera = 0;
let intentos = 1;
let numeroSecreto = 2;
//El contenido de la siguiente variable se lo vamos a pedir al jugador mediante un prompt.
let numeroUsuario = prompt('Me indicas un número entre 1 y 10 por favor');
let palabraVeces = 'vez';
/*
Este bucle for va a iterar tres veces el codigo para darle tres oportunidades al jugador
para acertar el número secreto.
*/

for (var i = 0; i < 3; i++) {
    /*
    Este condicional verifica que haya ingresado al menos
    un numero para pedirle otro distinto.
    */
   if(i >= 1 && bandera == 0){
    numeroUsuario = prompt('probá con otro número');
   }
    /*
    Este código realiza la comparación.
    Si el numero que ingresó el usuario es mayor al numero secreto, 
    le indicará que pruebe con un numero mas chico.
    */
  if (numeroUsuario > numeroSecreto) {
    alert(
      `El numero que ingresaste es: ${numeroUsuario}, el numero secreto es menor.`
    );
    intentos++;
    palabraVeces = 'veces';
  } else if (numeroUsuario < numeroSecreto) {
  /*
    Este código realiza la comparación.
    Si el numero que ingresó el usuario es menor al numero secreto, 
    le indicará que pruebe con un numero mayor.
    */
    alert(
      `El numero que ingresaste es: ${numeroUsuario}, el numero secreto es mayor.`
    );
    intentos++;
    palabraVeces = 'veces';
  }

  //Acertamos, fue verdadera la condición
  else {
    bandera = 1;
  }
}
if (bandera == 1) {
  alert(`¡GANASTE! Adivinaste el número secreto en ${intentos} ${palabraVeces}`);
} else {
  alert("¡seguí participando...!");
}
