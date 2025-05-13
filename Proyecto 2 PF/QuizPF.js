//Crear funciones y constantes//
function crearJugadores() {
    const cantidadInput = prompt("¡Bienvenido a la acción! ¿Cuántos jugadores participarán?");
    if (cantidadInput === null) return null;
    const cantidad = parseInt(cantidadInput);
    if (isNaN(cantidad) || cantidad < 1) return null;

    const jugadores = [];

    for (let i = 0; i < cantidad; i++) {
        const nombre = prompt(`Nombre del jugador ${i + 1}:`);
        if (nombre === null) return null;
        const edadInput = prompt(`Edad del jugador ${i + 1}:`);
        if (edadInput === null) return null;
        const edad = parseInt(edadInput);
        if (isNaN(edad)) return null;
        jugadores.push({ nombre, edad, puntaje: 0 });
    }

    return jugadores;
}

function crearEncuestas(jugadores) {
    const encuestas = [];

    for (let jugador of jugadores) {
        console.log(`\n--- ${jugador.nombre}, crea tus 8 preguntas ---`);
        const preguntas = [];

        for (let i = 0; i < 8; i++) {
            const enunciado = prompt(`Pregunta ${i + 1}:`);
            if (enunciado === null) return null;
            const correcta = prompt("Respuesta correcta:");
            if (correcta === null) return null;
            const falsa1 = prompt("Respuesta falsa 1:");
            if (falsa1 === null) return null;
            const falsa2 = prompt("Respuesta falsa 2:");
            if (falsa2 === null) return null;

            const opciones = [correcta, falsa1, falsa2].sort(() => Math.random() - 0.5);

            preguntas.push({
                pregunta: enunciado,
                opciones,
                respuestaCorrecta: correcta
            });
        }

        encuestas.push({ creador: jugador.nombre, preguntas });
    }

    return encuestas;
}

function verificarRespuesta(opciones, respuesta, correcta) {
    return opciones[respuesta - 1] === correcta;
}

function jugar(jugadores, encuestas) {
    for (let encuesta of encuestas) {
        console.log(`\n Ronda de preguntas de ${encuesta.creador}`);
        for (let pregunta of encuesta.preguntas) {
            for (let jugador of jugadores) {
                console.log(`\n${jugador.nombre}, responde:`);
                console.log(pregunta.pregunta);
                pregunta.opciones.forEach((op, idx) => {
                    console.log(`${idx + 1}. ${op}`);
                });

                const entrada = prompt(`${jugador.nombre}, elige una opción (1-3):`);
                if (entrada === null) return false;
                const respuesta = parseInt(entrada);
                if (isNaN(respuesta) || respuesta < 1 || respuesta > 3) {
                    alert("Opción inválida. Se salta la pregunta.");
                    continue;
                }

                if (verificarRespuesta(pregunta.opciones, respuesta, pregunta.respuestaCorrecta)) {
                    alert("¡Bien hecho, la respuesta es correcta!");
                    jugador.puntaje++;
                } else {
                    alert(`¡BUUUUU! Incorrecto. La respuesta correcta era: ${pregunta.respuestaCorrecta}`);
                }
            }
        }
    }

    return true;
}

function mostrarResultados(jugadores) {
    console.log("\n=== RESULTADOS ===");
    let ganador = jugadores[0];

    for (let jugador of jugadores) {
        console.log(`${jugador.nombre}: ${jugador.puntaje} puntos`);
        if (jugador.puntaje > ganador.puntaje) {
            ganador = jugador;
        }
    }

    console.log(`\n El ganador es: ${ganador.nombre}`);
    alert(` El ganador es: ${ganador.nombre}`);
}

function iniciarJuego() {
    do {
        const jugadores = crearJugadores();
        if (!jugadores) return;

        const encuestas = crearEncuestas(jugadores);
        if (!encuestas) return;

        const continuar = jugar(jugadores, encuestas);
        if (!continuar) return;

        mostrarResultados(jugadores);
    } while (prompt("\n¿Deseas jugar otra vez? (s/n):")?.toLowerCase() === "s");
}

iniciarJuego();



//ejemplo de uso//
//const pregunta1 = new Pregunta("¿Cuál es la capital de Francia?", ["París", "Londres", "Berlín"], "París");
//const pregunta2 = new Pregunta("¿Cuál es la capital de España?", ["Madrid", "Barcelona", "Valencia"], "Madrid");        
//console.log(pregunta1.verificarRespuesta(1)); // true
//console.log(pregunta2.verificarRespuesta(2)); // false
