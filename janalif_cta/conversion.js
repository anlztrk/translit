var car;
function latcyr () {
car = document.transcription.text2.value;
  {
    var letters = ["Ä","Ç","Ğ","İ","Ñ","Ö","Ş","Ţ","Ü","ä","ç","ğ","ñ","ö","ş","ţ","ü"];
    for (let i=0;i<=car.length;i++){
      if (letters.indexOf(car.charAt(i)) == -1){
        car = car.replace(car.charAt(i),car.charAt(i).normalize('NFD'));
      }
    }
    car = car.replace(/I(\p{M})/ug, "İ$1");
	car = car.replace(/İ\u0307/g, "İ");
  }  
  
  car = car.replace(/\u2060/g, "");
  
  car = car.replace(/Ä/g, "Ə");
  car = car.replace(/Ç/g, "\u2060");
  car = car.replace(/C/g, "Ç");
  car = car.replace(/\u2060/g, "C");
  car = car.replace(/Ğ/g, "Ƣ");
  car = car.replace(/I/g, "Ь");
  car = car.replace(/İ/g, "I");
  car = car.replace(/J/g, "Ƶ");
  car = car.replace(/Ñ/g, "Ꞑ");
  car = car.replace(/Ö/g, "Ɵ");
  car = car.replace(/Y/g, "J");
  car = car.replace(/Ü/g, "У");
  car = car.replace(/ä/g, "ə");
  car = car.replace(/ç/g, "\u2060");
  car = car.replace(/c/g, "ç");
  car = car.replace(/\u2060/g, "c");
  car = car.replace(/ğ/g, "ƣ");
  car = car.replace(/ı/g, "ь");
  car = car.replace(/j/g, "ƶ");
  car = car.replace(/ñ/g, "ꞑ");
  car = car.replace(/ö/g, "ɵ");
  car = car.replace(/y/g, "j");
  car = car.replace(/ü/g, "y");
  car = car.replace(/b/g, "ʙ");

  car = car.replace(/Ţ/g, "Ts\u2060");
  car = car.replace(/ţ/g, "ts\u2060");
  car = car.replace(/W/g, "V\u2060");
  car = car.replace(/w/g, "v\u2060");
  
  car = car.normalize('NFC');
document.transcription.text1.value=car;
}
function cyrlat () {
car = document.transcription.text1.value;
  {
    var letters = ["Ə","Ç","Ƣ","Ь","Ƶ","Ꞑ","Ɵ","Ş","У","⁠ə","ʙ","ç","ƣ","ƶ","ꞑ","ɵ","ş⁠"];
      for (let i=0;i<=car.length;i++){
    if (letters.indexOf(car.charAt(i)) == -1){
      car = car.replace(car.charAt(i),car.charAt(i).normalize('NFD'));
      }
  }
car = car.replace(/I(\p{M})/ug, "Ï$1");   
} 
  car = car.replace(/T(S|s)\u2060/g, "Ţ");
  car = car.replace(/ts\u2060/g, "ţ");
  car = car.replace(/V\u2060/g, "W");
  car = car.replace(/v\u2060/g, "w");

  car = car.replace(/\u2060/g, "");

  car = car.replace(/C/g, "\u2060");
  car = car.replace(/Ç/g, "C");
  car = car.replace(/\u2060/g, "Ç");
  car = car.replace(/Ə/g, "Ä");
  car = car.replace(/Ƣ/g, "Ğ");
  car = car.replace(/(Ꞑ|Ŋ)/g, "Ñ");
  car = car.replace(/Ɵ/g, "Ö");
  car = car.replace(/(У|Y)/g, "Ü");
  car = car.replace(/J/g, "Y");
  car = car.replace(/Ƶ/g, "J");  
  car = car.replace(/I/g, "İ");
  car = car.replace(/Ь/g, "I");
  car = car.replace(/c/g, "\u2060");
  car = car.replace(/ç/g, "c");
  car = car.replace(/\u2060/g, "ç");
  car = car.replace(/ə/g, "ä");
  car = car.replace(/ƣ/g, "ğ");
  car = car.replace(/(ꞑ|ŋ)/g, "ñ");
  car = car.replace(/ɵ/g, "ö");
  car = car.replace(/y/g, "ü");
  car = car.replace(/j/g, "y");
  car = car.replace(/ƶ/g, "j");
  car = car.replace(/ь/g, "ı");
  car = car.replace(/(ʙ|в)/g, "b");  
    
  car = car.normalize('NFC');
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
