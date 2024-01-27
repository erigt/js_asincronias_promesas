# ¿Qué es un archivo JSON?
JSON (JavaScript Object Notation) es un archivo que contiene una serie de datos estructurados en formato de texto y se usa para transferir información entre sistemas. Es importante decir que, a pesar de su origen estar en el lenguaje JavaScript, JSON no es un lenguaje de programación.

JSON es una notación para la transferencia de datos que sigue un estándar específico. Por eso, puede emplearse en diferentes lenguajes de programación y de sistemas.

Los datos contenidos en un archivo en formato JSON deben estructurarse por medio de una colección de pares con nombre y valor o deben ser una lista ordenada de valores. Sus elementos tienen que contener:

- Clave: corresponde al identificador del contenido. Por eso, debe ser una string delimitada por comillas.
- Valor: representa el contenido correspondiente y puede contener los siguientes tipos de datos: string, array, object, number, boolean o null.

# ¿Qué es la asincronía en Javascript?
La programación asíncrona es una técnica que permite iniciar una tarea de larga duración y seguir respondiendo a otros eventos mientras esa tarea se ejecuta, en lugar de tener que esperar hasta que esa tarea haya terminado. Una vez que dicha tarea ha finalizado, tu programa presenta el resultado.

# ¿Qué son las Promesas?
Como su propio nombre indica, una promesa es algo que, en principio pensamos que se cumplirá, pero en el futuro pueden ocurrir varias cosas:

- La promesa se cumple (promesa resuelta).
- La promesa no se cumple (promesa rechazada).
- La promesa se queda en un estado incierto indefinidamente (promesa pendiente).

La forma general de consumir una promesa es utilizando el .then() con un sólo parámetro, puesto que muchas veces lo único que nos interesa es realizar una acción cuando la promesa se cumpla.

Se puede crear una promesa con el constructor "promise" y pasándole una función con dos parámetros: "resolve y reject", que nos deja decirle si ha sido resuelta o rechazada. 
* const promise = new Promise((resolve, reject) => const number = Math.)

# ¿Qué es y cómo se usa ‘Fetch’ en JS?
Fetch es el nombre de una nueva API para Javascript con la cuál podemos realizar peticiones HTTP asíncronas utilizando promesas y de forma que el código sea un poco más sencillo.

La forma de realizar una petición es muy sencilla, básicamente se trata de llamar a "fetch" y pasarle por parámetro la URL de la petición a realizar. El "fetch()" devolverá una que será aceptada cuando reciba una respuesta y sólo será rechazada si hay un fallo de red o si por alguna razón no se pudo completar la petición.

# ¿Cómo se usa Async/Await?
Tenemos dos partes cuando usamos async/await en nuestro código.

En primer lugar, tenemos la palabra clave async , que se pone delante de una declaración de función para convertirla en una función async.

Una función asíncrona es una función que sabe que es posible que se use la palabra clave await dentro de ella para invocar código asíncrono.

La palabra clave async se añade a las funciones para que devuelvan una promesa en lugar de un valor directamente.

En una función async que contiene una expresión await, esta pausará la ejecución de la función asíncrona y esperará la resolución de la Promise pasada y, a continuación, reanudará la ejecución de la función async y devolverá el valor resuelto.

# ¿Cuándo deberíamos usar código asíncrono?
Si no trabajas con programación asíncrona quiere decir entonces que tu aplicación siempre trabajará sobre un mismo hilo de ejecución y esto significa un problema, no solo de rendimiento por cuellos de botella (lentitud por convergencia de procesos), sino también de seguridad y disponibilidad, ya que es probable que tu aplicación deje de funcionar o se "crashee" debido a la demanda de procesos en ejecución al mismo tiempo.

Se dice que es buena práctica aplicar la programación asíncrona debido a que hay situaciones en las que no se tiene el control del proceso, por ejemplo:
- Llamadas a bases de datos, no sabemos cuanto tarde en devolvernos la data solicitada o en que termine de insertar los registros enviados, en resumen no tenemos control del servidor de base de datos.

- Cuando se trabaja con archivos, también no se tiene el control, puede que necesite permisos al sistema operativo o mil situaciones, dejar paralizada nuestra aplicación por esto sería mortal.

- Mejor control de los procesos, si no ejecutamos await por ejemplo, puede que nuestra aplicación quiera continuar en el mismo thread sin que haya terminado de traer la información de la base de datos, con esto se generan inconsistencias, también podría generar colisiones en las llamadas a la base de datos dejándola no disponible para algunos usuarios mientras que otros sí obtienen lo esperado.

- Mayor disponibilidad del sistema, ya que permite ejecutar múltiples acciones al mismo tiempo.

# Ex JS - Asincronía & Promesas
1.- Usa este JSON para imprimir en consola del navegador la lista de títulos de los ‘Todos’.
![Asincronía y Promesas 1](https://github.com/erigt/js_asincronias_promesas/assets/146768635/5be465d8-836d-4495-acfa-9ddde14e75e6)


2.- Usa el mismo JSON para imprimir en el documento del navegador una tabla con todos los
elementos ‘Todos’ y sus propiedades.
![Asincronía y Promesas 2](https://github.com/erigt/js_asincronias_promesas/assets/146768635/a27d9309-6cd6-4e2b-83eb-5715f8089434)

