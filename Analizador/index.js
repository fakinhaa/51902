import AnalizadorLexer from "./generated/AnalizadorLexer.js";
import AnalizadorParser from "./generated/AnalizadorParser.js";
import { CustomAnalizadorListener } from "./CustomAnalizadorListener.js";
import { CustomAnalizadorVisitor } from "./CustomAnalizadorVisitor.js";
import antlr4, { CharStreams, CommonTokenStream, ParseTreeWalker } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;

    // Intento leer la entrada desde el archivo input - en forma sincrona.
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        // Si no es posible leer el archivo, solicitar la entrada del usuario por teclado
        input = await leerCadena(); // Simula lectura síncrona
        console.log(input);
    }

        // Proceso la entrada con el analizador para obtener el lexer
    let inputStream = CharStreams.fromString(input);
    let lexer = new AnalizadorLexer(inputStream);
    
    //Verificar si el lexer está generando tokens 
    console.log("Verificando tokens generados por el lexer...");
    const tokens = lexer.getAllTokens();
    if (tokens.length === 0) {
        console.error("No se generaron tokens. Verifica la entrada y la gramática.");
        return;
    }

    //Mostrar la tabla de tokens y lexemas
    console.log("\nTabla de Tokens y Lexemas:");
    console.log("--------------------------------------------------");
    console.log("| Lexema         | Token                         |");
    console.log("--------------------------------------------------");

    // Recorrer todos los tokens generados por el lexer
    for (let token of tokens) {
        // Obtener el nombre simbólico del token
        const tokenType = AnalizadorLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
        const lexema = token.text; // Obtener el lexema (texto del token)
        console.log(`| ${lexema.padEnd(14)} | ${tokenType.padEnd(30)}|`);
    }
    console.log("--------------------------------------------------"); 

    /* Vuelve a procesar la entrada, obtener el lexer, el código tokenizado y el parser 
     * Es necesario volver a procesar la entrada porque la función getAllTokens() consume
     * todos los tokens reconocidos y vacía el lexer. */

    
    inputStream = CharStreams.fromString(input);
    lexer = new AnalizadorLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new AnalizadorParser(tokenStream);
    let tree = parser.prog();
    
    // Verifico si se produjeron errores
    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
        process.exit()
    } 
    else {
        console.log("\nSintaxis de entrada válida.");
        console.log("\n");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        if(cadena_tree == 'prog'){
            console.log(`\nSe encontraron errores de semantica en la entrada.`);
            process.exit()
        }else{
            console.log(`Árbol de derivación: ${cadena_tree}`);
        }
        // Utilizo un listener y un walker para recorrer el arbol e indicar cada vez que reconoce una sentencia (stat)
        //const listener = new CustomAnalizadorListener();
        //ParseTreeWalker.DEFAULT.walk(listener, tree);

        // Utilizo un visitor para visitar los nodos que me interesan de mi arbol
        const visitor = new CustomAnalizadorVisitor();
        visitor.visit(tree);   
    }
    
    //Traduccion de codigo

    console.log('\n--- Código fuente ---');
    console.log(input);

    let codigoJS = traducirCodigoJS(input);
    console.log('\n--- Código fuente en JavaScript ---');
    console.log(codigoJS);
    
    // Ejecutar el input.txt
    console.log('\n--- Resultado ---');
    eval(codigoJS);

}

// Traduccion de input.txt a CodigoJS
function traducirCodigoJS(codigotxt){
    
    //Separar lineas de codigo
    const lineas = codigotxt.split('\n');
    let codigoJS = '';
    let match_assign_str = '';
    let match_assign_int = '';
    let match_output = '';
    
    for (let linea of lineas){
        linea = linea.trim();
        if (linea === '') continue;
        
        //Reconocimiento assignstats        
        //Textos
        match_assign_str = linea.match(/^(\w+)\s*=\s*\\"((?:[^\\"]|\\.)*)\\";/);
        
        //console.log("match_assign_str = ",match_assign_str,"\n");
        if (match_assign_str) {
            const nombreVar = match_assign_str[1];     //Nombre variable
            let valorVar = "`";                      //backticks declaracion
            valorVar += match_assign_str[2];         //Valor Variable
            valorVar += "`";                        //backticks declaracion
            codigoJS += `let ${nombreVar} = ${valorVar};\n`;
            codigoJS += `//Visualizar declaracion\n`;
            codigoJS += `console.log(${nombreVar});\n`;
        }        

        //Digitos
        match_assign_int = linea.match(/^(\w+)\s*=\s*(.+);/);
        //console.log("match_assign_int = ",match_assign_int,"\n");
        if (match_assign_int && !isNaN(match_assign_int[2])){
            const nombreVar = match_assign_int[1];      //Nombre variable
            const valorVar = Number(match_assign_int[2]);       //Valor Variable
            codigoJS += `let ${nombreVar} = ${valorVar};\n`;
            codigoJS += `//Visualizar declaracion\n`;
            codigoJS += `console.log(${nombreVar});\n`;
        }

        //Reconocimiento de outputstats
        match_output = linea.match(/^output\s*\(\\"([^\\"]*)\\"?\);$/);
        //console.log("match_output = ",match_output,"\n");
        if (match_output) {
            const expresion = match_output[1];
            codigoJS += `console.log("${expresion}");\n`;
        }
    }

    return codigoJS;
}


function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

// Ejecuta la función principal
main();
