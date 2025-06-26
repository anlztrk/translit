var car;
var translit;

function cyrlat () {
translit = document.transcription.text1.value;
car = document.transcription.text1.value;
car = car.replace(/<</g, "«")
         .replace(/>>/g, "»");
translit = translit.replace(/<</g, "«")
                   .replace(/>>/g, "»")

                   .replace(/([ЪЬ])([АЭЫОУ])/g, "$1\u2019$2")
                   .replace(/([ЪЬъь)]([аэыоу])/g, "$1\u2019$2")

                   .replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])Я/g, "$1Ä")
                   .replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])я/g, "$1ä")
                   .replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])Е/g, "$1Ë")
                   .replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])е/g, "$1ë")
                   .replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])И/g, "$1I")
                   .replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])и/g, "$1i")
                   .replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])Ё/g, "$1Ö")
                   .replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])ё/g, "$1ö")
                   .replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])Ю/g, "$1Ü")
                   .replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЬбвгджзклмнпрстфхцчшщь])ю/g, "$1ü")
  
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
                   .replace(/ю/g, "йу")
  
                   .replace(/([АЭЫОУЯЕИЙЁЮ])Ь/g, "$1Й")
                   .replace(/([АЭЫОУЯЕИЙЁЮаэыоуяеийёю])ь/g, "$1й")

                   .replace(/([БВГДЖЗКЛМНПРСТФХЦЧШЩЪЬ])Э/g, "$1È")
                   .replace(/([ЪЬбвгджзклмнпрстфхцчшщъь])э/g, "$1è")
                   .replace(/Ë/g, "E")
                   .replace(/ë/g, "e")
  
                   .replace(/а/g, "a")
                   .replace(/б/g, "b")
                   .replace(/в/g, "v")
                   .replace(/г/g, "g")
                   .replace(/д/g, "d")
                   .replace(/е/g, "je")
                   .replace(/ж/g, "ž")
                   .replace(/з/g, "z")
                   .replace(/и/g, "i")
                   .replace(/й/g, "j")
                   .replace(/к/g, "k")
                   .replace(/л/g, "l")
                   .replace(/м/g, "m")
                   .replace(/н/g, "n")
                   .replace(/о/g, "o")
                   .replace(/п/g, "p")
                   .replace(/р/g, "r")
                   .replace(/с/g, "s")
                   .replace(/т/g, "t")
                   .replace(/у/g, "u")
                   .replace(/ф/g, "f")
                   .replace(/х/g, "h")
                   .replace(/ц/g, "c")
                   .replace(/ч/g, "č")
                   .replace(/ш/g, "š")
                   .replace(/щ/g, "ś")
                   .replace(/ы/g, "y")
                   .replace(/ь/g, "j")
                   .replace(/ъ/g, "")
                   .replace(/э/g, "e")
                   .replace(/ю/g, "ju")
                   .replace(/ё/g, "jo")
                   .replace(/я/g, "ja")

                   .replace(/А/g, "A")
                   .replace(/Б/g, "B")
                   .replace(/В/g, "V")
                   .replace(/Г/g, "G")
                   .replace(/Д/g, "D")
                   .replace(/Е/g, "Je")
                   .replace(/Ж/g, "Ž")
                   .replace(/З/g, "Z")
                   .replace(/И/g, "I")
                   .replace(/Й/g, "J")
                   .replace(/К/g, "K")
                   .replace(/Л/g, "L")
                   .replace(/М/g, "M")
                   .replace(/Н/g, "N")
                   .replace(/О/g, "O")
                   .replace(/П/g, "P")
                   .replace(/Р/g, "R")
                   .replace(/С/g, "S")
                   .replace(/Т/g, "T")
                   .replace(/У/g, "U")
                   .replace(/Ф/g, "F")
                   .replace(/Х/g, "H")
                   .replace(/Ц/g, "C")
                   .replace(/Ч/g, "Č")
                   .replace(/Ш/g, "Š")
                   .replace(/Щ/g, "Ś")
                   .replace(/Ы/g, "Y")
                   .replace(/Ь/g, "J")
                   .replace(/Ъ/g, "")
                   .replace(/Э/g, "E")
                   .replace(/Ю/g, "Ju")
                   .replace(/Ё/g, "Jo")
                   .replace(/Я/g, "Ja");
document.transcription.text1.value = car;
document.transcription.text2.value = translit;
}

function copy1()
{ textRange=document.transcription.text1.createTextRange();
textRange.execCommand("Copy");
textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();
textRange.execCommand("Copy");
textRange="";
}
