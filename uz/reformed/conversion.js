var car;

function cyrlat () {
 car = document.transcription.text1.value;
 car = car.replace(/(\u02bb|\u02bc|\u2018|\u2019|\u0060)/g, "\u0027");
 car = car.replace(/CHCH/g, "CCH");
 car = car.replace(/Chch/g, "Cch");
 car = car.replace(/chch/g, "cch");
 car = car.replace(/SSH/g, "S\u0027SH");
 car = car.replace(/Ssh/g, "S\u0027sh");
 car = car.replace(/ssh/g, "s\u0027sh");
 car = car.replace(/SHSH/g, "SSH");
 car = car.replace(/Shsh/g, "Ssh");
 car = car.replace(/shsh/g, "ssh");
		
 car = car.replace(/lo\u0027bat/g, "lo\u0027\u0027bat");
 car = car.replace(/mo\u0027jaz/g, "mo\u0027\u0027jaz");
 car = car.replace(/mo\u0027jiza/g, "mo\u0027\u0027jiza");
 car = car.replace(/mo\u0027tabar/g, "mo\u0027\u0027tabar");
 car = car.replace(/mo\u0027tad/g, "mo\u0027\u0027tad");
 car = car.replace(/mo\u0027tazila/g, "mo\u0027\u0027tazila");
 car = car.replace(/mo\u0027tariza/g, "mo\u0027\u0027tariza");
 car = car.replace(/Lo\u0027bat/g, "Lo\u0027\u0027bat");
 car = car.replace(/Mo\u0027jaz/g, "Mo\u0027\u0027jaz");
 car = car.replace(/Mo\u0027jiza/g, "Mo\u0027\u0027jiza");
 car = car.replace(/Mo\u0027tabar/g, "Mo\u0027\u0027tabar");
 car = car.replace(/Mo\u0027tad/g, "Mo\u0027\u0027tad");
 car = car.replace(/Mo\u0027tazila/g, "Mo\u0027\u0027tazila");
 car = car.replace(/Mo\u0027tariza/g, "Mo\u0027\u0027tariza");
 car = car.replace(/LO\u0027BAT/g, "LO\u0027\u0027BAT");
 car = car.replace(/MO\u0027JAZ/g, "MO\u0027\u0027JAZ");
 car = car.replace(/MO\u0027JIZA/g, "MO\u0027\u0027JIZA");
 car = car.replace(/MO\u0027TABAR/g, "MO\u0027\u0027TABAR");
 car = car.replace(/MO\u0027TAD/g, "MO\u0027\u0027TAD");
 car = car.replace(/MO\u0027TAZILA/g, "MO\u0027\u0027TAZILA");
 car = car.replace(/MO\u0027TARIZA/g, "MO\u0027\u0027TARIZA");
 car = car.replace(/(O|G|o|g)\u0027/g, "$1\u0307");
 car = car.replace(/\u0027/g, "\u02bc");
 car = car.normalize('NFC');
document.transcription.text2.value = car;
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
