var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/cx/g, "ĉ");
  car = car.replace(/gx/g, "ĝ");
  car = car.replace(/hx/g, "ĥ");
  car = car.replace(/jx/g, "ĵ");
  car = car.replace(/sx/g, "ŝ");
  car = car.replace(/w/g, "ŭ");
  car = car.replace(/ux/g, "ŭ");
  car = car.replace(/Cx/g, "Ĉ");
  car = car.replace(/Gx/g, "Ĝ");
  car = car.replace(/Hx/g, "Ĥ");
  car = car.replace(/Jx/g, "Ĵ");
  car = car.replace(/Sx/g, "Ŝ");
  car = car.replace(/Ux/g, "Ŭ");
  car = car.replace(/CX/g, "Ĉ");
  car = car.replace(/GX/g, "Ĝ");
  car = car.replace(/HX/g, "Ĥ");
  car = car.replace(/JX/g, "Ĵ");
  car = car.replace(/SX/g, "Ŝ");
  car = car.replace(/W/g, "Ŭ");
  car = car.replace(/UX/g, "Ŭ");
   document.transcription.text1.value=car;
}
function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}
