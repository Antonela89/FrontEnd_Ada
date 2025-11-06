# Carrera Front End

## Actividades Clase Numero 8:

---

### Actividad: Creando una Página Responsiva con Bulma CSS

🔹 **Objetivo:** Aplicar lo aprendido sobre **grillas, columnas, tamaños, responsividad, offset y anidado** en Bulma CSS para construir una página web con una estructura organizada y adaptable a distintos dispositivos.

---

### 📌 Consigna

Vas a desarrollar una **página web informativa** sobre un tema de tu interés (puede ser una ciudad, un libro, una película, un videojuego, un personaje histórico, etc.).

La estructura debe cumplir con los siguientes requisitos:

✅ Un **contenedor principal (`.container`)** para centrar el contenido.
✅ Un **encabezado con título (`.title`) y subtítulo (`.subtitle`)** centrados.
✅ Un **sistema de columnas (`.columns` y `.column`)** con contenido distribuido en al menos **tres secciones**.
✅ **Columnas de diferentes tamaños** (`.is-half`, `.is-one-quarter`, etc.).
✅ Un **diseño responsivo**:
*   En **móviles**, el contenido debe aparecer en **una sola columna**.
*   En **tablets**, debe dividirse en **dos columnas**.
*   En **computadoras**, debe tener **tres columnas**.
✅ Uso de **offset** para desplazar al menos una columna.
✅ **Anidado de columnas** dentro de una sección.

---

### 🛠️ Pasos para realizar la actividad

#### 1. Creación del archivo HTML
1.  Abre **Visual Studio Code** o tu editor favorito.
2.  Crea un archivo llamado **index.html**.
3.  Agrega la estructura básica de HTML.
4.  **Incluye el enlace a Bulma CSS** en el `<head>`.

💡 **Pista:** Busca en la documentación de Bulma cómo enlazarlo correctamente en tu proyecto.

#### 2. Agregar un Encabezado
*   Coloca un **título principal** llamativo para tu página.
*   Agrega un **subtítulo** con una breve descripción del contenido.
*   **Céntralo** usando clases de Bulma.

💡 **Pista:** Explora las clases de **tipografía y alineación de texto** en la documentación de Bulma.

#### 3. Crear un Sistema de Columnas
*   Divide la página en **tres columnas** dentro de una fila.
*   Cada columna debe contener un **texto y una imagen**.
*   Define **tamaños distintos** para cada columna.

💡 **Pista:** Usa `.column` dentro de `.columns` y experimenta con clases como `.is-half`, `.is-one-quarter`, `.is-three-quarters`, etc.

#### 4. Agregar Responsividad
*   Configura las columnas para que en **móviles** ocupen el 100% del ancho.
*   En **tablets**, deben dividirse en **dos columnas**.
*   En **computadoras**, deben organizarse en **tres columnas**.

💡 **Pista:** Usa clases como `.is-full-mobile`, `.is-half-tablet`, `.is-one-third-desktop`.

#### 5. Usar Offset para Desplazar Columnas
*   Mueve **una de las columnas** hacia la derecha sin usar un div vacío.
*   Usa clases de **offset** para lograrlo.

💡 **Pista:** Explora `.is-offset-2`, `.is-offset-3`, etc., en la documentación de Bulma.

#### 6. Anidar Columnas dentro de otra Columna
*   Dentro de una de las columnas principales, coloca **dos columnas más pequeñas**.
*   Estas sub-columnas deben tener **texto o imágenes**.

💡 **Pista:** Crea una `.columns` dentro de una `.column`.

---

### 📤 Entrega y Evaluación

✅ Guarda el archivo como "**index.html**".
✅ Abre el archivo en tu navegador y verifica que se adapte a diferentes tamaños de pantalla.
✅ **Comparte tu código y una captura de pantalla** en el Discord del curso.

---

### 📝 Criterios de evaluación:
✔️ Uso correcto del sistema de **grillas y columnas**.
✔️ **Diseño responsivo** correctamente implementado.
✔️ Aplicación de **offset** para el espaciado.
✔️ Uso de **columnas anidadas**.
✔️ **Estructura clara y ordenada** del código.

---

### 🎯 Extra Challenge
Personaliza el diseño agregando colores de fondo, bordes o efectos adicionales con **helpers de Bulma**. 🚀

---

### 📢 Recuerda:
Puedes consultar la documentación oficial de Bulma aquí:
🔗 **https://bulma.io/documentation/**

¡Diviértete diseñando tu página y experimentando con el sistema de grillas! 🎨✨