var car;

function cyrlat () {
car = document.transcription.text1.value;
car = car.normalize('NFD');
car = car.replace(/\u200c/g, "");
car = car.replace(/\u0327/g, "\u0323");
car = car.replace(/(N|n)\u0304/g, "$1\u0303");
car = car.normalize('NFC');
document.transcription.text2.value = car;
}
function latcyr () {
car = document.transcription.text2.value;
car = car.normalize('NFD');
car = car.replace(/\u0323/g, "\u0327");
car = car.replace(/(N|n)\u0303/g, "$1\u0304");
car = car.normalize('NFC');
document.transcription.text1.value = car;
}

function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
