
var car;
function cyrlat () {
car = document.transcription.text1.value;
  if (car.normalize('NFD') != car ){
	car = car.normalize('NFD');
	car = car.replace(car.charAt(0),car.charAt(0).concat(" "));
  }
  else {
	return car;
  }
  
document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}