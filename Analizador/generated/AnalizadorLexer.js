// Generated from c://Users//Fakinha//Desktop//Analizador//antlr-calculator-project//Analizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,11,85,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,5,1,5,1,
5,1,6,1,6,1,6,1,6,5,6,50,8,6,10,6,12,6,53,9,6,1,7,1,7,5,7,57,8,7,10,7,12,
7,60,9,7,1,8,4,8,63,8,8,11,8,12,8,64,1,9,4,9,68,8,9,11,9,12,9,69,1,10,4,
10,73,8,10,11,10,12,10,74,1,10,1,10,1,11,3,11,80,8,11,1,11,1,11,1,12,1,12,
0,0,13,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,0,19,0,21,9,23,10,25,11,1,0,
3,1,0,48,57,2,0,65,90,97,122,3,0,9,10,13,13,32,32,90,0,1,1,0,0,0,0,3,1,0,
0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,
0,0,0,0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,1,27,1,0,0,0,3,34,1,0,0,0,5,
36,1,0,0,0,7,38,1,0,0,0,9,40,1,0,0,0,11,42,1,0,0,0,13,45,1,0,0,0,15,54,1,
0,0,0,17,62,1,0,0,0,19,67,1,0,0,0,21,72,1,0,0,0,23,79,1,0,0,0,25,83,1,0,
0,0,27,28,5,111,0,0,28,29,5,117,0,0,29,30,5,116,0,0,30,31,5,112,0,0,31,32,
5,117,0,0,32,33,5,116,0,0,33,2,1,0,0,0,34,35,5,40,0,0,35,4,1,0,0,0,36,37,
5,41,0,0,37,6,1,0,0,0,38,39,5,61,0,0,39,8,1,0,0,0,40,41,5,59,0,0,41,10,1,
0,0,0,42,43,5,92,0,0,43,44,5,34,0,0,44,12,1,0,0,0,45,51,3,19,9,0,46,50,3,
19,9,0,47,50,3,17,8,0,48,50,5,95,0,0,49,46,1,0,0,0,49,47,1,0,0,0,49,48,1,
0,0,0,50,53,1,0,0,0,51,49,1,0,0,0,51,52,1,0,0,0,52,14,1,0,0,0,53,51,1,0,
0,0,54,58,3,17,8,0,55,57,3,17,8,0,56,55,1,0,0,0,57,60,1,0,0,0,58,56,1,0,
0,0,58,59,1,0,0,0,59,16,1,0,0,0,60,58,1,0,0,0,61,63,7,0,0,0,62,61,1,0,0,
0,63,64,1,0,0,0,64,62,1,0,0,0,64,65,1,0,0,0,65,18,1,0,0,0,66,68,7,1,0,0,
67,66,1,0,0,0,68,69,1,0,0,0,69,67,1,0,0,0,69,70,1,0,0,0,70,20,1,0,0,0,71,
73,7,2,0,0,72,71,1,0,0,0,73,74,1,0,0,0,74,72,1,0,0,0,74,75,1,0,0,0,75,76,
1,0,0,0,76,77,6,10,0,0,77,22,1,0,0,0,78,80,5,13,0,0,79,78,1,0,0,0,79,80,
1,0,0,0,80,81,1,0,0,0,81,82,5,10,0,0,82,24,1,0,0,0,83,84,9,0,0,0,84,26,1,
0,0,0,8,0,49,51,58,64,69,74,79,1,6,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class AnalizadorLexer extends antlr4.Lexer {

    static grammarFileName = "Analizador.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'output'", "'('", "')'", "'='", "';'", "'\\\"'" ];
	static symbolicNames = [ null, "KEYWORD", "PARENR", "PARENL", "EQUAL", 
                          "END", "TEXTLIM", "ID", "NUMBER", "WS", "NEWLINE", 
                          "CHAR" ];
	static ruleNames = [ "KEYWORD", "PARENR", "PARENL", "EQUAL", "END", "TEXTLIM", 
                      "ID", "NUMBER", "DIGIT", "LETTER", "WS", "NEWLINE", 
                      "CHAR" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

AnalizadorLexer.EOF = antlr4.Token.EOF;
AnalizadorLexer.KEYWORD = 1;
AnalizadorLexer.PARENR = 2;
AnalizadorLexer.PARENL = 3;
AnalizadorLexer.EQUAL = 4;
AnalizadorLexer.END = 5;
AnalizadorLexer.TEXTLIM = 6;
AnalizadorLexer.ID = 7;
AnalizadorLexer.NUMBER = 8;
AnalizadorLexer.WS = 9;
AnalizadorLexer.NEWLINE = 10;
AnalizadorLexer.CHAR = 11;



