var car;
function cyrlat () {
car = document.transcription.text1.value;
var car_init = car;/*
var letters = ["A","B","C","Ç","E","H","I","J","M","N","O","Ö","P","Q","S","T","W","X","Y","Z","a","c","ç","d","e","h","i","j","l","o","ö","p","q","s","w","x","y","\u2060","\u02bb","\u02bc"];
    for (let i=0;i<=car.length;i++){
      if (letters.indexOf(car.charAt(i)) == -1){
        car = "\u02bb"+car+"\u02bc";
      }
    }*/
car = car.replace(/A/g, "А");
car = car.replace(/B/g, "В");
car = car.replace(/C/g, "С");
car = car.replace(/Ç/g, "Ҫ");
car = car.replace(/E/g, "Е");
car = car.replace(/H/g, "Н");
car = car.replace(/I/g, "І");
car = car.replace(/J/g, "Ј");
car = car.replace(/M/g, "М");
car = car.replace(/N/g, "Ν");
car = car.replace(/O/g, "О");
car = car.replace(/Ö/g, "Ӧ");
car = car.replace(/P/g, "Р");
car = car.replace(/Q/g, "Ԛ");
car = car.replace(/S/g, "Ѕ");
car = car.replace(/T/g, "Т");
car = car.replace(/W/g, "Ԝ");
car = car.replace(/X/g, "Х");
car = car.replace(/Y/g, "Ү");
car = car.replace(/Z/g, "Ζ");
car = car.replace(/a/g, "а");
car = car.replace(/c/g, "с");
car = car.replace(/ç/g, "ҫ");
car = car.replace(/d/g, "ԁ");
car = car.replace(/e/g, "е");
car = car.replace(/h/g, "һ");
car = car.replace(/i/g, "і");
car = car.replace(/j/g, "ј");
car = car.replace(/l/g, "ӏ");
car = car.replace(/o/g, "о");
car = car.replace(/ö/g, "ӧ");
car = car.replace(/p/g, "р");
car = car.replace(/q/g, "ԛ");
car = car.replace(/s/g, "ѕ");
car = car.replace(/w/g, "ԝ");
car = car.replace(/x/g, "х");
car = car.replace(/y/g, "у");
car = car.normalize('NFC');
document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
