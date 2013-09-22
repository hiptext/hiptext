// Hiptext Version 0.0.3 (PRERELEASE)
//Copyright (c) 2013 Hiptext JS

//Permission is hereby granted, free of charge, to any person obtaining a copy of
//this software and associated documentation files (the "Software"), to deal in
//the Software without restriction, including without limitation the rights to
//use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
//the Software, and to permit persons to whom the Software is furnished to do so,
//subject to the following conditions:

//The above copyright notice and this permission notice shall be included in all
//copies or substantial portions of the Software.

//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
//FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
//COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
//IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
//CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var sortSymbols = (function(data) {
	var codes = [
		//Math Symbols
		['?', '&forall;'],
		['?', '&part;'],
		['?', '&exist;'],
		['Ø', '&empty;'],
		['?', '&nabla;'],
		['?', '&isin;'],
		['?', '&notin;'],
		['?', '&ni;'],
		['?', '&prod;'],
		['?', '&sum;'],
		['-', '&minus;'],
		['*', '&lowast;'],
		['v', '&radic;'],
		['?', '&prop;'],
		['8', '&infin;'],
		['?', '&ang;'],
		['?', '&and;'],
		['?', '&or;'],
		['n', '&cap;'],
		['?', '&cup;'],
		['?', '&int;'],
		['?', '&there4;'],
		['~', '&sim;'],
		['?', '&cong;'],
		['˜', '&asymp;'],
		['?', '&ne;'],
		['=', '&equiv;'],
		['=', '&le;'],
		['=', '&ge;'],
		['?', '&sub;'],
		['?', '&sup;'],
		['?', '&nsub;'],
		['?', '&sube;'],
		['?', '&supe;'],
		['?', '&oplus;'],
		['?', '&otimes;'],
		['?', '&perp;'],
		['·', '&sdot;']
		//More Symbols Coming Soon
	];
	var temp = data
	for (var i = 0; i < codes.length; i++) {
	    temp = temp.replace(codes[i][0], codes[i][1]);
	}
	return temp;
});

var Hiptext = {
    parse: function(code) {
        code = sortSymbols(code);
    }
};