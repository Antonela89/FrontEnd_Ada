* **Carrera Front End** 

# **Actividades Clase Numero 3:**

**1\. Identificando Eventos en la Página**

**Objetivo:**

Comprender cómo detectar eventos en la web y visualizar su información.

**Consigna:**

1. Abre una página web y accede a la consola del navegador (F12 \> **"Consola"**).

2. Usa JavaScript para agregar un evento que detecte cada clic en cualquier parte de la página y muestre en la consola qué elemento fue clickeado.

3. **Preguntas para reflexionar:**

   * ¿Cómo puedes capturar el evento de clic en toda la página?

   * ¿Qué propiedad del evento te dice qué elemento fue clickeado?

   * ¿Cómo podrías hacer que solo se muestren los clics en botones específicos?

---

**2\. Evitando el Comportamiento por Defecto**

**Objetivo:**

Aprender a usar preventDefault() para modificar el comportamiento de los elementos HTML.

**Consigna:**

1. Crea una página con un enlace (\<a\>) que apunte a una URL externa.

2. Agrega un evento que, cuando se haga clic en el enlace, muestre un mensaje pero evite la redirección.

3. **Preguntas para reflexionar:**

   * ¿Cómo puedes capturar el evento de clic en el enlace?

   * ¿Qué sucede si no usas preventDefault()?

   * ¿Cómo podrías permitir la redirección solo si el usuario confirma su acción?

---

**3\. Resaltando Elementos con Eventos del Mouse**

**Objetivo:**

Practicar el uso de mouseover y mouseout para interactuar con los elementos visualmente.

**Consigna:**

1. Crea una lista de elementos (\<li\>) con diferentes palabras.

2. Agrega eventos para que, cuando el usuario pase el mouse sobre un elemento, este cambie de color. Cuando el mouse salga, el color debe volver a la normalidad.

3. **Preguntas para reflexionar:**

   * ¿Cómo puedes capturar el evento de mouseover en cada elemento?

   * ¿Cómo puedes hacer que el color original se recupere al salir el mouse?

   * ¿Cómo podrías hacer que cada elemento tenga un color diferente al pasar el mouse?

---

**4\. Detección de Teclas Presionadas**

**Objetivo:**

Entender cómo capturar y utilizar eventos del teclado en una página web.

**Consigna:**

1. Crea un campo de entrada (\<input type="text"\>).

2. Agrega eventos que detecten cuando el usuario presiona una tecla y muestren en la consola qué tecla fue presionada.

3. **Preguntas para reflexionar:**

   * ¿Qué diferencia hay entre keydown, keypress y keyup?

   * ¿Cómo podrías hacer que solo ciertas teclas disparen un evento específico?

   * ¿Cómo podrías mostrar un mensaje en la página cuando se presiona la tecla "Enter"?

---

**5\. Controlando la Propagación de Eventos**

**Objetivo:**

Comprender cómo funciona la propagación de eventos y cómo stopPropagation() puede evitarla.

**Consigna:**

1. Crea una estructura de div anidados, como en el ejemplo:

\<div id="abuelo"\>

    \<div id="padre"\>

        \<div id="hijo"\>Haz clic aquí\</div\>

    \</div\>

\</div\>

2. Agrega eventos de clic en cada div que muestren un mensaje en la consola indicando qué elemento fue clickeado.

3. Usa stopPropagation() en el div hijo y observa qué sucede.

4. **Preguntas para reflexionar:**

   * ¿Qué sucede cuando haces clic en el div hijo sin stopPropagation()?

   * ¿Qué cambia al agregar stopPropagation() en el hijo?

   * ¿Cómo podrías usar esta técnica en un proyecto real?

---

**🔥 Desafío Extra:**

Crea un juego simple donde el usuario deba presionar ciertas teclas en un orden específico para ganar. Usa eventos del teclado y preventDefault() para controlar la interacción.
