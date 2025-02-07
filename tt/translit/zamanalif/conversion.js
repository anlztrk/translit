var car;
function latcyr () {
}
function cyrlat() {
    let car = document.transcription.text1.value;

    // 1. Add invisible separator before Э/э if preceded by a consonant
    car = car.replace(/([\p{Uppercase}БВГДЖҖЗКЛМНҢПРСТФХҺЦЧШЩЪЬ])([Ээ])/gu, "$1\u2060$2");

    // 2. Replace E/e after a consonant with Э/э
    car = car.replace(/([\p{Uppercase}БВГДЖҖЗКЛМНҢПРСТФХҺЦЧШЩЪЬ])Е/g, "$1Э")
             .replace(/([\p{Lowercase}бвгджҗзклмнңпрстфхһцчшщъь])е/g, "$1э");

    // 3. Replace Ц and Щ transformations
    car = car.replace(/([АЕЁИОУЫЮЯӘӨҮ])Ц/g, "$1ТС")
             .replace(/([аеёиоуыюяәөү])Ц/g, "$1Тс")
             .replace(/([аеёиоуыюяәөү])ц/g, "$1тс")
             .replace(/Ц/g, "С").replace(/ц/g, "с")
             .replace(/([АЕЁИОУЫЮЯӘӨҮ])Щ([АЕЁИОУЫЮЯӘӨҮ])/g, "$1ЧЧ$2")
             .replace(/([АЕЁИОУЫЮЯӘӨҮ])щ([аеёиоуыюяәөү])/g, "$1чч$2")
             .replace(/([аеёиоуыюяәөү])щ([аеёиоуыюяәөү])/g, "$1чч$2")
             .replace(/щ/g, "ч").replace(/Щ/g, "Ч");

    // 4. Insert invisible separator after Й before vowels
    car = car.replace(/Й([АаӘәЭэЫыОоӨөУуҮү])/g, "Й$1\u2060")
             .replace(/й([аәэыоөуү])/g, "й$1\u2060");

    // 5. Transform ЙА, Я, Е, Ё, Ю in different contexts
    car = car.replace(/(\p{Uppercase}{2}) Я/gu, "$1 ЙА")
             .replace(/Я (\p{Uppercase}{2})/gu, "ЙА $1")
             .replace(/Я(\p{Uppercase})/gu, "ЙА$1")
             .replace(/Я/g, "Йа").replace(/я/g, "йа")
             .replace(/(\p{Uppercase}{2}) Е/gu, "$1 ЙЫ")
             .replace(/Е (\p{Uppercase}{2})/gu, "ЙЫ $1")
             .replace(/Е(\p{Uppercase})/g, "ЙЫ$1")
             .replace(/Е/g, "Йы").replace(/е/g, "йы")
             .replace(/(\p{Uppercase}{2}) Ё/gu, "$1 ЙО")
             .replace(/Ё (\p{Uppercase}{2})/gu, "ЙО $1")
             .replace(/Ё(\p{Uppercase})/gu, "ЙО$1")
             .replace(/Ё/g, "Йо").replace(/ё/g, "йо")
             .replace(/(\p{Uppercase}{2}) Ю/gu, "$1 ЙУ")
             .replace(/Ю (\p{Uppercase}{2})/gu, "ЙУ $1")
             .replace(/Ю(\p{Uppercase})/gu, "ЙУ$1")
             .replace(/Ю/g, "Йу").replace(/ю/g, "йу");

    // 6. Transform ЙЫЙ, ЙЫ, ЙУ transformations
    car = car.replace(/ЙЫЙ/g, "ЙИ").replace(/йый/g, "йи")
             .replace(/ЙЫ/g, "ЙЭ").replace(/йы/g, "йэ")
             .replace(/ЙУ/g, "ЙҮ").replace(/йу/g, "йү");

    // 7. Transform consonant pairs
    car = car.replace(/([АЫОУ])Г/g, "$1Ғ")
             .replace(/([АЫОУ])г/g, "$1ғ")
             .replace(/Г([АЫОУ])/g, "Ғ$1")
             .replace(/г([аыоу])/g, "ғ$1")
             .replace(/([АЫОУ])К/g, "$1Қ")
             .replace(/([АЫОУ])к/g, "$1қ")
             .replace(/К([АЫОУ])/g, "Қ$1")
             .replace(/к([аыоу])/g, "қ$1");

    // 8. Replace Къ, Гъ, Қь, Ғь
    car = car.replace(/КЪ/g, "Қ").replace(/къ/g, "қ")
             .replace(/ГЪ/g, "Ғ").replace(/гъ/g, "ғ")
             .replace(/ҚЬ/g, "К").replace(/қь/g, "к")
             .replace(/ҒЬ/g, "Г").replace(/ғь/g, "г");

    // 9. Handle soft sign (ь) before vowels
    car = car.replace(/([БВГДЖҖЗКЛМНҢПРСТФХҺЦЧШЩ])Ь([АЫЭОУ])/g, "$1Й$2")
             .replace(/([бвгджҗзклмнңпрстфхһцчшщ])ь([аыэоу])/g, "$1й$2");

    // 10. Convert Cyrillic to Latin using mapping dictionary
    const cyrToLat = {
        "А": "A", "Ә": "Ä", "Б": "B", "В": "W", "Г": "G", "Ғ": "Ğ", "Д": "D",
        "Ж": "J", "Җ": "C", "З": "Z", "И": "İ", "Й": "Y", "К": "K", "Қ": "Q",
        "Л": "L", "М": "M", "Н": "N", "Ң": "Ñ", "О": "O", "Ө": "Ö", "П": "P",
        "Р": "R", "С": "S", "Т": "T", "У": "U", "Ү": "Ü", "Ф": "F", "Х": "X",
        "Һ": "H", "Ч": "Ç", "Ш": "Ş", "Ы": "I", "Э": "E",
        "а": "a", "ә": "ä", "б": "b", "в": "w", "г": "g", "ғ": "ğ", "д": "d",
        "ж": "j", "җ": "c", "з": "z", "и": "i", "й": "y", "к": "k", "қ": "q",
        "л": "l", "м": "m", "н": "n", "ң": "ñ", "о": "o", "ө": "ö", "п": "p",
        "р": "r", "с": "s", "т": "t", "у": "u", "ү": "ü", "ф": "f", "х": "x",
        "һ": "h", "ч": "ç", "ш": "ş", "ы": "ı", "э": "e"
    };

    car = car.replace(/[\u0410-\u044FҖҗҺһ]/g, m => cyrToLat[m] || cyrToLat[m.toUpperCase()].toLowerCase());

    // 11. Normalize text and remove extra characters
    car = car.replace(/(Ъ|ъ|Ь|ь|\u2060)/g, "").normalize('NFC');

    document.transcription.text2.value = car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
