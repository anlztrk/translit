
var car;
function geolat () {
car = document.transcription.text1.value;
  car = car.replace(/(B|b|C|c|D|d|G|g|H|h|J|j|K|k|L|l|M|m|P|p|R|r|S|s|T|t|W|w|Z|z)/g, "$1ъ");
  car = car.replace(/(B|b|C|c|D|d|G|g|H|h|J|j|K|k|L|l|M|m|P|p|R|r|S|s|T|t|W|w|Z|z)ъ(A|a)/g, "$1");
  car = car.replace(/(B|b|C|c|D|d|G|g|H|h|J|j|K|k|L|l|M|m|P|p|R|r|S|s|T|t|W|w|Z|z)ъ(E|e)/g, "$1е");
  car = car.replace(/(B|b|C|c|D|d|G|g|H|h|J|j|K|k|L|l|M|m|P|p|R|r|S|s|T|t|W|w|Z|z)ъ(I|i)/g, "$1и");
  car = car.replace(/(B|b|C|c|D|d|G|g|H|h|J|j|K|k|L|l|M|m|P|p|R|r|S|s|T|t|W|w|Z|z)ъ(O|o)/g, "$1о");
  car = car.replace(/(B|b|C|c|D|d|G|g|H|h|J|j|K|k|L|l|M|m|P|p|R|r|S|s|T|t|W|w|Z|z)ъ(U|u)/g, "$1у");
  car = car.replace(/(B|b|C|c|D|d|G|g|H|h|J|j|K|k|L|l|M|m|P|p|R|r|S|s|T|t|W|w|Z|z)ъ(Y|y)/g, "$1ы");
  
  car = car.replace(/(B|b)/g, "б");
  car = car.replace(/(C|c)/g, "ц");
  car = car.replace(/(D|d)/g, "д");
  car = car.replace(/(G|g)/g, "г");
  car = car.replace(/(H|h)/g, "х");
  car = car.replace(/(J|j)/g, "й");
  car = car.replace(/(K|k)/g, "к");
  car = car.replace(/(L|l)/g, "л");
  car = car.replace(/(M|m)/g, "м");
  car = car.replace(/(P|p)/g, "п");
  car = car.replace(/(R|r)/g, "р");
  car = car.replace(/(S|s)/g, "с");
  car = car.replace(/(T|t)/g, "т");
  car = car.replace(/(W|w)/g, "ў");
  car = car.replace(/(Z|z)/g, "з");

  car = car.replace(/(A|a)/g, "ь");
  car = car.replace(/(E|e)/g, "ье");
  car = car.replace(/(I|i)/g, "ьи");
  car = car.replace(/(O|o)/g, "ьо");
  car = car.replace(/(U|u)/g, "ьу");
  car = car.replace(/(Y|y)/g, "ьы");
document.transcription.text2.value=car;
}
function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}

function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}