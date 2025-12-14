function cyrlat() {
	document.transcription.text2.value = document.transcription.text1.value
		.replace(/([AEËIOUY])([B|C|Ç|D|DH|F|G|GJ|H|J|K|L|M|N|NG|NJ|P|R|S|SH|T|TH|V|X|XH|Z|ZH]{1,2})Ë/g, "$1$2Ê")
		.replace(/([AEËIOUYaeëiouy])([b|c|ç|d|dh|f|g|gj|h|j|k|l|m|n|ng|nj|p|r|s|sh|t|th|v|x|xh|z|zh]{1,2})ë/g, "$1$2ê")
		.replace(/Ê([A-ZÇËa-zçë])/g, "Ë$1")
		.replace(/ê([a-zçë])/g, "ë$1")
		.replace(/[Êê]/g, "")
		.replace(/I/g, "İ")
		.replace(/C/g, "Ts")
		.replace(/Y/g, "Ü")
		.replace(/D[Hh]/g, "D")
		.replace(/R[Rr]/g, "R")
		.replace(/T[Hh]/g, "T")
		.replace(/X[Hh]/g, "C")
		.replace(/G[Jj]/g, "C")
		.replace(/J/g, "Y")
		.replace(/Z[Hh]/g, "J")
		.replace(/S[Hh]/g, "Ş")
		.replace(/L[Ll]/g, "Ł")
		.replace(/LA/g, "LÂ")
		.replace(/La/g, "Lâ")
		.replace(/LU/g, "LÛ")
		.replace(/Lu/g, "Lû")
		.replace(/LO/g, "LYO")
		.replace(/Lo/g, "Lyo")
		.replace(/c/g, "ts")
		.replace(/rr/g, "r")
		.replace(/gj/g, "c")
		.replace(/dh/g, "d")
		.replace(/th/g, "t")
		.replace(/xh/g, "c")
		.replace(/y/g, "ü")
		.replace(/j/g, "y")
		.replace(/zh/g, "j")
		.replace(/sh/g, "ş")
		.replace(/ll/g, "ł")
		.replace(/la/g, "lâ")
		.replace(/lu/g, "lû")
		.replace(/lo/g, "lyo")
		.replace(/ł/g, "l")
		.replace(/q/g, "ç")
		.replace(/x/g, "dz")
		.replace(/ë/g, "ı")
		.replace(/Ł/g, "L")
		.replace(/Q/g, "Ç")
		.replace(/X/g, "Dz")
		.replace(/NG([GK])/g, "Ń$1")
		.replace(/Ng([gk])/g, "Ń$1")
		.replace(/ng([gk])/g, "ń$1")
		.replace(/NG/g, "NĞ")
		.replace(/([Nn])g/g, "$1ğ")
		.replace(/Ń/g, "N")
		.replace(/ń/g, "n");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);

}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);

}