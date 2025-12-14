function cyrlat() {
	document.transcription.text2.value = document.transcription.text1.value
		.replace(/(B|b|C|c|Ç|ç|D|d|F|f|G|g|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)Ğ/g, "$1G")
		.replace(/(B|b|C|c|Ç|ç|D|d|F|f|G|g|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)ğ/g, "$1g")

		.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1$2$3.$4$5")
		.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1$2$3.$4$5")
		.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1$2.$3$4")
		.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1$2.$3$4")
		.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1.$2$3")
		.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(B|b|C|c|Ç|ç|D|d|F|f|G|g|Ğ|ğ|H|h|J|j|K|k|L|l|M|m|N|n|P|p|R|r|S|s|Ş|ş|T|t|V|v|Y|y|Z|z)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1.$2$3")
		.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1.$2")
		.replace(/(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)(A|a|Â|â|E|e|Ê|ê|I|ı|İ|i|Î|î|O|o|Ö|ö|U|u|Û|û|Ü|ü)/g, "$1.$2")

		.replace(/A/g, "a")
		.replace(/B/g, "b")
		.replace(/C|c/g, "dʒ")
		.replace(/Ç|ç/g, "tʃ")
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

		.replace(/Â|â/g, "ʲa")
		.replace(/Û|û/g, "ʲu")

		.replace(/eɰ/g, "eĵ")
		.replace(/ĵ(b|dʒ|tʃ|d|f|ɡ|h|ʒ|k|ɫ|m|n|p|ɾ|s|ʃ|t|v|j|z)/g, "ː$1")
		.replace(/ĵ/g, "j")
		.replace(/(a|i|o|u|y|œ|ɯ)ɰ/g, "$1ː")
		.replace(/ɰ/g, "")

		.replace(/(o|u|y|œ)v/g, "$1β")
		.replace(/v(o|u|y|œ)/g, "β$1")

		.replace(/(e|i|œ|y)ɡ/g, "$1ɟ")
		.replace(/(e|i|œ|y)k/g, "$1c")
		.replace(/(e|i|œ|y)ɫ/g, "$1l")
		.replace(/(e|i|œ|y)(b|dʒ|tʃ|d|f|ɡ|ɟ|ː|h|ʒ|k|c|ɫ|l|m|n|p|ɾ|s|ʃ|t|v|β|j|z)ɡ/g, "$1$2ɟ")
		.replace(/(e|i|œ|y)(b|dʒ|tʃ|d|f|ɡ|ɟ|ː|h|ʒ|k|c|ɫ|l|m|n|p|ɾ|s|ʃ|t|v|β|j|z)k/g, "$1$2c")
		.replace(/(e|i|œ|y)(b|dʒ|tʃ|d|f|ɡ|ɟ|ː|h|ʒ|k|c|ɫ|l|m|n|p|ɾ|s|ʃ|t|v|β|j|z)ɫ/g, "$1$2l")
		.replace(/ɡ(e|i|œ|y|ʲ)/g, "ɟ$1")
		.replace(/k(e|i|œ|y|ʲ)/g, "c$1")
		.replace(/ɫ(e|i|œ|y|ʲ)/g, "l$1")
		.replace(/(ɟ|c|l)ʲ/g, "$1")

		.replace(/ʲ(a|u)(b|dʒ|tʃ|d|f|ɡ|ɟ|ː|h|ʒ|k|c|ɫ|l|m|n|p|ɾ|s|ʃ|t|v|β|j|z)/g, "$1$2")
		.replace(/ʲ(a|u)/g, "$1ː")

		.replace(/n(ɡ|\.ɡ|k|\.k)/g, "ŋ$1")
		.replace(/n(ɟ|\.ɟ|c|\.c)/g, "ɲ$1")

		.replace(/\.mez/g, "\.mæz")
		.replace(/e(ɾ|l|m|n)/g, "æ$1")
		.replace(/eː(ɾ|l|m|n)/g, "æː$1")

		.replace(/(a|e|ɯ|i|o|œ|u|y)h/g, "$1ː")
		.replace(/(o|œ|u|y)β/g, "$1v")

		.replace(/(p|b|c|ɟ|m|f|v|β|h)yː/g, "$1jyː")
		.replace(/βj/g, "vj")

		.replace(/oɾ/g, "ɔːɾ")
		.replace(/(œ|œː)ɾ/g, "ɜːɾ")
		.replace(/(u|y)ːɾ/g, "ʊəɾ")
		.replace(/ajɾ/g, "áɪəɾ")
		.replace(/ejɾ/g, "ɛəɾ")
		.replace(/(ɯj|ij|ɯː|iː)ɾ/g, "ɪəɾ")
		.replace(/(oj|œj)ɾ/g, "ɔɪəɾ")
		.replace(/(uj|yj)ɾ/g, "wɪəɾ")

		.replace(/aj/g, "áɪ")
		.replace(/ej/g, "éɪ")
		.replace(/oj|œj/g, "ɔɪ")
		.replace(/(ɯ|i)j/g, "íː")
		.replace(/m(uj|yj)/g, "mʊ\.íː")
		.replace(/n(uj|yj)/g, "nʊ\.íː")
		.replace(/dʒ(uj|yj)/g, "dʒʊ\.íː")
		.replace(/z(uj|yj)/g, "zʊ\.íː")
		.replace(/ʒ(uj|yj)/g, "ʒʊ\.íː")
		.replace(/l(uj|yj)/g, "lʊ\.íː")
		.replace(/ɾ(uj|yj)/g, "ɾʊ\.íː")
		.replace(/j(uj|yj)/g, "jʊ\.íː")
		.replace(/β(uj|yj)/g, "βʊ\.íː")
		.replace(/(uj|yj)/g, "wíː")

		.replace(/aː/g, "ɑː")
		.replace(/eː/g, "ɛ")
		.replace(/ɯː|iː/g, "íː")
		.replace(/oː|œː/g, "óʊ")
		.replace(/uː|yː/g, "úː")

		.replace(/c(u|y)/g, "kj$1")
		.replace(/ɟ(u|y)/g, "ɡj$1")

		.replace(/a\.(b|dʒ|tʃ|d|f|ɡ|ɟ|ʒ|k|c|ɫ|l|m|n|ŋ|ɲ|p|ɾ|s|ʃ|t|v|w|β|z)/g, "ʌ$1\.")
		.replace(/e\.(b|dʒ|tʃ|d|f|ɡ|ɟ|ʒ|k|c|ɫ|l|m|n|ŋ|ɲ|p|ɾ|s|ʃ|t|v|w|β|z)/g, "ɛ$1\.")
		.replace(/i\.(b|dʒ|tʃ|d|f|ɡ|ɟ|ʒ|k|c|ɫ|l|m|n|ŋ|ɲ|p|ɾ|s|ʃ|t|v|w|β|z)/g, "ɪ$1\.")
		.replace(/(u|y)\.(b|dʒ|tʃ|d|f|ɡ|ɟ|ʒ|k|c|ɫ|l|m|n|ŋ|ɲ|p|ɾ|s|ʃ|t|v|w|β|z)/g, "ʊ$2\.")

		.replace(/a(b|dʒ|tʃ|d|f|ɡ|ɟ|ʒ|k|c|ɫ|l|m|n|ŋ|ɲ|p|ɾ|s|ʃ|t|v|w|β|z)/g, "ʌ$1")
		.replace(/e(b|dʒ|tʃ|d|f|ɡ|ɟ|ʒ|k|c|ɫ|l|m|n|ŋ|ɲ|p|ɾ|s|ʃ|t|v|w|β|z)/g, "ɛ$1")
		.replace(/i(b|dʒ|tʃ|d|f|ɡ|ɟ|ʒ|k|c|ɫ|l|m|n|ŋ|ɲ|p|ɾ|s|ʃ|t|v|w|β|z)/g, "ɪ$1")
		.replace(/(u|y)(b|dʒ|tʃ|d|f|ɡ|ɟ|ʒ|k|c|ɫ|l|m|n|ŋ|ɲ|p|ɾ|s|ʃ|t|v|w|β|z)/g, "ʊ$2")

		.replace(/a/g, "ɑː")
		.replace(/e/g, "eɪ")
		.replace(/ɯ/g, "ə")
		.replace(/i/g, "iː")
		.replace(/o|œ/g, "oʊ")
		.replace(/u|y/g, "uː")

		.replace(/á/g, "a")
		.replace(/é/g, "e")
		.replace(/ó/g, "o")
		.replace(/í/g, "i")
		.replace(/ú/g, "u")

		.replace(/c/g, "k")
		.replace(/ɟ/g, "ɡ")
		.replace(/ɫ/g, "l")
		.replace(/ɲ/g, "ŋ")
		.replace(/β/g, "w")
		.replace(/ɾ/g, "ɹ")
		.replace(/\u2060/g, "");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}