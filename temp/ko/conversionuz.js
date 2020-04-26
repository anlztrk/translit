﻿//  zaciatocne e musi byt ye
var translit;

function cyrlat () {
translit = document.transcription.text1.value;

translit = translit.replace(/a-eo/g, "aõ");
translit = translit.replace(/a-eu/g, "aũ");
translit = translit.replace(/e-oe/g, "eœ");
translit = translit.replace(/o-eo/g, "oõ");
translit = translit.replace(/o-eu/g, "oũ");
translit = translit.replace(/A-eo/g, "Aõ");
translit = translit.replace(/A-eu/g, "Aũ");
translit = translit.replace(/E-oe/g, "Eœ");
translit = translit.replace(/O-eo/g, "Oõ");
translit = translit.replace(/O-eu/g, "Oũ");
translit = translit.replace(/A-EO/g, "AÕ");
translit = translit.replace(/A-EU/g, "AŨ");
translit = translit.replace(/E-OE/g, "EŒ");
translit = translit.replace(/O-EO/g, "OÕ");
translit = translit.replace(/O-EU/g, "OŨ");

translit = translit.replace(/aeo/g, "aõ");
translit = translit.replace(/aeu/g, "aũ");
translit = translit.replace(/eoe/g, "eœ");
translit = translit.replace(/oeo/g, "oõ");
translit = translit.replace(/oeu/g, "oũ");
translit = translit.replace(/Aeo/g, "Aõ");
translit = translit.replace(/Aeu/g, "Aũ");
translit = translit.replace(/Eoe/g, "Eœ");
translit = translit.replace(/Oeo/g, "Oõ");
translit = translit.replace(/Oeu/g, "Oũ");
translit = translit.replace(/AEO/g, "AÕ");
translit = translit.replace(/AEU/g, "AŨ");
translit = translit.replace(/EOE/g, "EŒ");
translit = translit.replace(/OEO/g, "OÕ");
translit = translit.replace(/OEU/g, "OŨ");

translit = translit.replace(/eo/g, "õ");
translit = translit.replace(/Eo/g, "Õ");
translit = translit.replace(/EO/g, "Õ");
translit = translit.replace(/eu/g, "ũ");
translit = translit.replace(/Eu/g, "Ũ");
translit = translit.replace(/EU/g, "Ũ");
translit = translit.replace(/ae/g, "è");
translit = translit.replace(/Ae/g, "È");
translit = translit.replace(/AE/g, "È");
translit = translit.replace(/oe/g, "œ");
translit = translit.replace(/Oe/g, "Œ");
translit = translit.replace(/OE/g, "Œ");
translit = translit.replace(/ui/g, "ũi");
translit = translit.replace(/Ui/g, "Ũi");
translit = translit.replace(/UI/g, "ŨI");
translit = translit.replace(/wo/g, "wõ");
translit = translit.replace(/Wo/g, "Wõ");
translit = translit.replace(/WO/g, "WÕ");

translit = translit.replace(/è-ũ/g, "èũ");
translit = translit.replace(/È-ũ/g, "Èũ");
translit = translit.replace(/È-Ũ/g, "ÈŨ");

translit = translit.replace(/e-o/g, "eo");
translit = translit.replace(/E-o/g, "Eo");
translit = translit.replace(/E-O/g, "EO");
translit = translit.replace(/e-u/g, "eu");
translit = translit.replace(/E-u/g, "Eu");
translit = translit.replace(/E-U/g, "EU");
translit = translit.replace(/a-e/g, "ae");
translit = translit.replace(/A-e/g, "Ae");
translit = translit.replace(/A-E/g, "AE");
translit = translit.replace(/o-e/g, "oe");
translit = translit.replace(/O-e/g, "Oe");
translit = translit.replace(/O-E/g, "OE");
translit = translit.replace(/u-i/g, "ui");
translit = translit.replace(/U-i/g, "Ui");
translit = translit.replace(/U-I/g, "UI");
translit = translit.replace(/o-õ/g, "oõ");
translit = translit.replace(/O-õ/g, "Oõ");
translit = translit.replace(/O-Õ/g, "OÕ");
translit = translit.replace(/o-ũ/g, "oũ");
translit = translit.replace(/O-ũ/g, "Oũ");
translit = translit.replace(/O-Ũ/g, "OŨ");
translit = translit.replace(/õ-e/g, "õe");
translit = translit.replace(/Õ-e/g, "Õe");
translit = translit.replace(/Õ-E/g, "ÕE");
translit = translit.replace(/œ-o/g, "œo");
translit = translit.replace(/Œ-o/g, "Œo");
translit = translit.replace(/Œ-O/g, "ŒO");
translit = translit.replace(/œ-u/g, "œu");
translit = translit.replace(/Œ-u/g, "Œu");
translit = translit.replace(/Œ-U/g, "ŒU");
translit = translit.replace(/e-œ/g, "eœ");
translit = translit.replace(/E-œ/g, "Eœ");
translit = translit.replace(/E-Œ/g, "EŒ");
translit = translit.replace(/õ-ũ/g, "õũ");
translit = translit.replace(/Õ-ũ/g, "Õũ");
translit = translit.replace(/Õ-Ũ/g, "ÕŨ");
translit = translit.replace(/e-ũ/g, "eũ");
translit = translit.replace(/E-ũ/g, "Eũ");
translit = translit.replace(/E-Ũ/g, "EŨ");
translit = translit.replace(/œ-ũ/g, "œũ");
translit = translit.replace(/Œ-ũ/g, "Œũ");
translit = translit.replace(/Œ-Ũ/g, "ŒŨ");
translit = translit.replace(/a-õ/g, "aõ");
translit = translit.replace(/A-õ/g, "Aõ");
translit = translit.replace(/A-Õ/g, "AÕ");
translit = translit.replace(/a-ũ/g, "aũ");
translit = translit.replace(/A-ũ/g, "Aũ");
translit = translit.replace(/A-Ũ/g, "AŨ");
translit = translit.replace(/è-o/g, "èo");
translit = translit.replace(/È-o/g, "Èo");
translit = translit.replace(/È-O/g, "ÈO");
translit = translit.replace(/è-u/g, "èu");
translit = translit.replace(/È-u/g, "Èu");
translit = translit.replace(/È-U/g, "ÈU");

translit = translit.replace(/ss/g, "ṣ");
translit = translit.replace(/Ss/g, "Ṣ");
translit = translit.replace(/SS/g, "Ṣ");
translit = translit.replace(/tt/g, "ṭ");
translit = translit.replace(/Tt/g, "Ṭ");
translit = translit.replace(/TT/g, "Ṭ");
translit = translit.replace(/pp/g, "ṗ");
translit = translit.replace(/Pp/g, "Ṗ");
translit = translit.replace(/PP/g, "Ṗ");
translit = translit.replace(/kk/g, "ḳ");
translit = translit.replace(/Kk/g, "Ḳ");
translit = translit.replace(/KK/g, "Ḳ");
translit = translit.replace(/jj/g, "c\u0323h");
translit = translit.replace(/Jj/g, "C\u0323h");
translit = translit.replace(/JJ/g, "C\u0323H");

translit = translit.replace(/sh/g, "s-h");
translit = translit.replace(/Sh/g, "S-h");
translit = translit.replace(/SH/g, "S-H");
translit = translit.replace(/ṣh/g, "ṣ-h");
translit = translit.replace(/Ṣh/g, "Ṣ-h");
translit = translit.replace(/ṢH/g, "Ṣ-H");

translit = translit.replace(/si/g, "shi");
translit = translit.replace(/Si/g, "Shi");
translit = translit.replace(/SI/g, "SHI");
translit = translit.replace(/ṣi/g, "ṣhi");
translit = translit.replace(/Ṣi/g, "Ṣhi");
translit = translit.replace(/ṢI/g, "ṢHI");
translit = translit.replace(/sy/g, "shy");
translit = translit.replace(/Sy/g, "Shy");
translit = translit.replace(/SY/g, "SHY");
translit = translit.replace(/ṣy/g, "ṣhy");
translit = translit.replace(/Ṣy/g, "Ṣhy");
translit = translit.replace(/ṢY/g, "ṢHY");

translit = translit.replace(/ṣs/g, "sṣ");
translit = translit.replace(/Ṣs/g, "Sṣ");
translit = translit.replace(/ṢS/g, "SṢ");
translit = translit.replace(/ṭt/g, "tṭ");
translit = translit.replace(/Ṭt/g, "Tṭ");
translit = translit.replace(/ṬT/g, "TṬ");
translit = translit.replace(/ṗp/g, "pṗ");
translit = translit.replace(/Ṗp/g, "Pṗ");
translit = translit.replace(/ṖP/g, "PṖ");
translit = translit.replace(/ḳk/g, "kḳ");
translit = translit.replace(/Ḳk/g, "Kḳ");
translit = translit.replace(/ḲK/g, "KḲ");
translit = translit.replace(/c\u0323hj/g, "jc\u0323h");
translit = translit.replace(/C\u0323hj/g, "Jc\u0323h");
translit = translit.replace(/C\u0323hJ/g, "JC\u0323H");

translit = translit.replace(/Œ/g, "W\u2060e");
translit = translit.replace(/œ/g, "w\u2060e");

translit = translit.replace(/CH/g, "CH`");
translit = translit.replace(/Ch/g, "Ch`");
translit = translit.replace(/ch/g, "ch`");
translit = translit.replace(/J/g, "Ch");
translit = translit.replace(/j/g, "ch");
translit = translit.replace(/C\u0323H/g, "J");
translit = translit.replace(/c\u0323h/g, "j");
translit = translit.replace(/CH`/g, "C\u0323H");
translit = translit.replace(/Ch`/g, "C\u0323h");
translit = translit.replace(/ch`/g, "c\u0323h");

translit = translit.replace(/P/g, "P`");
translit = translit.replace(/p/g, "p`");
translit = translit.replace(/B/g, "P");
translit = translit.replace(/b/g, "p");
translit = translit.replace(/Ṗ/g, "B");
translit = translit.replace(/ṗ/g, "b");
translit = translit.replace(/P`/g, "Ṗ");
translit = translit.replace(/p`/g, "ṗ");

translit = translit.replace(/K/g, "K`");
translit = translit.replace(/k/g, "k`");
translit = translit.replace(/G/g, "K");
translit = translit.replace(/g/g, "k");
translit = translit.replace(/Ḳ/g, "G");
translit = translit.replace(/ḳ/g, "g");
translit = translit.replace(/K`/g, "Ḳ");
translit = translit.replace(/k`/g, "ḳ");

translit = translit.replace(/T/g, "T`");
translit = translit.replace(/t/g, "t`");
translit = translit.replace(/D/g, "T");
translit = translit.replace(/d/g, "t");
translit = translit.replace(/Ṭ/g, "D");
translit = translit.replace(/ṭ/g, "d");
translit = translit.replace(/T`/g, "Ṭ");
translit = translit.replace(/t`/g, "ṭ");
document.transcription.text2.value = translit;
}


function copy1()
{ textRange=document.transcription.text1.createTextRange();
textRange.execCommand("Copy");
textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();
textRange.execCommand("Copy");
textRange="";
}
