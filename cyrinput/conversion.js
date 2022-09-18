//  copyright lexilogos.com
var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/q/g, "қ");
  car = car.replace(/w/g, "ў");
  car = car.replace(/e/g, "е");
  car = car.replace(/r/g, "р");
  car = car.replace(/t/g, "т");
  car = car.replace(/y/g, "й");
  car = car.replace(/u/g, "у");
  car = car.replace(/ı/g, "ы");
  car = car.replace(/o/g, "о");
  car = car.replace(/p/g, "п");
  car = car.replace(/ğ/g, "ғ");
  car = car.replace(/ü/g, "ү");
  car = car.replace(/a/g, "а");
  car = car.replace(/s/g, "с");
  car = car.replace(/d/g, "д");
  car = car.replace(/f/g, "ф");
  car = car.replace(/g/g, "г");
  car = car.replace(/h/g, "һ");
  car = car.replace(/j/g, "ж");
  car = car.replace(/k/g, "к");
  car = car.replace(/l/g, "л");
  car = car.replace(/ş/g, "ш");
  car = car.replace(/i/g, "и");
  car = car.replace(/z/g, "з");
  car = car.replace(/x/g, "х");
  car = car.replace(/c/g, "ц");
  car = car.replace(/v/g, "в");
  car = car.replace(/b/g, "б");
  car = car.replace(/n/g, "н");
  car = car.replace(/m/g, "м");
  car = car.replace(/ö/g, "ө");
  car = car.replace(/ç/g, "ч");
  car = car.replace(/â/g, "я");
  car = car.replace(/ô/g, "ё");
  car = car.replace(/ë/g, "ё");
  car = car.replace(/ï/g, "ї");
  car = car.replace(/û/g, "ю");
  car = car.replace(/ê/g, "э");
  car = car.replace(/ä/g, "ә");
  car = car.replace(/ə/g, "ә");
  car = car.replace(/ň/g, "ң");
  car = car.replace(/Q/g, "Қ");
  car = car.replace(/W/g, "Ў");
  car = car.replace(/E/g, "Е");
  car = car.replace(/R/g, "Р");
  car = car.replace(/T/g, "Т");
  car = car.replace(/Y/g, "Й");
  car = car.replace(/U/g, "У");
  car = car.replace(/I/g, "Ы");
  car = car.replace(/O/g, "О");
  car = car.replace(/P/g, "П");
  car = car.replace(/Ğ/g, "Ғ");
  car = car.replace(/Ü/g, "Ү");
  car = car.replace(/A/g, "А");
  car = car.replace(/S/g, "С");
  car = car.replace(/D/g, "Д");
  car = car.replace(/F/g, "Ф");
  car = car.replace(/G/g, "Г");
  car = car.replace(/H/g, "Һ");
  car = car.replace(/J/g, "Ж");
  car = car.replace(/K/g, "К");
  car = car.replace(/L/g, "Л");
  car = car.replace(/Ş/g, "Ш");
  car = car.replace(/İ/g, "И");
  car = car.replace(/Z/g, "З");
  car = car.replace(/X/g, "Х");
  car = car.replace(/C/g, "Ц");
  car = car.replace(/V/g, "В");
  car = car.replace(/B/g, "Б");
  car = car.replace(/N/g, "Н");
  car = car.replace(/M/g, "М");
  car = car.replace(/Ö/g, "Ө");
  car = car.replace(/Ç/g, "Ч");
  car = car.replace(/Â/g, "Я");
  car = car.replace(/Ô/g, "Ё");
  car = car.replace(/Ë/g, "Ё");
  car = car.replace(/Ï/g, "Ї");
  car = car.replace(/Û/g, "Ю");
  car = car.replace(/Ê/g, "Э");
  car = car.replace(/Ä/g, "Ә");
  car = car.replace(/Ə/g, "Ә");
  car = car.replace(/Ň/g, "Ң");
  car = car.replace(/\u0027/g, "ь");
  car = car.replace(/\u0022/g, "ъ"); 
  car = car.replace(/<</g, "«");
  car = car.replace(/>>/g, "»");
  
  car = car.replace(/қ(\u002a|\u005c)/g, "ҡ");
  car = car.replace(/Қ(\u002a|\u005c)/g, "Ҡ");
  car = car.replace(/ҡ(\u002a|\u005c)/g, "қ");
  car = car.replace(/Ҡ(\u002a|\u005c)/g, "Қ");
  
  car = car.replace(/ў(\u002a|\u005c)/g, "ԝ");
  car = car.replace(/Ў(\u002a|\u005c)/g, "Ԝ");
  car = car.replace(/ԝ(\u002a|\u005c)/g, "ў");
  car = car.replace(/Ԝ(\u002a|\u005c)/g, "Ў");
  
  car = car.replace(/е(\u002a|\u005c)/g, "э");
  car = car.replace(/Е(\u002a|\u005c)/g, "Э");
  car = car.replace(/э(\u002a|\u005c)/g, "ә");
  car = car.replace(/Э(\u002a|\u005c)/g, "Ә");
  car = car.replace(/ә(\u002a|\u005c)/g, "є");
  car = car.replace(/Ә(\u002a|\u005c)/g, "Є");
  car = car.replace(/є(\u002a|\u005c)/g, "ӗ");
  car = car.replace(/Є(\u002a|\u005c)/g, "Ӗ");
  car = car.replace(/ӗ(\u002a|\u005c)/g, "е");
  car = car.replace(/Ӗ(\u002a|\u005c)/g, "Е");
  
  car = car.replace(/й(\u002a|\u005c)/g, "ј");
  car = car.replace(/Й(\u002a|\u005c)/g, "Ј");
  car = car.replace(/ј(\u002a|\u005c)/g, "й");
  car = car.replace(/Ј(\u002a|\u005c)/g, "Й");
  
  car = car.replace(/у(\u002a|\u005c)/g, "ӯ");
  car = car.replace(/У(\u002a|\u005c)/g, "Ӯ");
  car = car.replace(/ӯ(\u002a|\u005c)/g, "ӱ");
  car = car.replace(/Ӯ(\u002a|\u005c)/g, "Ӱ");
  car = car.replace(/ӱ(\u002a|\u005c)/g, "ӳ");
  car = car.replace(/Ӱ(\u002a|\u005c)/g, "Ӳ");
  car = car.replace(/ӳ(\u002a|\u005c)/g, "у");
  car = car.replace(/Ӳ(\u002a|\u005c)/g, "У");
  
  car = car.replace(/о(\u002a|\u005c)/g, "ӧ");
  car = car.replace(/О(\u002a|\u005c)/g, "Ӧ");
  car = car.replace(/ӧ(\u002a|\u005c)/g, "о");
  car = car.replace(/Ӧ(\u002a|\u005c)/g, "О");
  
  car = car.replace(/ү(\u002a|\u005c)/g, "ұ");
  car = car.replace(/Ү(\u002a|\u005c)/g, "Ұ");
  car = car.replace(/ұ(\u002a|\u005c)/g, "ү");
  car = car.replace(/Ұ(\u002a|\u005c)/g, "Ү");
  
  car = car.replace(/а(\u002a|\u005c)/g, "ӑ");
  car = car.replace(/А(\u002a|\u005c)/g, "Ӑ");
  car = car.replace(/ӑ(\u002a|\u005c)/g, "а");
  car = car.replace(/Ӑ(\u002a|\u005c)/g, "А");
  
  car = car.replace(/с(\u002a|\u005c)/g, "ѕ");
  car = car.replace(/С(\u002a|\u005c)/g, "Ѕ");
  car = car.replace(/ѕ(\u002a|\u005c)/g, "ҫ");
  car = car.replace(/Ѕ(\u002a|\u005c)/g, "Ҫ");
  car = car.replace(/ҫ(\u002a|\u005c)/g, "с");
  car = car.replace(/Ҫ(\u002a|\u005c)/g, "С");
  
  car = car.replace(/г(\u002a|\u005c)/g, "ґ");
  car = car.replace(/Г(\u002a|\u005c)/g, "Ґ");
  car = car.replace(/ґ(\u002a|\u005c)/g, "ѓ");
  car = car.replace(/Ґ(\u002a|\u005c)/g, "Ѓ");
  car = car.replace(/ѓ(\u002a|\u005c)/g, "ҕ");
  car = car.replace(/Ѓ(\u002a|\u005c)/g, "Ҕ");
  car = car.replace(/ҕ(\u002a|\u005c)/g, "г");
  car = car.replace(/Ҕ(\u002a|\u005c)/g, "Г");
  
  car = car.replace(/һ(\u002a|\u005c)/g, "ћ");
  car = car.replace(/Һ(\u002a|\u005c)/g, "Ћ");
  car = car.replace(/ћ(\u002a|\u005c)/g, "ђ");
  car = car.replace(/Ћ(\u002a|\u005c)/g, "Ђ");
  car = car.replace(/ђ(\u002a|\u005c)/g, "һ");
  car = car.replace(/Ђ(\u002a|\u005c)/g, "Һ");
  
  car = car.replace(/ж(\u002a|\u005c)/g, "җ");
  car = car.replace(/Ж(\u002a|\u005c)/g, "Җ");
  car = car.replace(/җ(\u002a|\u005c)/g, "ж");
  car = car.replace(/Җ(\u002a|\u005c)/g, "Ж");
  
  car = car.replace(/к(\u002a|\u005c)/g, "ќ");
  car = car.replace(/К(\u002a|\u005c)/g, "Ќ");
  car = car.replace(/ќ(\u002a|\u005c)/g, "ҝ");
  car = car.replace(/Ќ(\u002a|\u005c)/g, "Ҝ");
  car = car.replace(/ҝ(\u002a|\u005c)/g, "к");
  car = car.replace(/Ҝ(\u002a|\u005c)/g, "К");
  
  car = car.replace(/л(\u002a|\u005c)/g, "љ");
  car = car.replace(/Л(\u002a|\u005c)/g, "Љ");
  car = car.replace(/љ(\u002a|\u005c)/g, "л");
  car = car.replace(/Љ(\u002a|\u005c)/g, "Л");
  
  car = car.replace(/ш(\u002a|\u005c)/g, "щ");
  car = car.replace(/Ш(\u002a|\u005c)/g, "Щ");
  car = car.replace(/щ(\u002a|\u005c)/g, "ш");
  car = car.replace(/Щ(\u002a|\u005c)/g, "Ш");
  
  car = car.replace(/и(\u002a|\u005c)/g, "і");
  car = car.replace(/И(\u002a|\u005c)/g, "І");
  car = car.replace(/і(\u002a|\u005c)/g, "ї");
  car = car.replace(/І(\u002a|\u005c)/g, "Ї");
  car = car.replace(/ї(\u002a|\u005c)/g, "ӣ");
  car = car.replace(/Ї(\u002a|\u005c)/g, "Ӣ");
  car = car.replace(/ӣ(\u002a|\u005c)/g, "ѝ");
  car = car.replace(/Ӣ(\u002a|\u005c)/g, "Ѝ");
  car = car.replace(/ѝ(\u002a|\u005c)/g, "и");
  car = car.replace(/Ѝ(\u002a|\u005c)/g, "И");
  
  car = car.replace(/з(\u002a|\u005c)/g, "ҙ");
  car = car.replace(/З(\u002a|\u005c)/g, "Ҙ");
  car = car.replace(/ҙ(\u002a|\u005c)/g, "з");
  car = car.replace(/Ҙ(\u002a|\u005c)/g, "З");
  
  car = car.replace(/х(\u002a|\u005c)/g, "ҳ");
  car = car.replace(/Х(\u002a|\u005c)/g, "Ҳ");
  car = car.replace(/ҳ(\u002a|\u005c)/g, "х");
  car = car.replace(/Ҳ(\u002a|\u005c)/g, "Х");
  
  car = car.replace(/ц(\u002a|\u005c)/g, "џ");
  car = car.replace(/Ц(\u002a|\u005c)/g, "Џ");
  car = car.replace(/џ(\u002a|\u005c)/g, "ц");
  car = car.replace(/Џ(\u002a|\u005c)/g, "Ц");
  
  car = car.replace(/н(\u002a|\u005c)/g, "ң");
  car = car.replace(/Н(\u002a|\u005c)/g, "Ң");
  car = car.replace(/ң(\u002a|\u005c)/g, "њ");
  car = car.replace(/Ң(\u002a|\u005c)/g, "Њ");
  car = car.replace(/њ(\u002a|\u005c)/g, "ҥ");
  car = car.replace(/Њ(\u002a|\u005c)/g, "Ҥ");
  car = car.replace(/ҥ(\u002a|\u005c)/g, "н");
  car = car.replace(/Ҥ(\u002a|\u005c)/g, "Н");
  
  car = car.replace(/ч(\u002a|\u005c)/g, "ҷ");
  car = car.replace(/Ч(\u002a|\u005c)/g, "Ҷ");
  car = car.replace(/ҷ(\u002a|\u005c)/g, "ҹ");
  car = car.replace(/Ҷ(\u002a|\u005c)/g, "Ҹ");
  car = car.replace(/ҹ(\u002a|\u005c)/g, "ч");
  car = car.replace(/Ҹ(\u002a|\u005c)/g, "Ч");
  
  car = car.replace(/ь(\u002a|\u005c)/g, "Ь");
  car = car.replace(/Ь(\u002a|\u005c)/g, "ь");
  
  car = car.replace(/ъ(\u002a|\u005c)/g, "Ъ");
  car = car.replace(/Ъ(\u002a|\u005c)/g, "ъ");
document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}