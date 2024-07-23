# **PRUEBA DE FRONTEND BIKUMA**

**Lenguajes:** HTML, CSS, SCSS, Javascript.
**Librerías y Frameworks:** jQuery, Bootstrap 5, [AOS](https://michalsnik.github.io/aos/), [Slick Slider](http://kenwheeler.github.io/slick/)

**Programas:** Adobe Illustrator 2023, Adobe Photoshop 2023.
**Recursos:** [Typescale](https://typescale.com/), [Favicongenerator](https://realfavicongenerator.net/)
**IDE:** Visual Studio Code

### Documentación**

 - Buscar y estudiar la información sobre la empresa (su identidad, los
   servicios que ofrece etc).
 - Inspección del sitio web actual https://puntodis.com/.
 - Comparación con el prototipo del nuevo diseño en figma que se nos proporcionó.
-- Contenido
--  Estructura
-- Estilos
-- Recursos (imágenes, librerias…)

### **Inicio del proyecto**

- Crear la carpeta raíz con la estructura básica del proyecto:
Index.html y carpeta de recursos (imágenes, javascript, scss).
- Crear el entorno de trabajo para poder trabajar con scss e instalar bootstrap.
(En local instalé bootstrap via npm, en github hice un @import de “https://github.com/twbs/bootstrap/blob/16d80a4ff7b42da57215783cc8ff85d6f0627630/scss/bootstrap.scss”)
-- Watch scss
-- Live server

- Establecer la estructura para importar los archivos scss para compilarlos en la hoja de estilos.
- Crear la estructura básica del documento html: head y body.
- Vincular la hoja de estilos css en el head del html una vez comprobado que se compilan adecuadamente todos los archivos scss.

### **Contenido**

- Añadir todo el contenido bruto en el body del html.
- Jerarquizar el contenido añadiendo etiquetas teniendo en cuenta el prototipo de figma.

### **Personalizar Bootstrap**

- Teniendo en cuenta el diseño del prototipo y sus estilos crear nuestras variables personalizadas de bootstrap.
- Para calcular las variables de las fuentes utilicé Typescale y para los colores simplemente copié la información del prototipo.

### **Organizar el código html por secciones principales**

- Etiquetar las secciones y darles un id siguiendo la estructura dada en el prototipo.

### **Recursos**

- Vincular o importar los recursos que se van a necesitar.
- Ejemplos:
-- Las fuentes las importé en el archivo scss que compila la hoja de estilos css.
-- Los scripts al final del body vía cdn de jquery, slick slider y aos.

 - Exportar las imágenes necesarias desde figma y optimizarlas con Photoshop e Illustrator.
- Añadir imágenes e iconos. Las imágenes las puse directamente como contenido en el html y los iconos los inyecté vía css utilizando los pseudoelementos ::before y ::after.

### **Estilos**

- Estilos generales: color del fondo, del contenido y la fuente de body.
- Estilos de elementos sencillos que se repiten.
- Ejemplos:
-- Botón de contactar
-- Estilo de las anclas
- Estilos de estructuras que se repiten.
- Ejemplos:
-- CTA y Bloque de servicios
-- Noticias y proyectos

- Dar estilos a las secciones utilizando las clases de bootstrap  en el html y creando mis propias clases en mi archivo “_custom.scss”.
- Para ayudarme tuve en cuenta cómo estaban estructuradas otras páginas de Bikuma.

### **Scripts**

- Crear un archivo js donde añadir los scripts de aos y slickslider.
- Vincular el script al final del body.
- Añadir las clases personalizadas para activar los scripts.

### **Metadatos**

- Añadir contenido adicional al head: favicon y otros metadatos.
