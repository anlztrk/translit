var car;
function latcyr () {
car = document.transcription.text2.value;
var car_Orig = car;
{
var letters = ["Ä","Č","Ġ","Ï","Ž","Ṅ","Ö","Š","Ü","Ḥ","ä","č","ġ","ï","ž","ṅ","ö","š","ü","ḥ"];
  for (let i=0;i<=car.length;i++){
    if (letters.indexOf(car.charAt(i)) == -1){
      car = car.replace(car.charAt(i),car.charAt(i).normalize('NFD'));
      }
  }
car = car.replace(/I(\p{M})/ug, "Ï$1");   
}
  if (/Č|č/.test(car_Orig)) {
	  car = car.replace(/C/g, "Ţ");
	  car = car.replace(/c/g, "ţ");
  }  
  car = car.replace(/C/g, "Ç");
  if (/Ž|ž/.test(car_Orig)) {
	  car = car.replace(/J/g, "C");
	  car = car.replace(/j/g, "c");
  } 
  car = car.replace(/Ž/g, "J");
  car = car.replace(/I/g, "İ");
  car = car.replace(/Ï/g, "I");  
  car = car.replace(/Č/g, "Ç");
  car = car.replace(/Š/g, "Ş");
  car = car.replace(/Ġ/g, "Ğ");
  car = car.replace(/Ṅ/g, "Ñ");
  if (/Ḥ|ḥ/.test(car_Orig)) {
	  car = car.replace(/Ḥ/g, "X");
	  car = car.replace(/ḥ/g, "x");
  } 
  car = car.replace(/Ḥ/g, "H");
  car = car.replace(/c/g, "ç");
  car = car.replace(/ž/g, "j");
  car = car.replace(/ï/g, "ı");
  car = car.replace(/č/g, "ç");
  car = car.replace(/š/g, "ş");
  car = car.replace(/ġ/g, "ğ");
  car = car.replace(/ṅ/g, "ñ");  
  car = car.replace(/ḥ/g, "x");
  car = car.replace(/ḥ/g, "h");
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
    car = car.replace(/I(\p{M})/ug, "İ$1");
	car = car.replace(/İ\u0307/g, "İ");
  }  
  if (/C|c/.test(car_Orig)) {
	  car = car.replace(/J/g, "Ž");	  
	  car = car.replace(/j/g, "ž");
  } 
  car = car.replace(/C/g, "J");
  car = car.replace(/Ğ/g, "Ġ");
  car = car.replace(/I/g, "Ï");
  car = car.replace(/İ/g, "I");
  if (/Ţ|ţ/.test(car_Orig)) {
	  car = car.replace(/Ç/g, "Č");
	  car = car.replace(/ç/g, "č");
  }     
  car = car.replace(/Ç/g, "C");
  car = car.replace(/Ţ/g, "C");
  car = car.replace(/Ş/g, "Š");
  car = car.replace(/Ñ/g, "Ṅ");
  if (/H|h/.test(car_Orig)) {
	  car = car.replace(/X/g, "Ḥ");
	  car = car.replace(/x/g, "ḥ");
  }
  car = car.replace(/X/g, "H");
  car = car.replace(/c/g, "j");  
  car = car.replace(/ç/g, "c");
  car = car.replace(/ţ/g, "c");
  car = car.replace(/ş/g, "š");
  car = car.replace(/ğ/g, "ġ");
  car = car.replace(/ı/g, "ï");
  car = car.replace(/ñ/g, "ṅ");
  car = car.replace(/x/g, "h");  
  car = car.normalize('NFC');
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
