// Generated from c://Users//Fakinha//Desktop//51902//Analizador//Analizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import AnalizadorListener from './AnalizadorListener.js';
import AnalizadorVisitor from './AnalizadorVisitor.js';

const serializedATN = [4,1,9,36,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,5,0,12,8,0,10,0,12,0,15,9,0,1,0,1,0,1,1,1,1,3,1,21,8,1,1,2,1,2,1,2,1,
2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,0,0,5,0,2,4,6,8,0,1,2,0,6,6,8,
8,32,0,13,1,0,0,0,2,20,1,0,0,0,4,22,1,0,0,0,6,27,1,0,0,0,8,33,1,0,0,0,10,
12,3,2,1,0,11,10,1,0,0,0,12,15,1,0,0,0,13,11,1,0,0,0,13,14,1,0,0,0,14,16,
1,0,0,0,15,13,1,0,0,0,16,17,5,0,0,1,17,1,1,0,0,0,18,21,3,4,2,0,19,21,3,6,
3,0,20,18,1,0,0,0,20,19,1,0,0,0,21,3,1,0,0,0,22,23,5,7,0,0,23,24,5,4,0,0,
24,25,3,8,4,0,25,26,5,5,0,0,26,5,1,0,0,0,27,28,5,1,0,0,28,29,5,2,0,0,29,
30,5,6,0,0,30,31,5,3,0,0,31,32,5,5,0,0,32,7,1,0,0,0,33,34,7,0,0,0,34,9,1,
0,0,0,2,13,20];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class AnalizadorParser extends antlr4.Parser {

    static grammarFileName = "Analizador.g4";
    static literalNames = [ null, "'output'", "'('", "')'", "'='", "';'" ];
    static symbolicNames = [ null, "KEYWORD", "PARENR", "PARENL", "EQUAL", 
                             "END", "TEXTLIT", "ID", "NUMBER", "WS" ];
    static ruleNames = [ "prog", "stat", "assignstat", "outputstat", "const" ];

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
	        this.state = 13;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===1 || _la===7) {
	            this.state = 10;
	            this.stat();
	            this.state = 15;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 16;
	        this.match(AnalizadorParser.EOF);
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
	    try {
	        this.state = 20;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 18;
	            this.assignstat();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 19;
	            this.outputstat();
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
	        this.state = 22;
	        this.match(AnalizadorParser.ID);
	        this.state = 23;
	        this.match(AnalizadorParser.EQUAL);
	        this.state = 24;
	        this.const_();
	        this.state = 25;
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
	        this.state = 27;
	        this.match(AnalizadorParser.KEYWORD);
	        this.state = 28;
	        this.match(AnalizadorParser.PARENR);
	        this.state = 29;
	        this.match(AnalizadorParser.TEXTLIT);
	        this.state = 30;
	        this.match(AnalizadorParser.PARENL);
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



	const_() {
	    let localctx = new ConstContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, AnalizadorParser.RULE_const);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        _la = this._input.LA(1);
	        if(!(_la===6 || _la===8)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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


}

AnalizadorParser.EOF = antlr4.Token.EOF;
AnalizadorParser.KEYWORD = 1;
AnalizadorParser.PARENR = 2;
AnalizadorParser.PARENL = 3;
AnalizadorParser.EQUAL = 4;
AnalizadorParser.END = 5;
AnalizadorParser.TEXTLIT = 6;
AnalizadorParser.ID = 7;
AnalizadorParser.NUMBER = 8;
AnalizadorParser.WS = 9;

AnalizadorParser.RULE_prog = 0;
AnalizadorParser.RULE_stat = 1;
AnalizadorParser.RULE_assignstat = 2;
AnalizadorParser.RULE_outputstat = 3;
AnalizadorParser.RULE_const = 4;

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

	EOF() {
	    return this.getToken(AnalizadorParser.EOF, 0);
	};

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

	TEXTLIT() {
	    return this.getToken(AnalizadorParser.TEXTLIT, 0);
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

	TEXTLIT() {
	    return this.getToken(AnalizadorParser.TEXTLIT, 0);
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




AnalizadorParser.ProgContext = ProgContext; 
AnalizadorParser.StatContext = StatContext; 
AnalizadorParser.AssignstatContext = AssignstatContext; 
AnalizadorParser.OutputstatContext = OutputstatContext; 
AnalizadorParser.ConstContext = ConstContext; 
