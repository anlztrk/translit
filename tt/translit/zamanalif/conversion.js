var car;
function cyrlat () {
car = document.transcription.text1.value;
car = car.replace(/([БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ])Е/g, "$1Э");
car = car.replace(/([БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩбвгджҗзйклмнңпрстфхһцчшщ])е/g, "$1э");

const rules = [
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
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
    }
