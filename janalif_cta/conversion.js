var car;
function latcyr () {
car = document.transcription.text2.value;
var letters = ["A","Ä","B","C","Ç","D","E","F","G","Ğ","H","I","İ","J","K","L","M","N","Ñ","O","Ö","P","Q","R","S","Ş","T","U","Ü","V","W","X","Y","Z","a","ä","b","c","ç","d","e","f","g","ğ","h","i","İ","j","k","l","m","n","ñ","o","ö","p","q","r","s","ş","t","u","ü","v","w","x","y","z"];
  for (let i=0;i<=car.length;i++){
    if (letters.indexOf(car.charAt(i)) == -1){
      car = car.replace(car.charAt(i),car.charAt(i).normalize('NFD'));    
      }
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
    
  car = car.replace(/Â/g, "A");
  car = car.replace(/Î/g, "I");
  car = car.replace(/Û/g, "U");
  car = car.replace(/â/g, "a");
  car = car.replace(/î/g, "i");
  car = car.replace(/û/g, "u");
  car = car.replace(/W/g, "V\u2060");
  car = car.replace(/w/g, "v\u2060");
   document.transcription.text1.value=car;
}
function cyrlat () {
car = document.transcription.text1.value;
var letters = ["A","Ə","B","Ç","C","D","E","F","G","Ƣ","H","Ь","I","Ƶ","K","L","M","N","Ꞑ","O","Ɵ","P","Q","R","S","Ş","T","U","У","V","V⁠","X","J","Z","a","ə","ʙ","ç","c","d","e","f","g","ƣ","h","i","I","ƶ","k","l","m","n","ꞑ","o","ɵ","p","q","r","s","ş","t","u","y","v","v⁠","x","j","z"];
  for (let i=0;i<=car.length;i++){
    if (letters.indexOf(car.charAt(i)) == -1){
      car = car.replace(car.charAt(i),car.charAt(i).normalize('NFD'));    
      }
  }
  car = car.replace(/V\u2060/g, "W");
  car = car.replace(/v\u2060/g, "w");
  
  car = car.replace(/C/g, "\u2060");
  car = car.replace(/Ç/g, "C");
  car = car.replace(/\u2060/g, "Ç");
  car = car.replace(/Ə/g, "Ä");
  car = car.replace(/Ƣ/g, "Ğ");
  car = car.replace(/I/g, "İ");
  car = car.replace(/(Ꞑ|Ŋ)/g, "Ñ");
  car = car.replace(/Ɵ/g, "Ö");
  car = car.replace(/(У|Y)/g, "Ü");
  car = car.replace(/J/g, "Y");
  car = car.replace(/Ƶ/g, "J");
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
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
