function cyrlat() {
	document.transcription.text2.value = document.transcription.text1.value
		.replace(/[\u0027\u2019]/g, "")
		
		.replace(/(B|b|C|c|Ç|ç|D|d|F|f|G|g|H|h|J|j|K|k|L|l|Ĺ|ĺ|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)Ğ/g, "$1G")
		.replace(/(B|b|C|c|Ç|ç|D|d|F|f|G|g|H|h|J|j|K|k|L|l|Ĺ|ĺ|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)ğ/g, "$1g")

		.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|Ĺ|ĺ|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|Ĺ|ĺ|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|Ĺ|ĺ|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1$2$3.$4$5")
		.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|Ĺ|ĺ|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|Ĺ|ĺ|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|Ĺ|ĺ|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1$2$3.$4$5")
		.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|Ĺ|ĺ|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|Ĺ|ĺ|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1$2.$3$4")
		.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|Ĺ|ĺ|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|Ĺ|ĺ|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1$2.$3$4")
		.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|Ĺ|ĺ|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1.$2$3")
		.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|Ĺ|ĺ|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1.$2$3")
		.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1.$2")
		.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1.$2")

		.replace(/A/g, "a")
		.replace(/B/g, "b")
		.replace(/C|c/g, "ʤ")
		.replace(/Ç|ç/g, "ʧ")
		.replace(/D/g, "d")
		.replace(/E/g, "e")
		.replace(/Ê|ê/g, "eː")
		.replace(/F/g, "f")
		.replace(/G|g/g, "ɡ")
		.replace(/Ğ|ğ/g, "ɰ")
		.replace(/H/g, "h")
		.replace(/I|ı/g, "ɯ")
		.replace(/İ/g, "i")
		.replace(/Î|î/g, "iː")
		.replace(/J|j/g, "ʒ")
		.replace(/K/g, "k")
		.replace(/L|l/g, "ɫ")
		.replace(/M/g, "m")
		.replace(/N/g, "n")
		.replace(/O/g, "o")
		.replace(/Ö|ö/g, "œ")
		.replace(/P/g, "p")
		.replace(/R|r/g, "ɾ")
		.replace(/S/g, "s")
		.replace(/Ş|ş/g, "ʃ")
		.replace(/T/g, "t")
		.replace(/U/g, "u")
		.replace(/Y|y/g, "j")
		.replace(/Ü|ü/g, "y")
		.replace(/V/g, "v")
		.replace(/Z/g, "z")

		.replace(/(b|ʤ|ʧ|d|f|ɡ|h|ʒ|k|ɫ|m|n|p|ɾ|s|ʃ|t|v|j|z)(b|ʤ|ʧ|d|f|ɡ|h|ʒ|k|ɫ|m|n|p|ɾ|s|ʃ|t|v|j|z)(a|â|o|u|û|ɯ|e|ê|i|î|y|œ)/g, "$1ɯ\.$2$3")

		.replace(/Â|â/g, "ʲa")
		.replace(/Û|û/g, "ʲu")

		.replace(/eɰ/g, "eĵ")
		.replace(/ĵ(b|ʤ|ʧ|d|f|ɡ|h|ʒ|k|ɫ|m|n|p|ɾ|s|ʃ|t|v|j|z)/g, "ː$1")
		.replace(/ĵ/g, "j")
		.replace(/(a|i|o|u|y|œ|ɯ)ɰ/g, "$1ː")
		.replace(/a\.i/g, "aː.i")
		.replace(/a\.ɰɯ/g, "a.ɰa")
		.replace(/ɰ/g, "")

		.replace(/(o|u|y|œ)v/g, "$1β")
		.replace(/v(o|u|y|œ)/g, "β$1")

		.replace(/(e|i|œ|y)ɡ/g, "$1ɟ")
		.replace(/(e|i|œ|y)k/g, "$1c")
		.replace(/(e|i|œ|y)ɫ/g, "$1l")
		.replace(/(e|i|œ|y)(b|ʤ|ʧ|d|f|ɡ|ɟ|ː|h|ʒ|k|c|ɫ|l|m|n|p|ɾ|s|ʃ|t|v|β|j|z)ɡ/g, "$1$2ɟ")
		.replace(/(e|i|œ|y)(b|ʤ|ʧ|d|f|ɡ|ɟ|ː|h|ʒ|k|c|ɫ|l|m|n|p|ɾ|s|ʃ|t|v|β|j|z)k/g, "$1$2c")
		.replace(/(e|i|œ|y)(b|ʤ|ʧ|d|f|ɡ|ɟ|ː|h|ʒ|k|c|ɫ|l|m|n|p|ɾ|s|ʃ|t|v|β|j|z)ɫ/g, "$1$2l")
		.replace(/ɡ(e|i|œ|y|ʲ)/g, "ɟ$1")
		.replace(/k(e|i|œ|y|ʲ)/g, "c$1")
		.replace(/ɫ(e|i|œ|y|ʲ)/g, "l$1")
		.replace(/(ɟ|c|l)ʲ/g, "$1")

		.replace(/ʲ(a|u)(b|ʤ|ʧ|d|f|ɡ|ɟ|ː|h|ʒ|k|c|ɫ|l|m|n|p|ɾ|s|ʃ|t|v|β|j|z)/g, "$1$2")
		.replace(/ʲ(a|u)/g, "$1ː")

		.replace(/n(ɡ|\.ɡ|k|\.k)/g, "ŋ$1")
		.replace(/n(ɟ|\.ɟ|c|\.c)/g, "ɲ$1")

		.replace(/.mez/g, ".mæz")
		.replace(/e(ɾ|l|m|n)/g, "æ$1")
		.replace(/eː(ɾ|l|m|n)/g, "æː$1")

		.replace(/(Ĺ|ĺ)/g, "l")

		.replace(/f\.f/g, "fː")
		.replace(/v\.v/g, "vː")
		.replace(/β\.β/g, "βː")
		.replace(/s\.s/g, "sː")
		.replace(/z\.z/g, "zː")
		.replace(/t\.t/g, "tː")
		.replace(/d\.d/g, "dː")
		.replace(/k\.k/g, "kː")
		.replace(/c\.c/g, "cː")
		.replace(/ɡ\.ɡ/g, "ɡː")
		.replace(/ɟ\.ɟ/g, "cː")
		.replace(/ʧ\.ʧ/g, "ʧː")
		.replace(/ʤ\.ʤ/g, "ʤː")
		.replace(/ʃ\.ʃ/g, "ʃː")
		.replace(/ʒ\.ʒ/g, "ʒː")
		.replace(/h\.h/g, "hː")
		.replace(/p\.p/g, "pː")
		.replace(/b\.b/g, "bː")
		.replace(/m\.m/g, "mː")
		.replace(/n\.n/g, "nː")
		.replace(/l\.l/g, "lː")
		.replace(/ɫ\.ɫ/g, "ɫː")
		.replace(/j\.j/g, "jː")
		.replace(/ʤ/g, "d͡ʒ")
		.replace(/ʧ/g, "t͡ʃ")
		.replace(/a/g, "ɑ")
		.replace(/æ/g, "ɛ")
		.replace(/ɟ/g, "ɡʲ")
		.replace(/c/g, "kʲ");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}