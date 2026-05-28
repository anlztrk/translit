function applyTier(str, rules) {
    for (const [re, to] of rules) {
        str = str.replace(re, to);
    }
    return str;
}

const T6 = [
    [/i/g, "ı"],
    [/a/g, "ă"],
    [/A/g, "Ă"],
];

const T5 = [
    [/(G|K|Y)Ă/g, "$1Ä"],
    [/(G|K|Y)I/g, "$1İ"],
    [/(G|K|Y)O/g, "$1Ö"],
    [/(G|K|Y)U/g, "$1Ü"],
    [/(G|K|Y|g|k|y)ă/g, "$1ä"],
    [/(G|K|Y|g|k|y)ı/g, "$1i"],
    [/(G|K|Y|g|k|y)o/g, "$1ö"],
    [/(G|K|Y|g|k|y)u/g, "$1ü"],

    [/Ă(G|K|g|k)/g, "Ä$1"],
    [/I(G|K|g|k)/g, "İ$1"],
    [/O(G|K|g|k)/g, "Ö$1"],
    [/U(G|K|g|k)/g, "Ü$1"],
    [/ă(g|k)/g, "ä$1"],
    [/ı(g|k)/g, "i$1"],
    [/o(g|k)/g, "ö$1"],
    [/u(g|k)/g, "ü$1"],
];

const T4 = [
    [/I(Ñ|Y|ñ|y)/g, "İ$1"],
    [/ı(ñ|y)/g, "i$1"],
];

const T3 = [
    [/(L|l)ı((?![bcçdfgğhklmnñpqrsştvxyz]))/g, "$1i$2"],
    [/LI((?![BCÇDFGĞHKLMNÑPQRSŞTVXYZ]))/g, "$1Lİ$2"],

    [/((?<![BCÇDFGĞHKLMNÑPQRSŞTVXYZ]))I/g, "$1İ"],
    [/((?<![BCÇDFGĞHKLMNÑPQRSŞTVXYZbcçdfgğhklmnñpqrsştvxyz]))ı/g, "$1i"],
];

const T2 = [
    [/([ĞXQ\u0027])[ĂÄ]/g, "$1A"],
    [/([ĞXQ\u0027])İ/g, "$1I"],
    [/([ĞXQ\u0027])Ö/g, "$1O"],
    [/([ĞXQ\u0027])Ü/g, "$1U"],
    [/([ĞXQğxq\u0027])[ăä]/g, "$1a"],
    [/([ĞXQğxq\u0027])i/g, "$1ı"],
    [/([ĞXQğxq\u0027])ö/g, "$1o"],
    [/([ĞXQğxq\u0027])ü/g, "$1u"],

    [/[ĂÄ]([ĞXQğxq])/g, "A$1"],
    [/İ([ĞXQğxq])/g, "I$1"],
    [/Ö([ĞXQğxq])/g, "O$1"],
    [/Ü([ĞXQğxq])/g, "U$1"],
    [/[ăä]([ğxq])/g, "a$1"],
    [/i([ğxq])/g, "ı$1"],
    [/ö([ğxq])/g, "o$1"],
    [/ü([ğxq])/g, "u$1"],
];

const T1 = [
	[/([AÂIOU])([BCÇDFGĞHKLMNÑPQRSŞTVXYZ]{0,3})Ă/g, "$1$2A"],
	[/([AÂIOUaâıou])([bcçdfgğhklmnñpqrsştvxyz]{0,3})ă/g, "$1$2a"],
	[/Ă([BCÇDFGĞHKLMNÑPQRSŞTVXYZ]{0,3})A/g, "A$1A"],
	[/Ă([bcçdfgğhklmnñpqrsştvxyz]{0,3})a/g, "A$1a"],
	[/ă([bcçdfgğhklmnñpqrsştvxyz]{0,3})a/g, "a$1a"],
];

const FINAL = [
    [/Â/g, "Å"],
    [/â/g, "å"],
	[/[ÄĂ]/g, "Ȧ"],
    [/[äă]/g, "ȧ"],
    [/Ö/g, "Ȯ"],
    [/ö/g, "ȯ"],
    [/Ü/g, "U̇"],
    [/ü/g, "u̇"],
];

function runTierUntilStable(str, rules, maxIterations = 20) {
    let current = str;

    for (let i = 0; i < maxIterations; i++) {
        let next = applyTier(current, rules);
        if (next === current) break;
        current = next;
    }

    return current;
}

function applyHarmony(str) {
    let current = str;

    // Each tier stabilizes independently
	current = runTierUntilStable(current, T6);
    current = runTierUntilStable(current, T5);
    current = runTierUntilStable(current, T4);
    current = runTierUntilStable(current, T3);
    current = runTierUntilStable(current, T2);
    current = runTierUntilStable(current, T1);

    // Final normalization applies ONLY ONCE
    current = applyTier(current, FINAL);

    return current;
}

