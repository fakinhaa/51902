grammar Ejercicio5d;

//Gramatica
prog: stat+;

stat: decl 
    | assign
    | expr ';'
    ;

decl: ('let' | 'var') ID ('=' expr)? ';'
    ;

assign: ID '=' expr ';'
    ;

expr: expr (MUL | DIV) expr 
    | expr (ADD | SUB) expr 
    | '(' expr ')'                  
    | ID  
    | NUMBER                     
    ;

//Lexemas
LET: 'let';
VAR: 'var';
SEMI: ';';
ASSIGN: '=';
MUL: '*';
DIV: '/';
ADD: '+';
SUB: '-';
ID : [a-zA-Z]+;
NUMBER : [0-9]+;
WS: [ \t]+ -> skip;