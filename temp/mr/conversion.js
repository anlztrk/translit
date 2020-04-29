var car;

function cyrlat () {
car = document.transcription.text1.value; 
 car = car.replace(/c/g, "ç");
 car = car.replace(/ǧ/g, "ğ");
 car = car.replace(/í/g, "î");
 car = car.replace(/j/g, "c");
 car = car.replace(/š/g, "ş");
 car = car.replace(/ú/g, "û");
 car = car.replace(/ž/g, "j");
 car = car.replace(/C/g, "Ç");
 car = car.replace(/Ǧ/g, "Ğ");
 car = car.replace(/Í/g, "Î");
 car = car.replace(/J/g, "C");
 car = car.replace(/Š/g, "Ş");
 car = car.replace(/Ú/g, "Û");
 car = car.replace(/Ž/g, "J");
document.transcription.text2.value = car;
}