function cyrlat() {
	document.transcription.text1.value = document.transcription.text1.value
		.replace(/['ˈ’ʼ‘ʻ´`ʿʹˊ׳′ʽߵ՚ߴ᾿ՙ῾‛ʾ՛ˋ]/g, "ʼ")
		.replace(/([OoGg])ʼ/g, "$1ʻ");
	
	document.transcription.text2.value = applyHarmony(document.transcription.text1.value
		.replace(/Щ/g, "Ш")
		.replace(/щ/g, "ш")
		.replace(/Ы/g, "И")
		.replace(/ы/g, "и")

		.replace(/(Б|В|Г|Ғ|Д|Ж|З|К|Қ|Л|М|Н|П|Р|С|Т|Ф|Х|Ҳ|Ц|Ч|Ш|Щ|б|в|г|ғ|д|ж|з|к|қ|л|м|н|п|р|с|т|ф|х|ҳ|ц|ч|ш|щ)Е/g, "$1Э")
		.replace(/(Б|В|Г|Ғ|Д|Ж|З|К|Қ|Л|М|Н|П|Р|С|Т|Ф|Х|Ҳ|Ц|Ч|Ш|Щ|б|в|г|ғ|д|ж|з|к|қ|л|м|н|п|р|с|т|ф|х|ҳ|ц|ч|ш|щ)е/g, "$1э")
		.replace(/(\p{Lu})Я/ug, "$1ЙА")
		.replace(/(\p{Lu})(\p{Lu}) Я/ug, "$1$2 ЙА")
		.replace(/Я (\p{Lu})(\p{Lu})/ug, "ЙА $1$2")
		.replace(/Я(\p{Lu})/ug, "ЙА$1")
		.replace(/Я/g, "Йа")
		.replace(/я/g, "йа")
		.replace(/(\p{Lu})Е/ug, "$1ЙЭ")
		.replace(/(\p{Lu})(\p{Lu}) Е/ug, "$1$2 ЙЭ")
		.replace(/Е (\p{Lu})(\p{Lu})/ug, "ЙЭ $1$2")
		.replace(/Е(\p{Lu})/ug, "ЙЭ$1")
		.replace(/Е/g, "Йэ")
		.replace(/е/g, "йэ")
		.replace(/(\p{Lu})Ё/ug, "$1ЙО")
		.replace(/(\p{Lu})(\p{Lu}) Ё/ug, "$1$2 ЙО")
		.replace(/Ё (\p{Lu})(\p{Lu})/ug, "ЙО $1$2")
		.replace(/Ё(\p{Lu})/ug, "ЙО$1")
		.replace(/Ё/g, "Йо")
		.replace(/ё/g, "йо")
		.replace(/(\p{Lu})Ю/ug, "$1ЙУ")
		.replace(/(\p{Lu})(\p{Lu}) Ю/ug, "$1$2 ЙУ")
		.replace(/Ю (\p{Lu})(\p{Lu})/ug, "ЙУ $1$2")
		.replace(/Ю(\p{Lu})/ug, "ЙУ$1")
		.replace(/Ю/g, "Йу")
		.replace(/ю/g, "йу")

		.replace(/(А|Э|И|О|У|Ў)Ц(Ъ|Ь)?(А|Б|В|Г|Ғ|Д|Ж|З|И|Й|К|Қ|Л|М|Н|О|П|Р|С|Т|У|Ў|Ф|Х|Ҳ|Ц|Ч|Ш|Э)/g, "$1ТС$2$3")
		.replace(/(А|Э|И|О|У|Ў|а|э|и|о|у|ў)ц(ъ|ь)?(а|б|в|г|ғ|д|ж|з|и|й|к|қ|л|м|н|о|п|р|с|т|у|ў|ф|х|ҳ|ц|ч|ш|э)/g, "$1тс$2$3")
		.replace(/Ц/g, "С")
		.replace(/ц/g, "с")

		.replace(/СҲ/g, "СЪҲ")
		.replace(/(С|с)ҳ/g, "$1ъҳ")

		.replace(/Ў(Ъ|ъ)/g, "Ў")
		.replace(/ўъ/g, "ў")

		.replace(/(\p{Lu})Ч/ug, "$1CH")
		.replace(/Ч (\p{Lu})(\p{Lu})/ug, "CH $1$2")
		.replace(/Ч(\p{Lu})/ug, "CH$1")
		.replace(/(\p{Lu})Ш/ug, "$1SH")
		.replace(/Ш (\p{Lu})(\p{Lu})/ug, "SH $1$2")
		.replace(/Ш(\p{Lu})/ug, "SH$1")

		.replace(/а/g, "a")
		.replace(/б/g, "b")
		.replace(/в/g, "v")
		.replace(/г/g, "g")
		.replace(/ғ/g, "g\u02bb")
		.replace(/д/g, "d")
		.replace(/ж/g, "j")
		.replace(/з/g, "z")
		.replace(/и/g, "i")
		.replace(/й/g, "y")
		.replace(/к/g, "k")
		.replace(/қ/g, "q")
		.replace(/л/g, "l")
		.replace(/м/g, "m")
		.replace(/н/g, "n")
		.replace(/о/g, "o")
		.replace(/п/g, "p")
		.replace(/р/g, "r")
		.replace(/с/g, "s")
		.replace(/т/g, "t")
		.replace(/у/g, "u")
		.replace(/ў/g, "o\u02bb")
		.replace(/ф/g, "f")
		.replace(/х/g, "x")
		.replace(/х/g, "x")
		.replace(/ҳ/g, "h")
		.replace(/ч/g, "ch")
		.replace(/ш/g, "sh")
		.replace(/ъ/g, "\u02bc")
		.replace(/ь/g, "")
		.replace(/э/g, "e")
		.replace(/А/g, "A")
		.replace(/Б/g, "B")
		.replace(/В/g, "V")
		.replace(/Г/g, "G")
		.replace(/Ғ/g, "G\u02bb")
		.replace(/Д/g, "D")
		.replace(/Ж/g, "J")
		.replace(/З/g, "Z")
		.replace(/И/g, "I")
		.replace(/Й/g, "Y")
		.replace(/К/g, "K")
		.replace(/Қ/g, "Q")
		.replace(/Л/g, "L")
		.replace(/М/g, "M")
		.replace(/Н/g, "N")
		.replace(/О/g, "O")
		.replace(/П/g, "P")
		.replace(/Р/g, "R")
		.replace(/С/g, "S")
		.replace(/Т/g, "T")
		.replace(/У/g, "U")
		.replace(/Ў/g, "O\u02bb")
		.replace(/Ф/g, "F")
		.replace(/Х/g, "X")
		.replace(/Х/g, "X")
		.replace(/Ҳ/g, "H")
		.replace(/Ч/g, "Ch")
		.replace(/Ш/g, "Sh")
		.replace(/Ъ/g, "\u02bc")
		.replace(/Ь/g, "")
		.replace(/Э/g, "E")
		.replace(/(\u2018|\u2019|\u02bb|\u02bc|\u0060|\u00b4)/g, "\u0027")
		.replace(/O\u0027/g, "Õ")
		.replace(/G\u0027/g, "Ğ")
		.replace(/S(H|h)/g, "Ş")
		.replace(/C(H|h)/g, "Ç")
		.replace(/N(G|g)/g, "Ñ")
		.replace(/O/g, "Â")
		.replace(/Õ/g, "O")
		.replace(/J/g, "C")
		.replace(/Ñ(A|Â|E|I|O|U)/g, "ÑG$1")
		.replace(/S\u0027(H|h)/g, "S$1")
		.replace(/(\u2018|\u2019|\u02bb|\u02bc|\u0060|\u00b4)/g, "\u0027")
		.replace(/o\u0027/g, "õ")
		.replace(/g\u0027/g, "ğ")
		.replace(/sh/g, "ş")
		.replace(/ch/g, "ç")
		.replace(/ng/g, "ñ")
		.replace(/o/g, "â")
		.replace(/õ/g, "o")
		.replace(/j/g, "c")
		.replace(/ñ(a|â|e|i|o|u)/g, "ñg$1")
		.replace(/s\u0027h/g, "sh")

		.replace(/LOBAT/g, "LO\u0027BAT")
		.replace(/MOCAZ/g, "MO\u0027CAZ")
		.replace(/MOCIZA/g, "MO\u0027CIZA")
		.replace(/MOTABAR/g, "MO\u0027TABAR")
		.replace(/MOTAD/g, "MO\u0027TAD")
		.replace(/MOTAZILA/g, "MO\u0027TAZILA")
		.replace(/MOTARIZA/g, "MO\u0027TARIZA")
		.replace(/(L|l)obat/g, "$1o\u0027bat")
		.replace(/(M|m)ocaz/g, "$1o\u0027caz")
		.replace(/(M|m)ociza/g, "$1o\u0027ciza")
		.replace(/(M|m)otabar/g, "$1o\u0027tabar")
		.replace(/(M|m)otad/g, "$1o\u0027tad")
		.replace(/(M|m)otazila/g, "$1o\u0027tazila")
		.replace(/(M|m)otariza/g, "$1o\u0027tariza"));

    document.transcription.text2.value = document.transcription.text2.value
		.replace(/([0-9])x/g, "$1×")
		.replace(/x([0-9])/g, "×$1")
		.replace(/X/g, "H")
		.replace(/x/g, "h")
		.replace(/×/g, "x");
}

function copy1() {
	navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
	navigator.clipboard.writeText(document.transcription.text2.value);
}
