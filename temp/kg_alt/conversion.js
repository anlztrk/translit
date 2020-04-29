//  copyright lexilogos.com
var car;
var translit;
function cyrlat () {
car = document.transcription.text1.value;car = car.replace(/ag/g, "aǧ");
  car = car.replace(/yg/g, "yǧ");
  car = car.replace(/og/g, "oǧ");
  car = car.replace(/ug/g, "uǧ");
  car = car.replace(/ga/g, "ǧa");
  car = car.replace(/gy/g, "ǧy");
  car = car.replace(/go/g, "ǧo");
  car = car.replace(/gu/g, "ǧu");
  car = car.replace(/ǧe/g, "ge");
  car = car.replace(/ǧi/g, "gi");
  car = car.replace(/ǧö/g, "gö");
  car = car.replace(/ǧü/g, "gü");
  
  car = car.replace(/Ag/g, "Aǧ");
  car = car.replace(/Yg/g, "Yǧ");
  car = car.replace(/Og/g, "Oǧ");
  car = car.replace(/Ug/g, "Uǧ");
  car = car.replace(/Ga/g, "Ǧa");
  car = car.replace(/Gy/g, "Ǧy");
  car = car.replace(/Go/g, "Ǧo");
  car = car.replace(/Gu/g, "Ǧu");
  car = car.replace(/Ǧe/g, "Ge");
  car = car.replace(/Ǧi/g, "Gi");
  car = car.replace(/Ǧö/g, "Gö");
  car = car.replace(/Ǧü/g, "Gü");
  
  car = car.replace(/AG/g, "AǦ");
  car = car.replace(/YG/g, "YǦ");
  car = car.replace(/OG/g, "OǦ");
  car = car.replace(/UG/g, "UǦ");
  car = car.replace(/GA/g, "ǦA");
  car = car.replace(/GY/g, "ǦY");
  car = car.replace(/GO/g, "ǦO");
  car = car.replace(/GU/g, "ǦU");
  car = car.replace(/ǦE/g, "GE");
  car = car.replace(/ǦI/g, "GI");
  car = car.replace(/ǦÖ/g, "GÖ");
  car = car.replace(/ǦÜ/g, "GÜ");
  
  car = car.replace(/á/g, "aa");
  car = car.replace(/c/g, "ts");
  car = car.replace(/đ/g, "c");
  car = car.replace(/č/g, "ç");
  car = car.replace(/é/g, "ee");
  car = car.replace(/y/g, "ı");
  car = car.replace(/ý/g, "ıı");
  car = car.replace(/í/g, "ii");
  car = car.replace(/ó/g, "oo");
  car = car.replace(/ő/g, "öö");
  car = car.replace(/š/g, "ş");
  car = car.replace(/ú/g, "uu");
  car = car.replace(/ű/g, "üü");
  car = car.replace(/j/g, "y");  
  car = car.replace(/Á/g, "Aa");
  car = car.replace(/C/g, "Ts");
  car = car.replace(/Đ/g, "C");
  car = car.replace(/Č/g, "Ç");
  car = car.replace(/É/g, "Ee");
  car = car.replace(/I/g, "İ");
  car = car.replace(/Y/g, "I");
  car = car.replace(/Ý/g, "Iı");
  car = car.replace(/Í/g, "İi");
  car = car.replace(/Ó/g, "Oo");
  car = car.replace(/Ő/g, "Öö");
  car = car.replace(/Š/g, "Ş");
  car = car.replace(/Ú/g, "Uu");
  car = car.replace(/Ű/g, "Üü");
  car = car.replace(/J/g, "Y");  
  
  
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}