//Funciones y constantes para crear el juego de preguntas y respuestas//
const crearUsuarios = () => {
  const cantidadTexto = prompt("¡Bienvenido a la acción! ¿Cuántos jugadores participarán?");
  if (cantidadTexto === null) return null;

  const cantidad = parseInt(cantidadTexto);
  if (isNaN(cantidad) || cantidad < 1) return null;

  return Array.from({ length: cantidad }, (_, i) => {
    const nombre = prompt(`Nombre del jugador ${i + 1}:`);
    if (nombre === null) return null;

    let edad;
    do {
      const edadTexto = prompt(`Edad del jugador ${i + 1}:`);
      if (edadTexto === null) return null;
      edad = parseInt(edadTexto);
      if (isNaN(edad)) {
        alert("Por favor ingresa un número válido para la edad.");
      }
    } while (isNaN(edad));

    return {
      nombre,
      edad,
      puntaje: 0
    };
  }).filter(Boolean);
};

const crearPreguntas = (cantidad = 8) =>
  Array.from({ length: cantidad }, (_, i) => {
    const pregunta = prompt(`Pregunta ${i + 1}:`);
    if (pregunta === null) return null;

    const correcta = prompt("Respuesta correcta:");
    if (correcta === null) return null;

    const falsa1 = prompt("Respuesta falsa 1:");
    if (falsa1 === null) return null;

    const falsa2 = prompt("Respuesta falsa 2:");
    if (falsa2 === null) return null;

    const opciones = [correcta, falsa1, falsa2].sort(() => Math.random() - 0.5);

    return {
      pregunta,
      opciones,
      respuestaCorrecta: correcta
    };
  }).filter(Boolean);

const obtenerRespuesta = () => {
  let respuesta;
  do {
    const entrada = prompt("Elige una opción (1-3):");
    if (entrada === null) return null;
    respuesta = parseInt(entrada);
  } while (isNaN(respuesta) || respuesta < 1 || respuesta > 3);
  return respuesta;
};

const jugarRonda = (usuarios, preguntas) =>
  usuarios.map(usuario => {
    const puntaje = preguntas.reduce((acc, pregunta) => {
      console.log(`\n${usuario.nombre}, responde: ${pregunta.pregunta}`);
      pregunta.opciones.forEach((op, i) => {
        console.log(`${i + 1}. ${op}`);
      });

      const respuesta = obtenerRespuesta();
      if (respuesta === null) return acc;

      const correcta = pregunta.opciones[respuesta - 1] === pregunta.respuestaCorrecta;
      console.log(correcta ? "¡Bien hecho! Respuesta correcta" : `¡BUUUUU! Incorrecto. Era: ${pregunta.respuestaCorrecta}`);
      return correcta ? acc + 1 : acc;
    }, 0);

    return { ...usuario, puntaje };
  });

const mostrarResultados = usuarios => {
  console.log("\nResultados finales:");
  usuarios.forEach(usuario => {
    console.log(`${usuario.nombre}: ${usuario.puntaje} puntos`);
  });
};

const reiniciarJuego = () => {
  const continuar = prompt("¿Quieres jugar otra ronda? (Sí/No)").toLowerCase();
  return continuar === "sí" || continuar === "si";
};

const iniciarJuego = () => {
  let continuarJugando = true;

  while (continuarJugando) {
    const usuarios = crearUsuarios();
    if (!usuarios || usuarios.length === 0) return;

    const preguntas = crearPreguntas(8);
    if (!preguntas || preguntas.length === 0) return;

    const usuariosFinal = jugarRonda(usuarios, preguntas);
    mostrarResultados(usuariosFinal);

    // Preguntar si el jugador quiere seguir jugando
    continuarJugando = reiniciarJuego();
  }

  console.log("¡Gracias por jugar!");
};

// Ejecutar el juego
iniciarJuego();

//ejemplo de uso//
const pregunta1 = new Pregunta("¿Cuál es la capital de Francia?", ["París", "Londres", "Berlín"], "París");
const pregunta2 = new Pregunta("¿Cuál es la capital de España?", ["Madrid", "Barcelona", "Valencia"], "Madrid");        
console.log(pregunta1.verificarRespuesta(1)); // true
console.log(pregunta2.verificarRespuesta(2)); // false
