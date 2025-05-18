grammar Analizador;

//Gramatica
prog: (stat)*;

stat: assignstat (NEWLINE)?
    | outputstat (NEWLINE)?
    ;

assignstat: ID '=' const ';'  
    ;

outputstat: 'output' '(' textlit ')' ';'
    ;

const: NUMBER
    | textlit
    ;

textlit: TEXTLIM (CHAR | ID | KEYWORD | NUMBER | PARENR | PARENL | EQUAL | END)* TEXTLIM
    ;

//Lexemas
KEYWORD : 'output' ;
PARENR : '(';
PARENL : ')';
EQUAL : '=';
END : ';';
TEXTLIM : '\\"';

ID: LETTER (LETTER | DIGIT | '_')*;
NUMBER : DIGIT (DIGIT)* ;
fragment DIGIT : [0-9]+;
fragment LETTER : [a-zA-Z]+;

WS: [ \t\r\n]+ -> skip;
NEWLINE:'\r'? '\n';
CHAR : . ;



