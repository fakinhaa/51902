# Analizador Sintáctico

Este proyecto implementa un **analizador sintáctico** que procesa cadenas de entrada conforme a una gramática formal definida. El objetivo principal es verificar si una secuencia de tokens cumple con las reglas sintácticas del lenguaje y generar una estructura de árbol (o informe de errores) en base a eso.<br>

## Instalación
Clona este repositorio: git clone https://github.com/fakinhaa/51902.git<br>
Instalar node.js: https://nodejs.org/en/download<br>

## Características

- Verificación sintáctica y semantica de expresiones según una gramática definida.
- Detección y reporte de errores sintácticos.
- Construccion de tabla de lexemas y tokens.
- Construcción de árbol sintáctico.
- Entrada por archivo (input.txt) y consola.

## Instrucciones de Uso
Para ejecutar el analizador, es necesario posicionarse con el simbolo del sistema dentro de la carpeta ./Analizador y usar el comando `npm start` de Node.js.<br>
La instruccion que se quiera ejecutar se debe escribir en el archivo **input.txt** dentro de ./Analizador. En caso de no existir, se ingresan las instrucciones por consola.<br>

La gramática define un lenguaje que permite:<br>
- Asignación de variables: Se puede asignar un valor o cadena a una variable mediante el uso de un operador de asignación (=).<br>
- Salida de texto: Permite imprimir texto a la salida estándar utilizando la palabra clave output().<br>

## Ejemplo de uso
```bash
# Asignacion de variables
x = 10;
text = "hello,world!";
# Salida de texto
output("hello,world!");
