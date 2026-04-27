function calcularResultado() {

      let total = 0; // Puntuación total inicial

      const preguntas = 6; // Número total de preguntas

      // Recorremos cada pregunta
      for (let i = 1; i <= preguntas; i++) {
        // Obtenemos la respuesta seleccionada de cada pregunta
        const seleccion = document.querySelector(`input[name="q${i}"]:checked`);

        if (seleccion) {
          total += parseInt(seleccion.value); // Sumamos el valor elegido
        } else {
          alert("Por favor responde todas las preguntas."); // Si falta una, alerta
          return; // Salimos de la función
        }
      }

      const resultado = document.getElementById("result"); // Obtenemos el div del resultado
      let mensaje = ""; // Texto del mensaje final
      let clase = ""; // Clase CSS según el resultado

      const correctas = total / 3; // Número de respuestas correctas

      // Evaluamos según el número de correctas
      if (correctas >= 5) {
        mensaje = "¡Excelente! Tienes un gran conocimiento sobre el Código Cafetero.";
        clase = "high"; // Alta puntuación
      } else if (correctas >= 3) {
        mensaje = "Buen trabajo. ¡Sigue aprendiendo sobre la cultura cafetera!";
        clase = "medium"; // Media puntuación
      } else {
        mensaje = "Hay mucho por descubrir. ¡Explora más sobre el Código Cafetero!";
        clase = "low"; // Baja puntuación
      }

      // Mostramos el resultado con animación y estilo
      resultado.className = `show ${clase}`;
      resultado.innerHTML = `<strong>Puntaje: ${total}/18 (${correctas} correctas)</strong><br>${mensaje}<br><br>
      <a href="actividades.html" class="btn btn-principal mt-3" style="background-color: #6F1D1B; color: white; border: none; padding: 10px 25px; border-radius: 8px; text-decoration: none; display: inline-block;">Volver a Actividades</a>`;
    }