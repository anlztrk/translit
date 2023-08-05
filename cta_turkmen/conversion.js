var car;
function latcyr () {
car = document.transcription.text2.value;
  {
    var letters = ["Ç","ç","Ä","ä","Ǧ","ǧ","Ž","ž","Ň","ň","Ö","ö","Ş","ş","Ü","ü","Ý","ý"];
    for (let i=0;i<=car.length;i++){
      if (letters.indexOf(car.charAt(i)) == -1){
        car = car.replace(car.charAt(i),car.charAt(i).normalize('NFD'));
      }
    }
    car = car.replace(/I(\p{M})/ug, "İ$1");
	car = car.replace(/İ\u0307/g, "İ");
  } 
  car = car.replace(/J/g, "C");
  car = car.replace(/Ž/g, "J");
  car = car.replace(/I/g, "İ");
  car = car.replace(/Y/g, "I");
  car = car.replace(/Ý/g, "Y");
  car = car.replace(/Ǧ/g, "Ğ");
  car = car.replace(/Ň/g, "Ñ");

  car = car.replace(/j/g, "c");
  car = car.replace(/ž/g, "j");
  car = car.replace(/y/g, "ı");
  car = car.replace(/ý/g, "y");
  car = car.replace(/ǧ/g, "ğ");
  car = car.replace(/ň/g, "ñ");  
document.transcription.text1.value=car;
}
function cyrlat () {
car = document.transcription.text1.value;
  {
    var letters = ["Ä","Ç","Ğ","İ","Ñ","Ö","Ş","Ü","ä","ç","ğ","ñ","ö","ş","ü"];
    for (let i=0;i<=car.length;i++){
      if (letters.indexOf(car.charAt(i)) == -1){
        car = car.replace(car.charAt(i),car.charAt(i).normalize('NFD'));
      }
    }
    car = car.replace(/I(\p{M})/ug, "İ$1");
	car = car.replace(/İ\u0307/g, "İ");
  } 
  car = car.replace(/J/g, "Ž");
  car = car.replace(/C/g, "J");
  car = car.replace(/Ğ/g, "Ǧ");
  car = car.replace(/Y/g, "Ý");
  car = car.replace(/I/g, "Y");
  car = car.replace(/İ/g, "I");
  car = car.replace(/Ñ/g, "Ň");
  car = car.replace(/j/g, "ž");
  car = car.replace(/c/g, "j");
  car = car.replace(/ğ/g, "ǧ");
  car = car.replace(/y/g, "ý");
  car = car.replace(/ı/g, "y");
  car = car.replace(/ñ/g, "ň");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
