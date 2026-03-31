function applyTier(str, rules) {
    for (const [re, to] of rules) {
        str = str.replace(re, to);
    }
    return str;
}

const T5 = [
    [/(Ğ|X|Q)Ä/g, "$1A"],
    [/(Ğ|X|Q)İ/g, "$1I"],
    [/(Ğ|X|Q)Ö/g, "$1O"],
    [/(Ğ|X|Q)Ü/g, "$1U"],
    [/(Ğ|X|Q|ğ|x|q)ä/g, "$1a"],
    [/(Ğ|X|Q|ğ|x|q)i/g, "$1ı"],
    [/(Ğ|X|Q|ğ|x|q)ö/g, "$1o"],
    [/(Ğ|X|Q|ğ|x|q)ü/g, "$1u"],

    [/Ä(Ğ|X|Q|ğ|x|q)/g, "A$1"],
    [/İ(Ğ|X|Q|ğ|x|q)/g, "I$1"],
    [/Ö(Ğ|X|Q|ğ|x|q)/g, "O$1"],
    [/Ü(Ğ|X|Q|ğ|x|q)/g, "U$1"],
    [/ä(ğ|x|q)/g, "a$1"],
    [/i(ğ|x|q)/g, "ı$1"],
    [/ö(ğ|x|q)/g, "o$1"],
    [/ü(ğ|x|q)/g, "u$1"],
];

const T4 = [
    [/(G|H|K|Y)A/g, "$1Ä"],
    [/(G|H|K|Y)I/g, "$1İ"],
    [/(G|H|K|Y)O/g, "$1Ö"],
    [/(G|H|K|Y)U/g, "$1Ü"],
    [/(G|H|K|Y|g|h|k|y)a/g, "$1ä"],
    [/(G|H|K|Y|g|h|k|y)ı/g, "$1i"],
    [/(G|H|K|Y|g|h|k|y)o/g, "$1ö"],
    [/(G|H|K|Y|g|h|k|y)u/g, "$1ü"],

    [/A(G|H|K|g|h|k)/g, "Ä$1"],
    [/I(G|H|K|g|h|k)/g, "İ$1"],
    [/O(G|H|K|g|h|k)/g, "Ö$1"],
    [/U(G|H|K|g|h|k)/g, "Ü$1"],
    [/a(g|h|k)/g, "ä$1"],
    [/ı(g|h|k)/g, "i$1"],
    [/o(g|h|k)/g, "ö$1"],
    [/u(g|h|k)/g, "ü$1"],
];

const T3 = [
    [/I(Ñ|Y|ñ|y)/g, "İ$1"],
    [/ı(ñ|y)/g, "i$1"],
];

const T2 = [
    [/(L|l)ı((?![bcçdfgğhklmnñpqrsştvxyz]))/g, "$1i$2"],
    [/LI((?![BCÇDFGĞHKLMNÑPQRSŞTVXYZ]))/g, "$1Lİ$2"],

    [/((?<![BCÇDFGĞHKLMNÑPQRSŞTVXYZ]))I/g, "$1İ"],
    [/((?<![BCÇDFGĞHKLMNÑPQRSŞTVXYZbcçdfgğhklmnñpqrsştvxyz]))ı/g, "$1i"],
];

const T1 = [
    [/i/g, "ı"],
    [/a/g, "ä"],
    [/A/g, "Ä"],
];

const FINAL = [
    [/Â/g, "Å"],
    [/â/g, "å"],
    [/Ä/g, "Ȧ"],
    [/ä/g, "ȧ"],
    [/Ö/g, "Ȯ"],
    [/ö/g, "ȯ"],
    [/Ü/g, "U̇"],
    [/ü/g, "u̇"],
];

function applyHarmony(str, maxIterations = 50) {
    let current = str;

    for (let i = 0; i < maxIterations; i++) {
        let prev = current;

        current = applyTier(current, T5);
        current = applyTier(current, T4);
        current = applyTier(current, T3);
        current = applyTier(current, T2);
        current = applyTier(current, T1);

        if (current === prev) break;
    }

    current = applyTier(current, FINAL);

    return current;
}

