var car;
function cyrlat () {
car = document.transcription.text1.value;
car = car.replace(/A/g, 'А');
car = car.replace(/B/g, 'В');
car = car.replace(/C/g, 'С');
car = car.replace(/Ç/g, 'Ҫ');
car = car.replace(/E/g, 'Е');
car = car.replace(/F/g, 'Ғ');
car = car.replace(/G/g, 'Ԍ');
car = car.replace(/H/g, 'Н');
car = car.replace(/I/g, 'І');
car = car.replace(/J/g, 'Ј');
car = car.replace(/K/g, 'Κ');
car = car.replace(/M/g, 'М');
car = car.replace(/N/g, 'Ν');
car = car.replace(/O/g, 'О');
car = car.replace(/Ö/g, 'Ӧ');
car = car.replace(/P/g, 'Р');
car = car.replace(/S/g, 'Ѕ');
car = car.replace(/Ş/g, 'Ș');
car = car.replace(/T/g, 'Т');
car = car.replace(/W/g, 'Ԝ');
car = car.replace(/X/g, 'Х');
car = car.replace(/Y/g, 'Ү');
car = car.replace(/Z/g, 'Ζ');
car = car.replace(/a/g, 'а');
car = car.replace(/b/g, 'Ь');
car = car.replace(/c/g, 'с');
car = car.replace(/ç/g, 'ҫ');
car = car.replace(/d/g, 'ԁ');
car = car.replace(/e/g, 'е');
car = car.replace(/h/g, 'һ');
car = car.replace(/i/g, 'і');
car = car.replace(/j/g, 'ј');
car = car.replace(/l/g, 'ӏ');
car = car.replace(/n/g, 'п');
car = car.replace(/o/g, 'о');
car = car.replace(/ö/g, 'ӧ');
car = car.replace(/p/g, 'р');
car = car.replace(/r/g, 'г');
car = car.replace(/s/g, 'ѕ');
car = car.replace(/ş/g, 'ș');
car = car.replace(/w/g, 'ԝ');
car = car.replace(/x/g, 'х');
car = car.replace(/y/g, 'у');
document.transcription.text1.value=car;
}
function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}
function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
