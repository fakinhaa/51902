grammar Analizador;

//Gramatica
prog: (stat)* EOF;

stat: assignstat 
    | outputstat 
    ;

assignstat: ID EQUAL const END  
    ;

outputstat: KEYWORD PARENR TEXTLIT PARENL END
    ;

const: NUMBER
    | TEXTLIT
    ;

//Lexemas
KEYWORD : 'output' ;
PARENR : '(';
PARENL : ')';
EQUAL : '=';
END : ';';
TEXTLIT: '"' (~["])* '"';

ID: LETTER (LETTER | DIGIT | '_')*;
NUMBER : (DIGIT)+ ;
fragment DIGIT : [0-9]+;
fragment LETTER : [a-zA-Z]+;

WS: [ \t\r\n]+ -> skip;
