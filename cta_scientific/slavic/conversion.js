var car;
function latcyr () {
car = document.transcription.text2.value;
var car_Orig = car;
{
var letters = ["Ä","Č","Đ","Ġ","Ž","Ṅ","Ö","Š","Ü","Ȟ","ä","č","đ","ġ","ž","ṅ","ö","š","ü","ȟ"];
  for (let i=0;i<=car.length;i++){
    if (letters.indexOf(car.charAt(i)) == -1){
      car = car.replace(car.charAt(i),car.charAt(i).normalize('NFD'));
      }
  }
car = car.replace(/I(\p{M})/ug, "Y$1");   
}  
  if (/Ž|ž/.test(car_Orig) == false) {
	  car = car.replace(/Đ/g, "Ž");
	  car = car.replace(/đ/g, "ž");
  }
  car = car.replace(/C/g, "Ţ");
  car = car.replace(/Đ/g, "C");
  if (/Y|y/.test(car_Orig)) {
  car = car.replace(/I/g, "İ");
  }
  car = car.replace(/Y/g, "I");  
  car = car.replace(/J/g, "Y");
  car = car.replace(/Ž/g, "J");
  car = car.replace(/Č/g, "Ç");
  car = car.replace(/Š/g, "Ş");
  car = car.replace(/Ġ/g, "Ğ");
  car = car.replace(/Ṅ/g, "Ñ");
  car = car.replace(/Ȟ/g, "X");

  car = car.replace(/c/g, "ţ");
  car = car.replace(/đ/g, "c");
  car = car.replace(/y/g, "ı");  
  car = car.replace(/j/g, "y");
  car = car.replace(/ž/g, "j");
  car = car.replace(/č/g, "ç");
  car = car.replace(/š/g, "ş");
  car = car.replace(/ġ/g, "ğ");
  car = car.replace(/ṅ/g, "ñ");
  car = car.replace(/ȟ/g, "x"); 
  car = car.normalize('NFC');
document.transcription.text1.value=car;
}
function cyrlat () {
car = document.transcription.text1.value;
var car_Orig = car;
  {
    var letters = ["Ä","Ç","Ğ","İ","Ñ","Ö","Ş","Ţ","Ü","ä","ç","ğ","ı","ñ","ö","ş","ţ","ü"];
    for (let i=0;i<=car.length;i++){
      if (letters.indexOf(car.charAt(i)) == -1){
        car = car.replace(car.charAt(i),car.charAt(i).normalize('NFD'));
      }
    }
    if (/İ|ı/.test(car_Orig)) {
    car = car.replace(/I(\p{M})/ug, "İ$1");
	car = car.replace(/İ\u0307/g, "İ");
    }
  }  
  if (/C|c/.test(car_Orig) == false) {
	  car = car.replace(/J/g, "Đ");
	  car = car.replace(/j/g, "đ");
  }
  car = car.replace(/J/g, "Ž");
  car = car.replace(/C/g, "Đ");
  car = car.replace(/Ğ/g, "Ġ");
  car = car.replace(/Y/g, "J");
  if (/İ|ı/.test(car_Orig)) {
  car = car.replace(/I/g, "Y");
  }
  car = car.replace(/İ/g, "I");  
  car = car.replace(/Ç/g, "Č");
  car = car.replace(/Ţ/g, "C");
  car = car.replace(/Ş/g, "Š");
  car = car.replace(/Ñ/g, "Ṅ");
  car = car.replace(/X/g, "Ȟ");
  car = car.replace(/j/g, "ž");
  car = car.replace(/c/g, "đ");
  car = car.replace(/ğ/g, "ġ");
  car = car.replace(/y/g, "j");
  car = car.replace(/ı/g, "y");  
  car = car.replace(/ç/g, "č");
  car = car.replace(/ţ/g, "c");
  car = car.replace(/ş/g, "š");
  car = car.replace(/ñ/g, "ṅ");
  car = car.replace(/x/g, "ȟ");  
  car = car.normalize('NFC');
document.transcription.text2.value=car;
}
function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}
function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);

    }
