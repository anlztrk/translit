var car;
function latcyr () {
car = document.transcription.text2.value;
var car_Orig = car;
  car = car.replace(/(Б|В|Г|Ғ|Ҕ|Д|Ж|З|К|Қ|Ҡ|Л|М|Н|Ң|Ҥ|П|Р|С|Т|Ў|Ф|Х|Һ|Ҳ|Ц|Ч|Џ|Җ|Ҷ|Ҹ|Ӂ|Ш|Щ|б|в|г|ғ|ҕ|д|ж|з|к|қ|ҡ|л|м|н|ң|ҥ|п|р|с|т|ў|ф|х|һ|ҳ|ц|ч|џ|җ|ҷ|ҹ|ӂ|ш|щ)(Э|э)/g, "$1$2\u0300");
  car = car.replace(/(Б|В|Г|Ғ|Ҕ|Д|Ж|З|К|Қ|Ҡ|Л|М|Н|Ң|Ҥ|П|Р|С|Т|Ў|Ф|Х|Һ|Ҳ|Ц|Ч|Џ|Җ|Ҷ|Ҹ|Ӂ|Ш|Щ|б|в|г|ғ|ҕ|д|ж|з|к|қ|ҡ|л|м|н|ң|ҥ|п|р|с|т|ў|ф|х|һ|ҳ|ц|ч|џ|җ|ҷ|ҹ|ӂ|ш|щ)Е/g, "$1Э");
  car = car.replace(/(Б|В|Г|Ғ|Ҕ|Д|Ж|З|К|Қ|Ҡ|Л|М|Н|Ң|Ҥ|П|Р|С|Т|Ў|Ф|Х|Һ|Ҳ|Ц|Ч|Џ|Җ|Ҷ|Ҹ|Ӂ|Ш|Щ|б|в|г|ғ|ҕ|д|ж|з|к|қ|ҡ|л|м|н|ң|ҥ|п|р|с|т|ў|ф|х|һ|ҳ|ц|ч|џ|җ|ҷ|ҹ|ӂ|ш|щ)е/g, "$1э");

  car = car.replace(/Й(А|а)/g, "Й$1\u0300");
  car = car.replace(/йа/g, "йа\u0300");
  car = car.replace(/Й(Э|э)/g, "Й$1\u0300");
  car = car.replace(/йэ/g, "йе\u0300");
  car = car.replace(/Й(О|о)/g, "Й$1\u0300");
  car = car.replace(/йо/g, "йо\u0300");
  car = car.replace(/Й(У|у)/g, "Й$1\u0300");
  car = car.replace(/йу/g, "йу\u0300");

  car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Я/ug, "$1$2 ЙА");
  car = car.replace(/Я (\p{Uppercase})(\p{Uppercase})/ug, "ЙА $1$2");
  car = car.replace(/Я(\p{Uppercase})/ug, "ЙА$1");
  car = car.replace(/Я/g, "Йа");
  car = car.replace(/я/g, "йа");
  car = car.replace(/(\p{Uppercase})(\p{Uppercase}) Е/ug, "$1$2 ЙЭ");
  car = car.replace(/Е (\p{Uppercase})(\p{Uppercase})/ug, "ЙЭ $1$2");
  car = car.replace(/Е(\p{Uppercase})/g, "ЙЭ$1");
  car = car.replace(/Е/g, "Йэ");
  car = car.replace(/е/g, "йэ");
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
  
  if (/Ҕ|Ҡ|Ң|Ҥ|Һ|Џ|Җ|Ҷ|Ҹ|Ӂ|Ә|Ы|Ӣ|Ө|Ӧ|Ү|Ӱ|Ӯ|ҕ|ҡ|ң|ҥ|һ|џ|җ|ҷ|ҹ|ӂ|ә|ы|ӣ|ө|ӧ|ү|ӱ|ӯ/.test(car_Orig) == false) {
	  if (/Ў|ў|Қ|қ|Ғ|ғ|Ҳ|ҳ/.test(car_Orig) ) {
		car = car.replace(/НГ(А|Э|И|О|У|Ў)/g, "ÑG$1");
		car = car.replace(/нг(а|э|и|о|у|ў)/g, "ñg$1");		
		car = car.replace(/НГГ/g, "Ñ\u2060G");
		car = car.replace(/нгг/g, "ñ\u2060g");
		car = car.replace(/НГ/g, "Ñ");
		car = car.replace(/нг/g, "ñ");
		car = car.replace(/А/g, "Ä")
		car = car.replace(/а/g, "ä")
		car = car.replace(/О/g, "A");
		car = car.replace(/о/g, "a");
		car = car.replace(/Ў/g, "O");
		car = car.replace(/ў/g, "o");		
	}
  }
  car = car.replace(/А/g, "A");
  car = car.replace(/(Ә|Ӓ)/g, "Ä");
  car = car.replace(/Б/g, "B");
  car = car.replace(/В/g, "V");
  car = car.replace(/Г/g, "G");
  car = car.replace(/(Ғ|Ҕ)/g, "Ğ");
  car = car.replace(/Д/g, "D");
  car = car.replace(/Ж/g, "J");
  car = car.replace(/З/g, "Z");
  if (/Ы|ы/.test(car_Orig) == false) {
	  car = car.replace(/И/g, "I");
  }
  car = car.replace(/И/g, "İ");
  car = car.replace(/Й/g, "Y");
  car = car.replace(/К/g, "K");
  car = car.replace(/(Қ|Ҡ)/g, "Q");
  car = car.replace(/Л/g, "L");
  car = car.replace(/М/g, "M");
  car = car.replace(/Н/g, "N");
  car = car.replace(/(Ң|Ҥ)/g, "Ñ");
  car = car.replace(/О/g, "O");
  car = car.replace(/(Ө|Ӧ)/g, "Ö");
  car = car.replace(/П/g, "P");
  car = car.replace(/Р/g, "R");
  car = car.replace(/С/g, "S");
  car = car.replace(/Т/g, "T");
  car = car.replace(/У/g, "U");
  if (/В|в/.test(car_Orig)) {
	  car = car.replace(/Ў/g, "W");
	  car = car.replace(/ў/g, "w");
  }
  car = car.replace(/Ў/g, "V");
  car = car.replace(/(Ү|Ӱ)/g, "Ü");
  car = car.replace(/Ф/g, "F"); 
  if (/Һ|Ҳ|һ|ҳ/.test(car_Orig)) {
	  car = car.replace(/Х/g, "X");
	  car = car.replace(/х/g, "x");
  } else {    
	  car = car.replace(/Х/g, "H");
	  car = car.replace(/х/g, "h");
  }
  car = car.replace(/(Һ|Ҳ)/g, "H");
  car = car.replace(/Ц/g, "Ţ");
  car = car.replace(/Ч/g, "Ç");
  car = car.replace(/(Џ|Җ|Ҷ|Ҹ|Ӂ)/g, "C");
  car = car.replace(/Ш/g, "Ş");
  car = car.replace(/Щ/g, "Ś");
  car = car.replace(/Ы/g, "I");
  car = car.replace(/Э/g, "E");
  car = car.replace(/а/g, "a");
  car = car.replace(/(ә|ӓ)/g, "ä");
  car = car.replace(/б/g, "b");
  car = car.replace(/в/g, "v");
  car = car.replace(/г/g, "g");
  car = car.replace(/(ғ|ҕ)/g, "ğ");
  car = car.replace(/д/g, "d");
  car = car.replace(/ж/g, "j");
  car = car.replace(/з/g, "z");
  car = car.replace(/и/g, "i");
  car = car.replace(/й/g, "y");
  car = car.replace(/к/g, "k");
  car = car.replace(/(қ|ҡ)/g, "q");
  car = car.replace(/л/g, "l");
  car = car.replace(/м/g, "m");
  car = car.replace(/н/g, "n");
  car = car.replace(/(ң|ҥ)/g, "ñ");
  car = car.replace(/о/g, "o");
  car = car.replace(/(ө|ӧ)/g, "ö");
  car = car.replace(/п/g, "p");
  car = car.replace(/р/g, "r");
  car = car.replace(/с/g, "s");
  car = car.replace(/т/g, "t");
  car = car.replace(/у/g, "u");
  car = car.replace(/ў/g, "v");
  car = car.replace(/(ү|ӱ)/g, "ü");
  car = car.replace(/ф/g, "f");
  car = car.replace(/(һ|ҳ)/g, "h");
  car = car.replace(/ц/g, "ţ");
  car = car.replace(/ч/g, "ç");
  car = car.replace(/(џ|җ|ҷ|ҹ|ӂ)/g, "c");
  car = car.replace(/ш/g, "ş");
  car = car.replace(/щ/g, "ś");
  car = car.replace(/(Ъ|ъ)/g, "\u02bc");
  car = car.replace(/ы/g, "ı");
  car = car.replace(/(Ь|ь)/g, "");
  car = car.replace(/э/g, "e");
  car = car.normalize('NFC');
