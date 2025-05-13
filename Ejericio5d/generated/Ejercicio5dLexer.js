// Generated from c://Users//Fakinha//Desktop//Program//50268-main//antlr-calculator-project//Ejercicio5d.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,13,68,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,4,1,4,1,5,1,5,1,6,1,
6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,4,10,53,8,10,11,10,12,10,54,1,11,4,11,58,
8,11,11,11,12,11,59,1,12,4,12,63,8,12,11,12,12,12,64,1,12,1,12,0,0,13,1,
1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,1,0,3,2,0,
65,90,97,122,1,0,48,57,2,0,9,9,32,32,70,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,
0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,
1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,1,27,1,0,0,0,
3,29,1,0,0,0,5,31,1,0,0,0,7,35,1,0,0,0,9,39,1,0,0,0,11,41,1,0,0,0,13,43,
1,0,0,0,15,45,1,0,0,0,17,47,1,0,0,0,19,49,1,0,0,0,21,52,1,0,0,0,23,57,1,
0,0,0,25,62,1,0,0,0,27,28,5,40,0,0,28,2,1,0,0,0,29,30,5,41,0,0,30,4,1,0,
0,0,31,32,5,108,0,0,32,33,5,101,0,0,33,34,5,116,0,0,34,6,1,0,0,0,35,36,5,
118,0,0,36,37,5,97,0,0,37,38,5,114,0,0,38,8,1,0,0,0,39,40,5,59,0,0,40,10,
1,0,0,0,41,42,5,61,0,0,42,12,1,0,0,0,43,44,5,42,0,0,44,14,1,0,0,0,45,46,
5,47,0,0,46,16,1,0,0,0,47,48,5,43,0,0,48,18,1,0,0,0,49,50,5,45,0,0,50,20,
1,0,0,0,51,53,7,0,0,0,52,51,1,0,0,0,53,54,1,0,0,0,54,52,1,0,0,0,54,55,1,
0,0,0,55,22,1,0,0,0,56,58,7,1,0,0,57,56,1,0,0,0,58,59,1,0,0,0,59,57,1,0,
0,0,59,60,1,0,0,0,60,24,1,0,0,0,61,63,7,2,0,0,62,61,1,0,0,0,63,64,1,0,0,
0,64,62,1,0,0,0,64,65,1,0,0,0,65,66,1,0,0,0,66,67,6,12,0,0,67,26,1,0,0,0,
4,0,54,59,64,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class Ejercicio5dLexer extends antlr4.Lexer {

    static grammarFileName = "Ejercicio5d.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'('", "')'", "'let'", "'var'", "';'", "'='", 
                         "'*'", "'/'", "'+'", "'-'" ];
	static symbolicNames = [ null, null, null, "LET", "VAR", "SEMI", "ASSIGN", 
                          "MUL", "DIV", "ADD", "SUB", "ID", "NUMBER", "WS" ];
	static ruleNames = [ "T__0", "T__1", "LET", "VAR", "SEMI", "ASSIGN", "MUL", 
                      "DIV", "ADD", "SUB", "ID", "NUMBER", "WS" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

Ejercicio5dLexer.EOF = antlr4.Token.EOF;
Ejercicio5dLexer.T__0 = 1;
Ejercicio5dLexer.T__1 = 2;
Ejercicio5dLexer.LET = 3;
Ejercicio5dLexer.VAR = 4;
Ejercicio5dLexer.SEMI = 5;
Ejercicio5dLexer.ASSIGN = 6;
Ejercicio5dLexer.MUL = 7;
Ejercicio5dLexer.DIV = 8;
Ejercicio5dLexer.ADD = 9;
Ejercicio5dLexer.SUB = 10;
Ejercicio5dLexer.ID = 11;
Ejercicio5dLexer.NUMBER = 12;
Ejercicio5dLexer.WS = 13;



