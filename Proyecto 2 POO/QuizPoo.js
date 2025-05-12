//Definir clases//
class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.puntaje = 0;
    }
}

class Pregunta {
    constructor(pregunta, opciones, respuestaCorrecta) {
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.respuestaCorrecta = respuestaCorrecta;
    }

    verificarRespuesta(respuesta) {
        return this.opciones[respuesta - 1] === this.respuestaCorrecta;
    }
}

class Encuesta {
    constructor(creador) {
        this.creador = creador;
        this.preguntas = [];
    }

    agregarPregunta(pregunta) {
        this.preguntas.push(pregunta);
    }
}

class Quiz {
    constructor() {
        this.usuarios = [];
        this.encuestas = [];
    }
 
    //Definir funciones//
 
    crearUsuarios() {
        let cantidad = parseInt(prompt("¡Bienvenido a la acción! ¿Cuántos jugadores participarán?"));
        for (let i = 0; i < cantidad; i++) {
            let nombre = prompt(`Nombre del jugador ${i + 1}:`);
            let edad = parseInt(prompt(`Edad del jugador ${i + 1}:`));
            this.usuarios.push(new Usuario(nombre, edad));
        }
    }

    crearEncuestas() {
        for (let usuario of this.usuarios) {
            console.log(`\n--- ${usuario.nombre}, crea tus 8 preguntas ---`);
            const encuesta = new Encuesta(usuario);
            for (let i = 0; i < 8; i++) {
                const pregunta = prompt(`Pregunta ${i + 1}:`);
                const correcta = prompt("Respuesta correcta:");
                const falsa1 = prompt("Respuesta falsa 1:");
                const falsa2 = prompt("Respuesta falsa 2:");
                let opciones = [correcta, falsa1, falsa2].sort(() => Math.random() - 0.5);
                encuesta.agregarPregunta(new Pregunta(pregunta, opciones, correcta));
            }
            this.encuestas.push(encuesta);
        }
    }

    jugar() {
        for (let encuesta of this.encuestas) {
            console.log(`\nRonda de preguntas de ${encuesta.creador.nombre}`);
            for (let pregunta of encuesta.preguntas) {
                for (let jugador of this.usuarios) {
                    console.log(`\n${jugador.nombre}, responde: ${pregunta.pregunta}`);
                    pregunta.opciones.forEach((op, index) => {
                        console.log(`${index + 1}. ${op}`);
                    });
                    const respuesta = parseInt(prompt("Elige una opción (1-3):"));
                    if (pregunta.verificarRespuesta(respuesta)) {
                        console.log("¡Bien hecho, la respuesta es correcta!");
                        jugador.puntaje++;
                    } else {
                        console.log(`¡BUUUUU!Incorrecto. La respuesta correcta era: ${pregunta.respuestaCorrecta}`);
                    }
                }
            }
        }
    }

    mostrarResultados() {
        console.log("\n=== RESULTADOS ===");
        let ganador = this.usuarios[0];
        for (let usuario of this.usuarios) {
            console.log(`${usuario.nombre}: ${usuario.puntaje} puntos`);
            if (usuario.puntaje > ganador.puntaje) {
                ganador = usuario;
            }
        }
        console.log(`\n El ganador es: ${ganador.nombre}`);
    }

    iniciar() {
        do {
            this.usuarios = [];
            this.encuestas = [];
            this.crearUsuarios();
            this.crearEncuestas();
            this.jugar();
            this.mostrarResultados();
        } while (prompt("\n¿Deseas jugar otra vez? (s/n):").toLowerCase() === "s");
    }
}

// Iniciar el juego
const quiz = new Quiz();
quiz.iniciar();


//prueba
//const pregunta1 = new Pregunta("¿Cuál es la capital de Francia?", ["París", "Londres", "Berlín"], "París");
//const pregunta2 = new Pregunta("¿Cuál es la capital de España?", ["Madrid", "Barcelona", "Valencia"], "Madrid");        
//console.log(pregunta1.verificarRespuesta(1)); // true
//console.log(pregunta2.verificarRespuesta(2)); // false
