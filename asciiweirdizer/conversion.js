//  copyright lexilogos.com
var car;
function latcyr () {
car = document.transcription.text2.value;
car = car.replace(/ζ/g, "\u003C");
car = car.replace(/η/g, "\u003E");
car = car.replace(/ξ/g, "\u002C");
car = car.replace(/σ/g, "\u003B");
car = car.replace(/φ/g, "\u0022");
car = car.replace(/θ/g, "\u002F");
car = car.replace(/γ/g, "\u005C");
car = car.replace(/δ/g, "\u0024");
car = car.replace(/π/g, "\u007B");
car = car.replace(/α/g, "\u007D");
car = car.replace(/ι/g, "\u0023");
car = car.replace(/ο/g, "\u002D");
car = car.replace(/ε/g, "\u003F");
car = car.replace(/κ/g, "\u003A");
car = car.replace(/ω/g, "\u003D");
car = car.replace(/ψ/g, "\u0025");
car = car.replace(/τ/g, "\u0028");
car = car.replace(/ν/g, "\u0029");
car = car.replace(/β/g, "\u005B");
car = car.replace(/χ/g, "\u005D");
document.transcription.text1.value=car;
}
function cyrlat () {
car = document.transcription.text1.value;
car = car.replace(/\u003C/g, "ζ");
car = car.replace(/\u003E/g, "η");
car = car.replace(/\u002C/g, "ξ");
car = car.replace(/\u003B/g, "σ");
car = car.replace(/\u0022/g, "φ");
car = car.replace(/\u002F/g, "θ");
car = car.replace(/\u005C/g, "γ");
car = car.replace(/\u0024/g, "δ");
car = car.replace(/\u007B/g, "π");
car = car.replace(/\u007D/g, "α");
car = car.replace(/\u0023/g, "ι");
car = car.replace(/\u002D/g, "ο");
car = car.replace(/\u003F/g, "ε");
car = car.replace(/\u003A/g, "κ");
car = car.replace(/\u003D/g, "ω");
car = car.replace(/\u0025/g, "ψ");
car = car.replace(/\u0028/g, "τ");
car = car.replace(/\u0029/g, "ν");
car = car.replace(/\u005B/g, "β");
car = car.replace(/\u005D/g, "χ");
document.transcription.text2.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}