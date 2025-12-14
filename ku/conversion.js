var car;

function cyrlat() {
	let latinWords = {};
	let index = 0;
	document.transcription.text1.value = document.transcription.text1.value
		.replace(/([اەێیۆوبجچدفگغھحژکكلڵمنپقرڕسشتخڤزئع])ه/g, "$1ە")
		.replace(/ه/g, "ە")
		.replace(/ك/g, "ک")

		.replace(/\p{sc=Latin}+/ug, function(match) {
			let key = `__placeholder${index}__`;
			latinWords[key] = match;
			index++;
			return key;
		})

		.replace(/\u200c/g, "")
		.replace(/ي/g, "ی")
		.replace(/([اەێیۆوبجچدفگغھحژکكلڵمنپقرڕسشتخڤزئع])ه/g, "$1ە")
		.replace(/ه/g, "ە")

		.replace(/ا/g, "A")
		.replace(/ە/g, "E")
		.replace(/ێ/g, "Ê")
		.replace(/ی/g, "Î")
		.replace(/ۆ/g, "O")
		.replace(/و/g, "U")

		.replace(/ب/g, "B")
		.replace(/ج/g, "C")
		.replace(/چ/g, "Ç")
		.replace(/د/g, "D")
		.replace(/ف/g, "F")
		.replace(/گ/g, "G")
		.replace(/غ/g, "X")
		.replace(/ھ/g, "H")
		.replace(/ح/g, "H")
		.replace(/ژ/g, "J")
		.replace(/ک|ك/g, "K")
		.replace(/ل/g, "L")
		.replace(/ڵ/g, "L")
		.replace(/م/g, "M")
		.replace(/ن/g, "N")
		.replace(/پ/g, "P")
		.replace(/ق/g, "Q")
		.replace(/ر/g, "R")
		.replace(/ڕ/g, "R")
		.replace(/س/g, "S")
		.replace(/ش/g, "Ş")
		.replace(/ت/g, "T")
		.replace(/خ/g, "X")
		.replace(/ڤ/g, "V")
		.replace(/ز/g, "Z")

		.replace(/ئ/g, "")
		.replace(/ع/g, "")

		.replace(/\u060c/g, "\u002c")
		.replace(/\u061f/g, "\u003f")
		.replace(/\u061b/g, "\u003b")
		.replace(/\u06d4/g, "\u002e")
		.replace(/\u0640/g, "")

		.replace(/UU/g, "Û")
		.replace(/Û([AEÊÎO])/g, "ÛW$1")
		.replace(/U([AEÊÎO])/g, "W$1")
		.replace(/Î([AEÊOU])/g, "Y$1")
		.replace(/([AEÊÎO])Û/g, "$1WÛ")
		.replace(/([AEÊÎO])U/g, "$1W")
		.replace(/([AEÊOU])Î/g, "$1Y")
		.replace(/([BCÇDFGHJKLMNPQRSŞTVWXZ])ÎÎ/g, "$1ÎY")
		.replace(/ÎÎ/g, "YÎ")

		.replace(/([AEÊIÎOUÛ])([BCÇDFGHJKLMNPQRSŞTVWXYZ])([BCÇDFGHJKLMNPQRSŞTVWXYZ])([BCÇDFGHJKLMNPQRSŞTVWXYZ])/g, "$1$2$3I$4")
		.replace(/([BCÇDFGHJKLMNPQRSŞTVWXYZ])([BCÇDFGHJKLMNPQRSŞTVWXYZ])([BCÇDFGHJKLMNPQRSŞTVWXYZ])/g, "$1I$2$3")
		.replace(/(?<![AEÊIÎOUÛ])([BCÇDFGHJKLMNPQRSŞTVWXYZ])([BCÇDFGHJKLMNPQRSŞTVWXYZ])/g, "$1I$2")
		.replace(/([FHJSŞVXZ])([CÇYWFHJSŞVXZ])(?![AEÊIÎOUÛ])/g, "$1I$2")
		.replace(/([BDGKPQT])([FHJSŞVXZCÇYWBDGKPRQTMN])(?![AEÊIÎOUÛ])/g, "$1I$2")
		.replace(/([CÇ])([FHJSŞVXZMNRLYWCÇ])(?![AEÊIÎOUÛ])/g, "$1I$2")
		.replace(/([MN])([RLYWMN])(?![AEÊIÎOUÛ])/g, "$1I$2")
		.replace(/R([LYWR])(?![AEÊIÎOUÛ])/g, "RI$1")
		.replace(/L([FHJSŞVXZCÇRYWL])(?![AEÊIÎOUÛ])/g, "LI$1")
		.replace(/([YW])([CÇLYW])(?![AEÊIÎOUÛ])/g, "$1I$2")
		.replace(/XIW/g, "XW")

		.replace(/٠/g, "0")
		.replace(/١/g, "1")
		.replace(/٢/g, "2")
		.replace(/٣/g, "3")
		.replace(/٤|۴|۴/g, "4")
		.replace(/٥|۵/g, "5")
		.replace(/٦|۶|۶/g, "6")
		.replace(/٧|۷/g, "7")
		.replace(/٨/g, "8")
		.replace(/٩/g, "9")

		.replace(/(\p{L}|\p{N}|__placeholder\d+__)([\p{L}\t\u0020,;\u002d\u2010\u201c\u201d\u2018\u2019\u00ab\u00bb\u2039\u203a'"()]+)/gu, function(_, first, second) {
			return first + second.toLowerCase();
		});

	.normalize('NFC');
	Object.keys(latinWords).forEach(key => {
		document.transcription.text2.value = document.transcription.text2.value.replace(key, latinWords[key]);
	});
}
/*
function latcyr () { 
  car = document.transcription.text2.value;
  car = car.replace(/É/g, "Ë");
  car = car.replace(/é/g, "ë");
  car = car.replace(/\u00b4/g, "\u2019"); 
  car = car.replace(/\u02bc/g, "\u2019"); 
  car = car.replace(/\u0027/g, "\u2019");

  car = car.replace(/(B|D|F|G|H|J|K|L|M|N|P|Q|R|S|T|W|X|Y|Z|\u2019)(A|E|Ë|I|O|Ö|U|Ü)/g, "$1\u200c$2");
  car = car.replace(/(B|D|F|G|H|J|K|L|M|N|P|Q|R|S|T|W|X|Y|Z|b|d|f|g|h|j|k|l|m|n|p|q|r|s|t|w|x|y|z|\u2019)(a|e|ë|i|o|ö|u|ü)/g, "$1\u200c$2");

  car = car.replace(/(CH|Ch|ch)/g, "چ"); 
  car = car.replace(/(GH|Gh|gh)/g, "غ"); 
  car = car.replace(/(NG|Ng|ng)/g, "ڭ"); 
  car = car.replace(/(SH|Sh|sh)/g, "ش"); 
  car = car.replace(/(ZH|Zh|zh)/g, "ژ"); 
  
  car = car.replace(/[Aa]/g, "ئا");
  car = car.replace(/[Bb]/g, "ب"); 
  car = car.replace(/[Dd]/g, "د"); 
  car = car.replace(/[Ëë]/g, "ئې"); 
  car = car.replace(/[Ee]/g, "ئە"); 
  car = car.replace(/[Ff]/g, "ف"); 
  car = car.replace(/[Gg]/g, "گ");   
  car = car.replace(/[Hh]/g, "ھ"); 
  car = car.replace(/[Ii]/g, "ئى");
  car = car.replace(/[Jj]/g, "ج");   
  car = car.replace(/[Kk]/g, "ك");
  car = car.replace(/[Ll]/g, "ل"); 
  car = car.replace(/[Mm]/g, "م"); 
  car = car.replace(/[Nn]/g, "ن");   
  car = car.replace(/[Oo]/g, "ئو"); 
  car = car.replace(/[Öö]/g, "ئۆ"); 
  car = car.replace(/[Pp]/g, "پ"); 
  car = car.replace(/[Qq]/g, "ق"); 
  car = car.replace(/[Rr]/g, "ر"); 
  car = car.replace(/[Ss]/g, "س");   
  car = car.replace(/[Tt]/g, "ت"); 
  car = car.replace(/[Uu]/g, "ئۇ");
  car = car.replace(/[Üü]/g, "ئۈ"); 
  car = car.replace(/[Ww]/g, "ۋ"); 
  car = car.replace(/[Xx]/g, "خ"); 
  car = car.replace(/[Yy]/g, "ي"); 
  car = car.replace(/[Zz]/g, "ز"); 
  car = car.replace(/\u2019/g, "ئ");  
  car = car.replace(/ئاللاھ/g, "ﷲ"); 
  
  car = car.replace(/(گ|س|ز)ئھ/g, "$1ھ")
  car = car.replace(/نئغ/g, "نغ");
  car = car.replace(/\u200cئ/g, "");
  
  car = car.replace(/\u002c/g, "\u060c"); 
  car = car.replace(/\u003f/g, "\u061f"); 
  car = car.replace(/\u003b/g, "\u061b"); 
  car = car.replace(/\u002e/g, "\u06d4");
document.transcription.text1.value=car; 
} */
function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}