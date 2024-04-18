# Proyecto Quiz

Este proyecto consiste en un cuestionario interactivo que obtiene preguntas de una API y permite al usuario responderlas para obtener una puntuación.

## Funcionamiento

1. **Obtención de Preguntas**: Las preguntas se obtienen de una API utilizando Axios. La URL de la API se encuentra en la constante `API_URL`. Se hace una solicitud GET a esta URL y se almacenan las preguntas en la variable `questions`.

2. **Inicio del Cuestionario**: Cuando se hace clic en el botón "Start", se oculta el contenido de inicio y se muestra la primera pregunta.

3. **Selección de Respuesta**: Al hacer clic en una respuesta, se comprueba si es la respuesta correcta. Se marca la respuesta seleccionada en verde si es correcta, o en rojo si es incorrecta. Además, se actualiza la puntuación del usuario.

4. **Siguiente Pregunta**: Después de responder, se muestra el botón "Next" para pasar a la siguiente pregunta. Esto continúa hasta que se responden todas las preguntas.

5. **Fin del Cuestionario**: Una vez que se responden todas las preguntas, se muestra la puntuación total obtenida por el usuario.

6. **Reinicio del Cuestionario**: Se proporciona un botón "Restart Quiz" para permitir al usuario volver a iniciar el cuestionario desde el principio.

## Tecnologías Utilizadas

- HTML
- CSS (Bootstrap)
- JavaScript

## Instalación

No se requiere ninguna instalación especial. Solo abre el archivo `index.html` en un navegador web.

## Contribución

Las contribuciones son bienvenidas. Si deseas mejorar el proyecto, puedes hacer un fork del repositorio, realizar tus cambios y enviar un pull request.

## Autor

Creado por [Sento Berlanga]
