# Proyecto 2 JavaScript (POO/PFF)
Para el fin de módulo 2 se nos solicitó realizar a través de JavaScript un ejercicio en base a encuestas a los usuarios del programa. Estos fueron los requerimientos:
![Requerimientos proyecto2](https://github.com/MontseEF/Proyecto2_javaScript/blob/fabbd9d0c938f17b19b6d2755618b922f68e95e2/Captura%20de%20pantalla%202025-05-12%20181600.png)
Teniendo esto en consideración, decidí que lo más fácil para comenzar a trabajar era desglosar los requerimientos en etapas y así trazar una estructura organizada.
### Etapa 1: Definir

- **_Definir mi objetivo_**: Crear encuestas didácticas tipo "Quiz", donde los usuarios sean capaces de creear sus propias preguntas (8 preguntas por usuario). Además permitir que el usuario seleccione en el modo que quiere jugar (solo o multijugador).
  Cada jugador agregará sus preguntas y respuestas, incluyendo a los ususarios del modo "multijugador". Y se jugará en rondas.
  Los resultados quedarán guardados y al momento de terminar las rondas se revelará a la persona ganadora, su puntaje y el de los demás dependiendo del modo de juego.
  El usuario decidirá si quiere comenzar de nuevo o no.

- **_Definir las clases y funciones_**: Si bien, me enfoqué primero en definir el ejercicio de "Programación Orientada a Objetos" (POO). La estructura de procedimientos fue la misma en el ejercicio de "Programación Funcional" (PF).
  Comento esto para que sea claro que ambos ejecicios están elaborados bajo el mismo enfoqué de trabajo, a pesar de que se realicen de diferente manera.

              -Usuarios
              -Preguntas
              -Encuesta
              -Quiz

  ### Etapa 2: Registrar usuarios

              -Preguntar a los usuarios si quieren jugar de manera individual o multijugador.
              -Registrar nombre y edad de cada jugador.
              -Crear una instancia para cada jugador.
              -Guardar informacion en array.

  ### Etapa 3: Crear encuestas
  
              -Por cada jugador, crear una encuesta de 8 preguntas.
              -Cada pregunta debe tener 3 alternativas, 2 falsas y 1 correcta.
              -Usar "Math.random()" para respuestas aleatorias.
              -Guardar respuestas dentro de array.

  ### Etapa 4: Rondas de juego

              -Mostrar ronda1, ronda2, etc.
              -Cada jugador debe responder cada pregunta.
              -Evaluar si la respuesta es "Correcta" y sumar puntos.

  ### Etapa 5: Mostrar resultados y ganador

               -Mostrar cuántas respuestas correctas.
               -Determinar el jugador con más puntaje.
               -Reconocer al ganador/a.

   ### Etapa 6: Reiniciar quizz

               -Preguntar si quieren jugar de nuevo.
               -Vaciar datos y comenzar otra vez si la respuesta es "sí".

  ## Modo de ejecución

Con respecto a la ejecución de los programas, debo reconocer que es toda una aventura. Ya que antes de subirlos funcionaban bien, pero cuando los probé despues de cargarlos a GitHub tuve algunos problemas. Así que dejó aqui escrito que hacer si no parten en consola.
A veces funciona sin ejemplos de uso y otras veces si no están no corre el programa. Así que en cada archivo que subí van mencionados de está manera los ejemplos de uso "//ejemplo//", por si es que lo llegan a necesitar.
Mientras que en el archivo POO cuando lo quise ejecutar en consola, me aparecía en blanco al momento de responder las preguntas. Para solucionar eso solo apreté el botón "Aceptar" en la pantalla y funcionó sin problemas. Sin embargo, espero de todo corazón que esos problemas no sucedan una vez que los prueben.

Adjunto un vídeo de ejecución para (POO) y (PF) por si acaso:
![Video ejecucion POO](https://github.com/user-attachments/assets/8fa59a18-1384-4d8e-b7f4-c1470d15d9e1)


Para finalizar, darles la bienvenida a mi Proyecto2. Espero que les guste.

De antemano agradecer que hayan llegado hasta acá en la lectura y también a todo el equipo de la UDD que ha estado presente durante este proceso de aprendizaje, con mucha colaboración y paciencia. En especial al profesor Gonzalo que nos acompañó durante los 2 primeros módulos con una simpatía, carisma y sobre todo una gran disposión a ayudarnos con las dudas o confusiones.
