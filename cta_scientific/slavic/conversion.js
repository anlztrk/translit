var car;
function latcyr () {
car = document.transcription.text2.value;
{
var letters = ["Ä","Č","Đ","Ġ","Ž","Ṅ","Ö","Š","Ü","Ḥ","ä","č","đ","ġ","ž","ṅ","ö","š","ü","ḥ"];
  for (let i=0;i<=car.length;i++){
    if (letters.indexOf(car.charAt(i)) == -1){
      car = car.replace(car.charAt(i),car.charAt(i).normalize('NFD'));
      }
  }
car = car.replace(/I(\p{M})/ug, "Ï$1");   
}  
  car = car.replace(/C/g, "Ţ");
  car = car.replace(/Đ/g, "C");
  car = car.replace(/I/g, "İ");
  car = car.replace(/Y/g, "I");  
  car = car.replace(/J/g, "Y");
  car = car.replace(/Ž/g, "J");
  car = car.replace(/Č/g, "Ç");
  car = car.replace(/Š/g, "Ş");
  car = car.replace(/Ġ/g, "Ğ");
  car = car.replace(/Ṅ/g, "Ñ");
  car = car.replace(/Ḥ/g, "X");

  car = car.replace(/c/g, "ţ");
  car = car.replace(/đ/g, "c");
  car = car.replace(/y/g, "ı");  
  car = car.replace(/j/g, "y");
  car = car.replace(/ž/g, "j");
  car = car.replace(/č/g, "ç");
  car = car.replace(/š/g, "ş");
  car = car.replace(/ġ/g, "ğ");
  car = car.replace(/ṅ/g, "ñ");
  car = car.replace(/ḥ/g, "x"); 
  car = car.normalize('NFC');
document.transcription.text1.value=car;
}
function cyrlat () {
car = document.transcription.text1.value;
  {
    var letters = ["Ä","Ç","Ğ","İ","Ñ","Ö","Ş","Ţ","Ü","ä","ç","ğ","ı","ñ","ö","ş","ţ","ü"];
    for (let i=0;i<=car.length;i++){
      if (letters.indexOf(car.charAt(i)) == -1){
        car = car.replace(car.charAt(i),car.charAt(i).normalize('NFD'));
      }
    }
    car = car.replace(/I(\p{M})/ug, "İ$1");
	car = car.replace(/İ\u0307/g, "İ");
  }  
  car = car.replace(/J/g, "Ž");
  car = car.replace(/C/g, "Đ");
  car = car.replace(/Ğ/g, "Ġ");
  car = car.replace(/Y/g, "J");
  car = car.replace(/I/g, "Y");
  car = car.replace(/İ/g, "I");  
  car = car.replace(/Ç/g, "Č");
  car = car.replace(/Ţ/g, "C");
  car = car.replace(/Ş/g, "Š");
  car = car.replace(/Ñ/g, "Ṅ");
  car = car.replace(/X/g, "Ḥ");
  car = car.replace(/j/g, "ž");
  car = car.replace(/j/g, "ž");
  car = car.replace(/c/g, "đ");
  car = car.replace(/ğ/g, "ġ");
  car = car.replace(/y/g, "j");
  car = car.replace(/ı/g, "y");  
  car = car.replace(/ç/g, "č");
  car = car.replace(/ţ/g, "c");
  car = car.replace(/ş/g, "š");
  car = car.replace(/ñ/g, "ṅ");
  car = car.replace(/x/g, "ḥ");
  
  car = car.normalize('NFC');
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
    }