document.transcription.text1.value=car;
}
function cyrlat () {
car = document.transcription.text1.value;  
var car_Orig = car;
  car = car.replace(/A/g, "А");
  car = car.replace(/À/g, "А\u0300");
  car = car.replace(/Ä/g, "Ә");
  car = car.replace(/B/g, "Б");
  car = car.replace(/V/g, "В");
  car = car.replace(/G/g, "Г");
  car = car.replace(/Ğ/g, "Ғ");
  car = car.replace(/D/g, "Д");
  car = car.replace(/J/g, "Ж");
  car = car.replace(/Z/g, "З");
  car = car.replace(/İ/g, "И");
  car = car.replace(/Y/g, "Й");
  car = car.replace(/K/g, "К");
  car = car.replace(/Q/g, "Қ");
  car = car.replace(/L/g, "Л");
  car = car.replace(/M/g, "М");
  car = car.replace(/N/g, "Н");
  car = car.replace(/Ñ/g, "Ң");
  car = car.replace(/O/g, "О");
  car = car.replace(/Ò/g, "О\u0300");
  car = car.replace(/Ö/g, "Ө");
  car = car.replace(/P/g, "П");
  car = car.replace(/R/g, "Р");
  car = car.replace(/S/g, "С");
  car = car.replace(/T/g, "Т");
  car = car.replace(/U/g, "У");
  car = car.replace(/Ù/g, "У\u0300");
  if (/V/.test(car_Orig)) {
	  car = car.replace(/W/g, "Ў");
	  car = car.replace(/w/g, "ў");
  }
  car = car.replace(/W/g, "В");
  car = car.replace(/Ü/g, "Ү");
  car = car.replace(/F/g, "Ф");
  if (/X|x/.test(car_Orig)) {
	  car = car.replace(/H/g, "Һ");
	  car = car.replace(/h/g, "һ");
  } else {    
	  car = car.replace(/H/g, "Х");
	  car = car.replace(/h/g, "х");
  }
  car = car.replace(/X/g, "Х");
  car = car.replace(/Ţ/g, "Ц");
  if (/J|j/.test(car_Orig) == false){
	  car = car.replace(/C/g, "Ж");
	  car = car.replace(/c/g, "ж");
  }
  car = car.replace(/C/g, "Җ");
  car = car.replace(/Ç/g, "Ч");
  car = car.replace(/Ş/g, "Ш");
  car = car.replace(/Ś/g, "Щ");
  if (/İ|ı/.test(car_Orig) == false) {
	  car = car.replace(/I/g, "И");
  }
  car = car.replace(/I/g, "Ы");
  car = car.replace(/E/g, "Э");
  car = car.replace(/È/g, "Э\u0300");
  car = car.replace(/a/g, "а");
  car = car.replace(/à/g, "а\u0300");
  car = car.replace(/ä/g, "ә");
  car = car.replace(/b/g, "б");
  car = car.replace(/v/g, "в");
  car = car.replace(/g/g, "г");
  car = car.replace(/ğ/g, "ғ");
  car = car.replace(/d/g, "д");
  car = car.replace(/j/g, "ж");
  car = car.replace(/z/g, "з");
  car = car.replace(/i/g, "и");
  car = car.replace(/y/g, "й");
  car = car.replace(/k/g, "к");
  car = car.replace(/q/g, "қ");
  car = car.replace(/l/g, "л");
  car = car.replace(/m/g, "м");
  car = car.replace(/n/g, "н");
  car = car.replace(/ñ/g, "ң");
  car = car.replace(/o/g, "о");
  car = car.replace(/ò/g, "о\u0300");
  car = car.replace(/ö/g, "ө");
  car = car.replace(/p/g, "п");
  car = car.replace(/r/g, "р");
  car = car.replace(/s/g, "с");
  car = car.replace(/t/g, "т");
  car = car.replace(/u/g, "у");
  car = car.replace(/ù/g, "у\u0300");
  car = car.replace(/w/g, "в");
  car = car.replace(/ü/g, "ү");
  car = car.replace(/f/g, "ф");
  car = car.replace(/x/g, "х");
  car = car.replace(/ţ/g, "ц");
  car = car.replace(/c/g, "җ");
  car = car.replace(/ç/g, "ч");
  car = car.replace(/ş/g, "ш");
  car = car.replace(/ś/g, "щ");
  car = car.replace(/ı/g, "ы");
  car = car.replace(/e/g, "э");
  car = car.replace(/è/g, "э\u0300");
  
  car = car.replace(/(\p{Uppercase})ъ/ug, "$1Ъ");
  car = car.replace(/(\p{Uppercase})ь/ug, "$1Ь");
  
  car = car.replace(/(Б|В|Г|Ғ|Ҕ|Д|Ж|З|К|Қ|Ҡ|Л|М|Н|Ң|Ҥ|П|Р|С|Т|Ў|Ф|Х|Һ|Ҳ|Ц|Ч|Џ|Җ|Ҷ|Ҹ|Ӂ|Ш|Щ|б|в|г|ғ|ҕ|д|ж|з|к|қ|ҡ|л|м|н|ң|ҥ|п|р|с|т|ў|ф|х|һ|ҳ|ц|ч|џ|җ|ҷ|ҹ|ӂ|ш|щ)Э/g, "$1Е");
  car = car.replace(/(Б|В|Г|Ғ|Ҕ|Д|Ж|З|К|Қ|Ҡ|Л|М|Н|Ң|Ҥ|П|Р|С|Т|Ў|Ф|Х|Һ|Ҳ|Ц|Ч|Џ|Җ|Ҷ|Ҹ|Ӂ|Ш|Щ|б|в|г|ғ|ҕ|д|ж|з|к|қ|ҡ|л|м|н|ң|ҥ|п|р|с|т|ў|ф|х|һ|ҳ|ц|ч|џ|җ|ҷ|ҹ|ӂ|ш|щ)э/g, "$1е");
  
  car = car.replace(/Й(А|а)\u0300/g, "Й\u2060$1");
  car = car.replace(/йа\u0300/g, "й\u2060а");
  car = car.replace(/Й(А|а)/g, "Я");
  car = car.replace(/йа/g, "я");
  car = car.replace(/Й(Э|э)\u0300/g, "Й\u2060$1");
  car = car.replace(/йэ\u0300/g, "й\u2060э");
  car = car.replace(/Й(Э|э)/g, "Е");
  car = car.replace(/йэ/g, "е");
  car = car.replace(/Й(О|о)\u0300/g, "Й\u2060$1");
  car = car.replace(/йо\u0300/g, "й\u2060о");
  car = car.replace(/Й(О|о)/g, "Ё");
  car = car.replace(/йо/g, "ё");
  car = car.replace(/Й(У|у)\u0300/g, "Й\u2060$1");
  car = car.replace(/йу\u0300/g, "й\u2060у");
  car = car.replace(/Й(У|у)/g, "Ю");
  car = car.replace(/йу/g, "ю");
  
  car = car.replace(/Е\u0300/g, "Э");
  car = car.replace(/е\u0300/g, "э");
  car = car.replace(/\u02bc/g, "ъ");
  car = car.replace(/(\u0300|\u2060)/g, "");
  car = car.normalize('NFC');
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
    }
