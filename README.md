# Analizador Sintáctico

Este proyecto implementa un **analizador sintáctico** que procesa cadenas de entrada conforme a una gramática formal definida. El objetivo principal es verificar si una secuencia de tokens cumple con las reglas sintácticas del lenguaje y generar una estructura de árbol (o informe de errores) en base a eso.

## Instalación
Clona este repositorio: git clone https://github.com/fakinhaa/51902.git
Instalar node.js: https://nodejs.org/en/download


## Instrucciones de Uso
Para ejecutar el analizador, es necesario posicionarse dentro de la carpeta ./Analizador y usar el comando `bashnpm start`bash de Node.js.
La instruccion que se quiera ejecutar se debe escribir en el archivo **input.txt** dentro de ./Analizador. En caso de no existir, 
La gramática define un lenguaje que permite:
Asignación de variables: Se puede asignar un valor o cadena a una variable mediante el uso de un operador de asignación (=).
`bash
x = 10;
text = "hello,world!";
`bash
Salida de texto: Permite imprimir texto a la salida estándar utilizando la palabra clave output.
`bash
output("hello,world!");
`bash

## Características

- Verificación sintáctica y semantica de expresiones según una gramática definida.
- Detección y reporte de errores sintácticos.
- Construccion de tabla de lexemas y tokens.
- Construcción de árbol sintáctico.
- Entrada por archivo (input.txt) y consola.
- Compatible con gramáticas [LL(1) / LR(1) / SLR / etc.].

## ¿Cómo funciona?

1. **Tokenización** (si se incluye un analizador léxico):
   - Se convierte la cadena de entrada en una secuencia de tokens.

2. **Análisis sintáctico**:
   - Se aplica el algoritmo [especificar: por ejemplo, descendente recursivo, tabla LL(1), autómata LR, etc.].
   - Se analiza la estructura conforme a las reglas de la gramática.

3. **Salida**:
   - Confirmación de análisis exitoso o errores encontrados.
   - (Opcional) Visualización o exportación del árbol sintáctico.

## 📘 Ejemplo de uso

```bash
# Si es una aplicación por consola
$ python parser.py "a + b * (c - d)"
