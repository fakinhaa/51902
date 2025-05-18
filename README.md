# Analizador Sintáctico

Este proyecto implementa un **analizador sintáctico** que procesa cadenas de entrada conforme a una gramática formal definida. El objetivo principal es verificar si una secuencia de tokens cumple con las reglas sintácticas del lenguaje y generar una estructura de árbol (o informe de errores) en base a eso.


## Instalación

Clona este repositorio: git clone https://github.com/fakinhaa/51902.git


# Instrucciones de Uso
```sh
Incorporar aquí las instrucciones detalladas de uso, gráficos explicativos y cualquier otra
información que considere importante para favorecer el testeo y evaluación de su proyecto de
analizador.

## Características

- Verificación sintáctica de expresiones según una gramática definida.
- Construcción de árbol sintáctico (opcional).
- Detección y reporte de errores sintácticos.
- Entrada por consola, archivo o API (según implementación).
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