function cyrlat() {
    document.transcription.text1.value = document.transcription.text1.value
        .replace(/['ˈ’ʼ‘ʻ´`ʿʹˊ׳′ʽߵ՚ߴ᾿ՙ῾‛ʾ՛ˋ]/g, "ʼ")
        .replace(/([OoGg])ʼ/g, "$1ʻ");

    let output = document.transcription.text1.value
        .replace(/Щ/g, "Ш")
        .replace(/щ/g, "ш")
        .replace(/Ы/g, "И")
        .replace(/ы/g, "и")
        .replace(/(Б|В|Г|Ғ|Д|Ж|З|К|Қ|Л|М|Н|П|Р|С|Т|Ф|Х|Ҳ|Ц|Ч|Ш|Щ|б|в|г|ғ|д|ж|з|к|қ|л|м|н|п|р|с|т|ф|х|ҳ|ц|ч|ш|щ)Е/g, "$1Э")
        .replace(/(Б|В|Г|Ғ|Д|Ж|З|К|Қ|Л|М|Н|П|Р|С|Т|Ф|Х|Ҳ|Ц|Ч|Ш|Щ|б|в|г|ғ|д|ж|з|к|қ|л|м|н|п|р|с|т|ф|х|ҳ|ц|ч|ш|щ)е/g, "$1э")
        .replace(/(\p{Uppercase})Я/ug, "$1ЙА")
        .replace(/(\p{Uppercase})(\p{Uppercase}) Я/ug, "$1$2 ЙА")
        .replace(/Я (\p{Uppercase})(\p{Uppercase})/ug, "ЙА $1$2")
        .replace(/Я(\p{Uppercase})/ug, "ЙА$1")
        .replace(/Я/g, "Йа")
        .replace(/я/g, "йа")
        .replace(/(\p{Uppercase})Е/ug, "$1ЙЭ")
        .replace(/(\p{Uppercase})(\p{Uppercase}) Е/ug, "$1$2 ЙЭ")
        .replace(/Е (\p{Uppercase})(\p{Uppercase})/ug, "ЙЭ $1$2")
        .replace(/Е(\p{Uppercase})/ug, "ЙЭ$1")
        .replace(/Е/g, "Йэ")
        .replace(/е/g, "йэ")
        .replace(/(\p{Uppercase})Ё/ug, "$1ЙО")
        .replace(/(\p{Uppercase})(\p{Uppercase}) Ё/ug, "$1$2 ЙО")
        .replace(/Ё (\p{Uppercase})(\p{Uppercase})/ug, "ЙО $1$2")
        .replace(/Ё(\p{Uppercase})/ug, "ЙО$1")
        .replace(/Ё/g, "Йо")
        .replace(/ё/g, "йо")
        .replace(/(\p{Uppercase})Ю/ug, "$1ЙУ")
        .replace(/(\p{Uppercase})(\p{Uppercase}) Ю/ug, "$1$2 ЙУ")
        .replace(/Ю (\p{Uppercase})(\p{Uppercase})/ug, "ЙУ $1$2")
        .replace(/Ю(\p{Uppercase})/ug, "ЙУ$1")
        .replace(/Ю/g, "Йу")
        .replace(/ю/g, "йу");

    output = output
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
        .replace(/ҳ/g, "h")
        .replace(/ч/g, "ch")
        .replace(/ш/g, "sh")
        .replace(/ъ/g, "\u02bc")
        .replace(/ь/g, "")
        .replace(/э/g, "e");

    output = applyHarmony(output);

    output = output
        .replace(/([0-9])x/g, "$1×")
        .replace(/x([0-9])/g, "×$1")
        .replace(/X/g, "H")
        .replace(/x/g, "h")
        .replace(/×/g, "x");

    document.transcription.text2.value = output;
}

function copy1() {
    navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2() {
    navigator.clipboard.writeText(document.transcription.text2.value);
}
