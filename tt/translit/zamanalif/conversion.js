var car;
function cyrlat () {
car = document.transcription.text1.value;

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
    test:    /Е[БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ]{0,3}[ӘЭИӨҮЬ]/,
    pattern: /Е([БВГДЖҖЗЙКЛМНҢПРСТФХҺЦЧШЩ]{0,3})([ӘЭИӨҮЬ])/g,
    replace: "Э$1$2",
  },
  {
    test:    /Е[бвгджҗзйклмнңпрстфхһцчшщ]{0,3}[әэиөүь]/,
    pattern: /Е([бвгджҗзйклмнңпрстфхһцчшщ]{0,3})([әэиөүь])/g,
    replace: "Э$1$2",
  },
  {
    test:    /е[бвгджҗзйклмнңпрстфхһцчшщ]{0,3}[әэиөүь]/,
    pattern: /е([бвгджҗзйклмнңпрстфхһцчшщ]{0,3})([әэиөүь])/g,
    replace: "э$1$2",
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
  
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
    }
