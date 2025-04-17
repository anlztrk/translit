var car;
function cyrlat () {
car = document.transcription.text1.value;
car = car.replace(/([БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ])Е/g, "$1Э");
car = car.replace(/([БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩбвгджҗзйклмнңпрстфхһцчшщ])е/g, "$1э");

 car = car.replace(/([АЕЁИОУЫЮЯӘӨҮ])Ц/g, "$1ТС");
  car = car.replace(/([аеёиоуыюяәөү])Ц/g, "$1Тс");
  car = car.replace(/([аеёиоуыюяәөү])ц/g, "$1тс");
  car = car.replace(/Ц/g, "С");
  car = car.replace(/ц/g, "с");
  
  car = car.replace(/([АЕЁИОУЫЮЯӘӨҮ])Щ([АЕЁИОУЫЮЯӘӨҮ])/g, "$1ЧЧ$2");
  car = car.replace(/([АЕЁИОУЫЮЯӘӨҮ])щ([аеёиоуыюяәөү])/g, "$1чч$2");
  car = car.replace(/([аеёиоуыюяәөү])щ([аеёиоуыюяәөү])/g, "$1чч$2");
  car = car.replace(/щ/g, "ч");
  car = car.replace(/Щ/g, "Ч");

const rules = [
  {
    test:    /[ӘЭИӨҮ][БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ]{0,3}Я/,
    pattern: /([ӘЭИӨҮ])([БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ]{0,3})Я/g,
    replace: "$1$2ЙӘ",
  },
  {
    test:    /[ӘЭИӨҮәэиөү][бвгджҗзйклмнңпрстфхһцчшщ]{0,3}я/,
    pattern: /([ӘЭИӨҮәэиөү])([бвгджҗзйклмнңпрстфхһцчшщ]{0,3})я/g,
    replace: "$1$2йә",
  },
{
    test:    /[ӘЭИӨҮ][БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ]{0,3}Ю/,
    pattern: /([ӘЭИӨҮ])([БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ]{0,3})Ю/g,
    replace: "$1$2ЙӨ",
  },
  {
    test:    /[ӘЭИӨҮәэиөү][бвгджҗзйклмнңпрстфхһцчшщ]{0,3}ю/,
    pattern: /([ӘЭИӨҮәэиөү])([бвгджҗзйклмнңпрстфхһцчшщ]{0,3})ю/g,
    replace: "$1$2йө",
  },
{
    test:    /[ӘЭИӨҮ][БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ]{0,3}Е/,
    pattern: /([ӘЭИӨҮ])([БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ]{0,3})Е/g,
    replace: "$1$2ЙЭ",
  },
  {
    test:    /[ӘЭИӨҮәэиөү][бвгджҗзйклмнңпрстфхһцчшщ]{0,3}е/,
    pattern: /([ӘЭИӨҮәэиөү])([бвгджҗзйклмнңпрстфхһцчшщ]{0,3})е/g,
    replace: "$1$2йэ",
  },    
 {
    test:    /Я[БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ]{0,3}[ӘЭИӨҮЬ]/,
    pattern: /Я([БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ]{0,3})([ӘЭИӨҮЬ])/g,
    replace: "ЙӘ$1$2",
  },
  {
    test:    /Я[бвгджҗзйклмнңпрстфхһцчшщ]{0,3}[әэиөүь]/,
    pattern: /Я([бвгджҗзйклмнңпрстфхһцчшщ]{0,3})([әэиөүь])/g,
    replace: "Йә$1$2",
  },
  {
    test:    /я[бвгджҗзйклмнңпрстфхһцчшщ]{0,3}[әэиөүь]/,
    pattern: /я([бвгджҗзйклмнңпрстфхһцчшщ]{0,3})([әэиөүь])/g,
    replace: "йә$1$2",
  },
  {
    test:    /Ю[БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ]{0,3}[ӘЭИӨҮЬ]/,
    pattern: /Ю([БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ]{0,3})([ӘЭИӨҮЬ])/g,
    replace: "ЙҮ$1$2",
  },
  {
    test:    /Ю[бвгджҗзйклмнңпрстфхһцчшщ]{0,3}[әэиөүь]/,
    pattern: /Ю([бвгджҗзйклмнңпрстфхһцчшщ]{0,3})([әэиөүь])/g,
    replace: "Йү$1$2",
  },
  {
    test:    /ю[бвгджҗзйклмнңпрстфхһцчшщ]{0,3}[әэиөүь]/,
    pattern: /ю([бвгджҗзйклмнңпрстфхһцчшщ]{0,3})([әэиөүь])/g,
    replace: "йү$1$2",
  },
  {
    test:    /ҮЕ/,
    pattern: /ҮЕ/g,
    replace: "ҮЭ",
  },
  {
    test:    /Үе/,
    pattern: /Үе/g,
    replace: "Үэ",
  },
  {
    test:    /үе/,
    pattern: /үе/g,
    replace: "үэ",
  },
  {
    test:    /Е[БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ]{0,3}[ӘЭИӨҮЬ]/,
    pattern: /Е([БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ]{0,3})([ӘЭИӨҮЬ])/g,
    replace: "ЙЭ$1$2",
  },
  {
    test:    /Е[бвгджҗзйклмнңпрстфхһцчшщ]{0,3}[әэиөүь]/,
    pattern: /Е([бвгджҗзйклмнңпрстфхһцчшщ]{0,3})([әэиөүь])/g,
    replace: "Йэ$1$2",
  },
  {
    test:    /е[бвгджҗзйклмнңпрстфхһцчшщ]{0,3}[әэиөүь]/,
    pattern: /е([бвгджҗзйклмнңпрстфхһцчшщ]{0,3})([әэиөүь])/g,
    replace: "йэ$1$2",
  }
];

// 2. Loop until none of the rules fire
let changed = true;
while (changed) {
  changed = false;
  for (const {test, pattern, replace} of rules) {
    if (test.test(car)) {
      car = car.replace(pattern, replace);
      changed = true;
    }
  }
}
  car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Я/ug, "$1$2 ЙА");
  car = car.replace(/Я (\p{Uppercase})(\p{Uppercase})/ug, "ЙА $1$2");
  car = car.replace(/Я(\p{Uppercase})/ug, "ЙА$1");
  car = car.replace(/Я/g, "Йа");
  car = car.replace(/я/g, "йа");
  car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Е/ug, "$1$2 ЙЭ");
  car = car.replace(/Е (\p{Uppercase})(\p{Uppercase})/ug, "ЙЫ $1$2");
  car = car.replace(/Е(\p{Uppercase})/g, "ЙЫ$1");
  car = car.replace(/Е/g, "Йы");
  car = car.replace(/е/g, "йы");
  car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ё/ug, "$1$2 ЙО");
  car = car.replace(/Ё (\p{Uppercase})(\p{Uppercase})/ug, "ЙО $1$2");
  car = car.replace(/Ё(\p{Uppercase})/ug, "ЙО$1");
  car = car.replace(/Ё/g, "Йо");
  car = car.replace(/ё/g, "йо");
  car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Ю/ug, "$1$2 ЙУ");
  car = car.replace(/Ю (\p{Uppercase})(\p{Uppercase})/ug, "ЙУ $1$2");
  car = car.replace(/Ю(\p{Uppercase})/ug, "ЙУ$1");
  car = car.replace(/Ю/g, "Йу");
  car = car.replace(/ю/g, "йу");

  car = car.replace(/([АЫОУ])(Й)?Г/g, "$1$2Ғ");
  car = car.replace(/([АЫОУаыоу])(й)?г/g, "$1$2ғ");
  car = car.replace(/Г([АЫОУЪаыоуъ])/g, "Ғ$1");
  car = car.replace(/г([аыоуъ])/g, "ғ$1");

  car = car.replace(/([АЫОУ])(Й)?К/g, "$1$2Қ");
  car = car.replace(/([АЫОУаыоу])(й)?к/g, "$1$2қ");
  car = car.replace(/К([АЫОУЪаыоуъ])/g, "Қ$1");
  car = car.replace(/к([аыоуъ])/g, "қ$1");
  
  car = car.replace(/([ҒҚ])А([БВГҒДЖҖЗЙКҚЛМНҢПРСТФХҺЦЧШЩ]{0,3})([ИЭӘӨҮЬ])/g, "$1Ә$2$3");
  car = car.replace(/([ҒҚ])ЫЙ([БВГҒДЖҖЗЙКҚЛМНҢПРСТФХҺЦЧШЩ]{0,3})([ИЭӘӨҮЬ])/g, "$1И$2$3");
  car = car.replace(/([ҒҚ])Ы([БВГҒДЖҖЗЙКҚЛМНҢПРСТФХҺЦЧШЩ]{0,3})([ИЭӘӨҮЬ])/g, "$1Э$2$3");
  car = car.replace(/([ҒҚ])О([БВГҒДЖҖЗЙКҚЛМНҢПРСТФХҺЦЧШЩ]{0,3})([ИЭӘӨҮЬ])/g, "$1Ө$2$3");
  car = car.replace(/([ҒҚ])У([БВГҒДЖҖЗЙКҚЛМНҢПРСТФХҺЦЧШЩ]{0,3})([ИЭӘӨҮЬ])/g, "$1Ү$2$3");
  
  car = car.replace(/([ҒҚғқ])а([бвгғджҗзйкқлмнңпрстфхһцчшщ]{0,3})([иэәөүь])/g, "$1ә$2$3");
  car = car.replace(/([ҒҚғқ])ый([бвгғджҗзйкқлмнңпрстфхһцчшщ]{0,3})([иэәөүь])/g, "$1и$2$3");
  car = car.replace(/([ҒҚғқ])ы([бвгғджҗзйкқлмнңпрстфхһцчшщ]{0,3})([иэәөүь])/g, "$1э$2$3");
  car = car.replace(/([ҒҚғқ])о([бвгғджҗзйкқлмнңпрстфхһцчшщ]{0,3})([иэәөүь])/g, "$1ө$2$3");
  car = car.replace(/([ҒҚғқ])У([бвгғджҗзйкқлмнңпрстфхһцчшщ]{0,3})([иэәөүь])/g, "$1ү$2$3");
  
  car = car.replace(/(А|Ы|О)У/g, "$1В");
  car = car.replace(/(А|Ы|О|а|ы|о)у/g, "$1в");
  car = car.replace(/(И|Э|Ә|Ө)Ү/g, "$1В");
  car = car.replace(/(И|Э|Ә|Ө|и|э|ә|ө)ү/g, "$1в");

  
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
    }
