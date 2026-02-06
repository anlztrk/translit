function cyrlat() {
	document.transcription.text1.value = document.transcription.text1.value
		.replace(/ä/g, "ə")
		.replace(/Ä/g, "Ə");
	
	document.transcription.text2.value = document.transcription.text1.value
		
		.replace(/([BCDGĞQK])([ABCDEƏGĞIİJQLMNOÖRUÜVYZabcdeəgğıijqlmnoöruüvyz])/g, "$1\u2060$2")
		.replace(/([bcdgğqk])([abcdeəgğıijqlmnoöruüvyz])/g, "$1\u2060$2")
		
		.replace(/B/g, "P")
		.replace(/C/g, "Ç")
		.replace(/D/g, "T")
		.replace(/K/g, "Ẏ")
		.replace(/G/g, "K")
		.replace(/Ğ/g, "X")
		.replace(/Q/g, "Ẍ") 
		.replace(/b/g, "p")
		.replace(/c/g, "ç")
		.replace(/d/g, "t")
		.replace(/k/g, "ẏ")
		.replace(/g/g, "k")
		.replace(/ğ/g, "x")
		.replace(/q/g, "ẍ")
		
		.replace(/\u2060P/g, "\u2060B")
		.replace(/\u2060Ç/g, "\u2060C")
		.replace(/\u2060T/g, "\u2060D")
		.replace(/\u2060Ẏ/g, "\u2060K")
		.replace(/\u2060K/g, "\u2060G")
		.replace(/\u2060X/g, "\u2060Ğ")
		.replace(/\u2060Ẍ/g, "\u2060Q")
		.replace(/\u2060p/g, "\u2060b")
		.replace(/\u2060ç/g, "\u2060c")
		.replace(/\u2060t/g, "\u2060d")
		.replace(/\u2060ẏ/g, "\u2060k")
		.replace(/\u2060k/g, "\u2060g")
		.replace(/\u2060x/g, "\u2060ğ")
		.replace(/\u2060ẍ/g, "\u2060q")
		
		.replace(/P\u2060/g, "B")
		.replace(/Ç\u2060/g, "C")
		.replace(/T\u2060/g, "D")
		.replace(/K\u2060/g, "G")
		.replace(/X\u2060/g, "Ğ")
		.replace(/Ẍ\u2060/g, "Q") 
		.replace(/Ẏ\u2060/g, "K")
		.replace(/p\u2060/g, "b")
		.replace(/ç\u2060/g, "c")
		.replace(/t\u2060/g, "d")
		.replace(/k\u2060/g, "g")
		.replace(/x\u2060/g, "ğ")
		.replace(/ẍ\u2060/g, "q")
		.replace(/ẏ\u2060/g, "k")
		
		.replace(/B([FSTKÇŞHXP])/g, "P$1")
		.replace(/C([FSTKÇŞHXP])/g, "Ç$1")
		.replace(/D([FSTKÇŞHXP])/g, "T$1")
		.replace(/G([FSTKÇŞHXP])/g, "K$1")
		.replace(/Ğ([FSTKÇŞHXP])/g, "X$1")
		.replace(/Q([FSTKÇŞHXP])/g, "Ẍ$1")
		.replace(/b([fstkçşhxp])/g, "p$1")
		.replace(/c([fstkçşhxp])/g, "ç$1")
		.replace(/d([fstkçşhxp])/g, "t$1")
		.replace(/g([fstkçşhxp])/g, "k$1")
		.replace(/ğ([fstkçşhxp])/g, "x$1")
		.replace(/q([fstkçşhxp])/g, "ẍ$1")
		
		.replace(/Ẍ/g, "Ğ")
		.replace(/ẍ/g, "ğ")
		
		.replace(/(K|k)(a|o|u)/g, "$1$2\u0302")
		.replace(/K(A|O|U)/g, "K$1\u0302")

		.replace(/(E|Ə|İ|Ö|Ü)Q/g, "$1Ġ")
		.replace(/(E|Ə|İ|Ö|Ü|e|ə|i|ö|ü)q/g, "$1ġ")
		.replace(/Q(E|Ə|İ|Ö|Ü|e|ə|i|ö|ü)/g, "Ġ$1")
		.replace(/q(e|ə|i|ö|ü)/g, "ġ$1")

		.replace(/(ġ)(a|o|u)/g, "g$2")
		.replace(/(Ġ)(A|O|U|a|o|u)/g, "G$2")

		.replace(/(E|Ə|İ|Ö|Ü)(B|C|Ç|D|F|G|Ğ|H|X|J|K|Q|L|M|N|P|R|S|Ş|T|V|Y|Ẏ|Z)Q/g, "$1$2Ġ")
		.replace(/(E|Ə|İ|Ö|Ü|e|ə|i|ö|ü)(b|c|ç|d|f|g|ğ|h|x|j|k|q|l|m|n|p|r|s|ş|t|v|y|ẏ|z)q/g, "$1$2ġ")

		.replace(/(Ġ|ġ)q/g, "$1ġ")
		.replace(/ĠQ/g, "ĠĠ")
		.replace(/q/g, "g")
		.replace(/Q/g, "G")
		.replace(/e/g, "ė")
		.replace(/E/g, "Ė")
		.replace(/ə/g, "e")
		.replace(/Ə/g, "E")
		.replace(/x/g, "ḥ")
		.replace(/X/g, "Ḥ")
		.normalize('NFC');
}

function latcyr() {}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}
