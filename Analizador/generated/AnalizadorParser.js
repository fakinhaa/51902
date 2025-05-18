// Generated from c://Users//Fakinha//Desktop//Analizador//antlr-calculator-project//Analizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import AnalizadorListener from './AnalizadorListener.js';
import AnalizadorVisitor from './AnalizadorVisitor.js';

const serializedATN = [4,1,11,53,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,5,0,14,8,0,10,0,12,0,17,9,0,1,1,1,1,3,1,21,8,1,1,1,1,1,3,1,25,
8,1,3,1,27,8,1,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,3,4,42,
8,4,1,5,1,5,5,5,46,8,5,10,5,12,5,49,9,5,1,5,1,5,1,5,0,0,6,0,2,4,6,8,10,0,
1,3,0,1,5,7,8,11,11,52,0,15,1,0,0,0,2,26,1,0,0,0,4,28,1,0,0,0,6,33,1,0,0,
0,8,41,1,0,0,0,10,43,1,0,0,0,12,14,3,2,1,0,13,12,1,0,0,0,14,17,1,0,0,0,15,
13,1,0,0,0,15,16,1,0,0,0,16,1,1,0,0,0,17,15,1,0,0,0,18,20,3,4,2,0,19,21,
5,10,0,0,20,19,1,0,0,0,20,21,1,0,0,0,21,27,1,0,0,0,22,24,3,6,3,0,23,25,5,
10,0,0,24,23,1,0,0,0,24,25,1,0,0,0,25,27,1,0,0,0,26,18,1,0,0,0,26,22,1,0,
0,0,27,3,1,0,0,0,28,29,5,7,0,0,29,30,5,4,0,0,30,31,3,8,4,0,31,32,5,5,0,0,
32,5,1,0,0,0,33,34,5,1,0,0,34,35,5,2,0,0,35,36,3,10,5,0,36,37,5,3,0,0,37,
38,5,5,0,0,38,7,1,0,0,0,39,42,5,8,0,0,40,42,3,10,5,0,41,39,1,0,0,0,41,40,
1,0,0,0,42,9,1,0,0,0,43,47,5,6,0,0,44,46,7,0,0,0,45,44,1,0,0,0,46,49,1,0,
0,0,47,45,1,0,0,0,47,48,1,0,0,0,48,50,1,0,0,0,49,47,1,0,0,0,50,51,5,6,0,
0,51,11,1,0,0,0,6,15,20,24,26,41,47];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class AnalizadorParser extends antlr4.Parser {

    static grammarFileName = "Analizador.g4";
    static literalNames = [ null, "'output'", "'('", "')'", "'='", "';'", 
                            "'\\\"'" ];
    static symbolicNames = [ null, "KEYWORD", "PARENR", "PARENL", "EQUAL", 
                             "END", "TEXTLIM", "ID", "NUMBER", "WS", "NEWLINE", 
                             "CHAR" ];
    static ruleNames = [ "prog", "stat", "assignstat", "outputstat", "const", 
                         "textlit" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = AnalizadorParser.ruleNames;
        this.literalNames = AnalizadorParser.literalNames;
        this.symbolicNames = AnalizadorParser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, AnalizadorParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===7) {
	            this.state = 12;
	            this.stat();
	            this.state = 17;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, AnalizadorParser.RULE_stat);
	    var _la = 0;
	    try {
	        this.state = 26;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 18;
	            this.assignstat();
	            this.state = 20;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===10) {
	                this.state = 19;
	                this.match(AnalizadorParser.NEWLINE);
	            }

	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 22;
	            this.outputstat();
	            this.state = 24;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===10) {
	                this.state = 23;
	                this.match(AnalizadorParser.NEWLINE);
	            }

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignstat() {
	    let localctx = new AssignstatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, AnalizadorParser.RULE_assignstat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.match(AnalizadorParser.ID);
	        this.state = 29;
	        this.match(AnalizadorParser.EQUAL);
	        this.state = 30;
	        this.const_();
	        this.state = 31;
	        this.match(AnalizadorParser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	outputstat() {
	    let localctx = new OutputstatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, AnalizadorParser.RULE_outputstat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(AnalizadorParser.KEYWORD);
	        this.state = 34;
	        this.match(AnalizadorParser.PARENR);
	        this.state = 35;
	        this.textlit();
	        this.state = 36;
	        this.match(AnalizadorParser.PARENL);
	        this.state = 37;
	        this.match(AnalizadorParser.END);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	const_() {
	    let localctx = new ConstContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, AnalizadorParser.RULE_const);
	    try {
	        this.state = 41;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 39;
	            this.match(AnalizadorParser.NUMBER);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 40;
	            this.textlit();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	textlit() {
	    let localctx = new TextlitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, AnalizadorParser.RULE_textlit);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(AnalizadorParser.TEXTLIM);
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2494) !== 0)) {
	            this.state = 44;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 2494) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 49;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 50;
	        this.match(AnalizadorParser.TEXTLIM);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

AnalizadorParser.EOF = antlr4.Token.EOF;
AnalizadorParser.KEYWORD = 1;
AnalizadorParser.PARENR = 2;
AnalizadorParser.PARENL = 3;
AnalizadorParser.EQUAL = 4;
AnalizadorParser.END = 5;
AnalizadorParser.TEXTLIM = 6;
AnalizadorParser.ID = 7;
AnalizadorParser.NUMBER = 8;
AnalizadorParser.WS = 9;
AnalizadorParser.NEWLINE = 10;
AnalizadorParser.CHAR = 11;

AnalizadorParser.RULE_prog = 0;
AnalizadorParser.RULE_stat = 1;
AnalizadorParser.RULE_assignstat = 2;
AnalizadorParser.RULE_outputstat = 3;
AnalizadorParser.RULE_const = 4;
AnalizadorParser.RULE_textlit = 5;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_prog;
    }

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_stat;
    }

	assignstat() {
	    return this.getTypedRuleContext(AssignstatContext,0);
	};

	NEWLINE() {
	    return this.getToken(AnalizadorParser.NEWLINE, 0);
	};

	outputstat() {
	    return this.getTypedRuleContext(OutputstatContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignstatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_assignstat;
    }

	ID() {
	    return this.getToken(AnalizadorParser.ID, 0);
	};

	EQUAL() {
	    return this.getToken(AnalizadorParser.EQUAL, 0);
	};

	const_() {
	    return this.getTypedRuleContext(ConstContext,0);
	};

	END() {
	    return this.getToken(AnalizadorParser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterAssignstat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitAssignstat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitAssignstat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OutputstatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_outputstat;
    }

	KEYWORD() {
	    return this.getToken(AnalizadorParser.KEYWORD, 0);
	};

	PARENR() {
	    return this.getToken(AnalizadorParser.PARENR, 0);
	};

	textlit() {
	    return this.getTypedRuleContext(TextlitContext,0);
	};

	PARENL() {
	    return this.getToken(AnalizadorParser.PARENL, 0);
	};

	END() {
	    return this.getToken(AnalizadorParser.END, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterOutputstat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitOutputstat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitOutputstat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConstContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_const;
    }

	NUMBER() {
	    return this.getToken(AnalizadorParser.NUMBER, 0);
	};

	textlit() {
	    return this.getTypedRuleContext(TextlitContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterConst(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitConst(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitConst(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TextlitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_textlit;
    }

	TEXTLIM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AnalizadorParser.TEXTLIM);
	    } else {
	        return this.getToken(AnalizadorParser.TEXTLIM, i);
	    }
	};


	CHAR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AnalizadorParser.CHAR);
	    } else {
	        return this.getToken(AnalizadorParser.CHAR, i);
	    }
	};


	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AnalizadorParser.ID);
	    } else {
	        return this.getToken(AnalizadorParser.ID, i);
	    }
	};


	KEYWORD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AnalizadorParser.KEYWORD);
	    } else {
	        return this.getToken(AnalizadorParser.KEYWORD, i);
	    }
	};


	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AnalizadorParser.NUMBER);
	    } else {
	        return this.getToken(AnalizadorParser.NUMBER, i);
	    }
	};


	PARENR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AnalizadorParser.PARENR);
	    } else {
	        return this.getToken(AnalizadorParser.PARENR, i);
	    }
	};


	PARENL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AnalizadorParser.PARENL);
	    } else {
	        return this.getToken(AnalizadorParser.PARENL, i);
	    }
	};


	EQUAL = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AnalizadorParser.EQUAL);
	    } else {
	        return this.getToken(AnalizadorParser.EQUAL, i);
	    }
	};


	END = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AnalizadorParser.END);
	    } else {
	        return this.getToken(AnalizadorParser.END, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterTextlit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitTextlit(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitTextlit(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




AnalizadorParser.ProgContext = ProgContext; 
AnalizadorParser.StatContext = StatContext; 
AnalizadorParser.AssignstatContext = AssignstatContext; 
AnalizadorParser.OutputstatContext = OutputstatContext; 
AnalizadorParser.ConstContext = ConstContext; 
AnalizadorParser.TextlitContext = TextlitContext; 
