var car;

function cyrlat() {
    car = document.transcription.text1.value;
    var translit = car;
    
    translit = translit.replace(/é/g, "ë").replace(/É/g, "Ë");
    
    car = car.replace(/gh/g, "ğ").replace(/Gh/g, "Ğ").replace(/GH/g, "Ğ")
             .replace(/sh/g, "ş").replace(/Sh/g, "Ş").replace(/SH/g, "Ş")
             .replace(/ch/g, "ç").replace(/Ch/g, "Ç").replace(/CH/g, "Ç")
             .replace(/zh/g, "j").replace(/Zh/g, "J").replace(/ZH/g, "J")
             .replace(/ng/g, "ñ").replace(/Ng/g, "Ñ").replace(/NG/g, "Ñ")
             .replace(/ñ'h/g, "ñh").replace(/Ñ'h/g, "Ñh").replace(/Ñ'H/g, "ÑH")
             .replace(/nğ/g, "ñh").replace(/Nğ/g, "Ñh").replace(/NĞ/g, "ÑH")
             .replace(/n'ğ/g, "nğ").replace(/N'ğ/g, "Nğ").replace(/N'Ğ/g, "NĞ")
             .replace(/g'h/g, "gh").replace(/G'h/g, "Gh").replace(/G'H/g, "GH")
             .replace(/s'h/g, "sh").replace(/S'h/g, "Sh").replace(/S'H/g, "SH")
             .replace(/z'h/g, "zh").replace(/Z'h/g, "Zh").replace(/Z'H/g, "ZH")
             .replace(/n'g/g, "ng").replace(/N'g/g, "Ng").replace(/N'G/g, "NG")
             .replace(/n'g'h/g, "ngh").replace(/N'g'h/g, "Ngh").replace(/N'G'h/g, "NGh").replace(/N'G'H/g, "NGH")
             .replace(/j/g, "c").replace(/e/g, "ä").replace(/ë/g, "e").replace(/é/g, "e").replace(/w/g, "v")
             .replace(/J/g, "C").replace(/E/g, "Ä").replace(/Ë/g, "E").replace(/É/g, "E").replace(/W/g, "V")
             .replace(/ј/g, "j").replace(/Ј/g, "J").replace(/I/g, "İ");

    // Long regex replacements
    car = car.replace(/(A|I|O|U)(B|C|Ç|D|F|G|Ğ|H|J|K|L|M|N|Ñ|P|Q|R|S|Ş|T|V|X|Y|Z){1,4}İ(B|C|Ç|D|F|G|Ğ|H|J|K|L|M|N|Ñ|P|Q|R|S|Ş|T|V|X|Y|Z){1,4}İ/g, "$1$2I$3$4I")
             .replace(/(A|I|O|U|a|ı|o|u)(b|c|ç|d|f|g|ğ|h|j|k|l|m|n|ñ|p|q|r|s|ş|t|v|x|y|z){1,4}i(b|c|ç|d|f|g|ğ|h|j|k|l|m|n|ñ|p|q|r|s|ş|t|v|x|y|z){1,4}i/g, "$1$2ı$3$4ı")
             .replace(/(Ä|E|İ|Ö|Ü)(B|C|Ç|D|F|G|Ğ|H|J|K|L|M|N|Ñ|P|Q|R|S|Ş|T|V|X|Y|Z){1,4}I(B|C|Ç|D|F|G|Ğ|H|J|K|L|M|N|Ñ|P|Q|R|S|Ş|T|V|X|Y|Z){1,4}I/g, "$1$2İ$3$4İ")
             .replace(/(Ä|E|İ|Ö|Ü|ä|e|i|ö|ü)(b|c|ç|d|f|g|ğ|h|j|k|l|m|n|ñ|p|q|r|s|ş|t|v|x|y|z){1,4}ı(b|c|ç|d|f|g|ğ|h|j|k|l|m|n|ñ|p|q|r|s|ş|t|v|x|y|z){1,4}ı/g, "$1$2i$3$4i")
             .replace(/İ(B|C|Ç|D|F|G|Ğ|H|J|K|L|M|N|Ñ|P|Q|R|S|Ş|T|V|X|Y|Z){1,4}İ(B|C|Ç|D|F|G|Ğ|H|J|K|L|M|N|Ñ|P|Q|R|S|Ş|T|V|X|Y|Z){1,4}(A|I|O|U)/g, "I$1$2I$3$4")
             .replace(/İ(b|c|ç|d|f|g|ğ|h|j|k|l|m|n|ñ|p|q|r|s|ş|t|v|x|y|z){1,4}i(b|c|ç|d|f|g|ğ|h|j|k|l|m|n|ñ|p|q|r|s|ş|t|v|x|y|z){1,4}(a|ı|o|u)/g, "I$1$2ı$3$4")
             .replace(/i(b|c|ç|d|f|g|ğ|h|j|k|l|m|n|ñ|p|q|r|s|ş|t|v|x|y|z){1,4}i(b|c|ç|d|f|g|ğ|h|j|k|l|m|n|ñ|p|q|r|s|ş|t|v|x|y|z){1,4}(a|ı|o|u)/g, "ı$1$2ı$3$4")
             .replace(/I(B|C|Ç|D|F|G|Ğ|H|J|K|L|M|N|Ñ|P|Q|R|S|Ş|T|V|X|Y|Z){1,4}I(B|C|Ç|D|F|G|Ğ|H|J|K|L|M|N|Ñ|P|Q|R|S|Ş|T|V|X|Y|Z){1,4}(Ä|E|İ|Ö|Ü)/g, "İ$1$2İ$3$4")
             .replace(/I(b|c|ç|d|f|g|ğ|h|j|k|l|m|n|ñ|p|q|r|s|ş|t|v|x|y|z){1,4}ı(b|c|ç|d|f|g|ğ|h|j|k|l|m|n|ñ|p|q|r|s|ş|t|v|x|y|z){1,4}(ä|e|i|ö|ü)/g, "İ$1$2i$3$4")
             .replace(/ı(b|c|ç|d|f|g|ğ|h|j|k|l|m|n|ñ|p|q|r|s|ş|t|v|x|y|z){1,4}ı(b|c|ç|d|f|g|ğ|h|j|k|l|m|n|ñ|p|q|r|s|ş|t|v|x|y|z){1,4}(ä|e|i|ö|ü)/g, "i$1$2i$3$4");

    document.transcription.text1.value = translit;
    document.transcription.text2.value = car;
}

function latcyr() {
    car = document.transcription.text2.value;
    
    car = car.replace(/ngh/g, "n'g'h").replace(/Ngh/g, "N'g'h").replace(/NGh/g, "N'G'h").replace(/NGH/g, "N'G'H")
             .replace(/ng/g, "n'g").replace(/gh/g, "g'h").replace(/nğ/g, "n'gh").replace(/sh/g, "s'h").replace(/zh/g, "z'h")
             .replace(/Ng/g, "N'g").replace(/Nğ/g, "N'gh").replace(/Sh/g, "S'h").replace(/Zh/g, "Z'h").replace(/Gh/g, "G'h")
             .replace(/NG/g, "N'G").replace(/GH/g, "G'H").replace(/NĞ/g, "N'GH").replace(/SH/g, "S'H").replace(/ZH/g, "Z'H")
             .replace(/j/g, "zh").replace(/c/g, "j").replace(/ç/g, "ch").replace(/e/g, "ë").replace(/ä/g, "e")
             .replace(/ğ/g, "gh").replace(/ñ/g, "ng").replace(/ş/g, "sh").replace(/v/g, "w")
             .replace(/J/g, "Zh").replace(/C/g, "J").replace(/Ç/g, "Ch").replace(/E/g, "Ë").replace(/Ä/g, "E")
             .replace(/Ğ/g, "Gh").replace(/Ñ/g, "NG").replace(/Ş/g, "Sh").replace(/V/g, "W");
    
    document.transcription.text1.value = car;
}

function copy1() {
    var textRange = document.transcription.text1.createTextRange();
    textRange.execCommand("Copy");
}

function copy2() {
    var textRange = document.transcription.text2.createTextRange();
    textRange.execCommand("Copy");
}
