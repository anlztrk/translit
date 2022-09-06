var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/b/g, "ᴃ");
  car = car.replace(/3'/g, "Ǯ");
  car = car.replace(/6'/g, "Ъ");
  car = car.replace(/7'/g, "ʡ");
    
  car = car.replace(/2/g, "Ƨ");
  car = car.replace(/3/g, "Ʒ");
  car = car.replace(/5/g, "Ҕ");
  car = car.replace(/6/g, "Ь");
  car = car.replace(/7/g, "Ɂ");
  car = car.replace(/8/g, "Ǯ");
  car = car.replace(/9/g, "ꟼ");
  
  car = car.replace(/(a|ᴃ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ɂ|ǯ|ъ|զ)Ƨ/g, "$1ƨ");
  car = car.replace(/(a|ᴃ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ɂ|ǯ|ъ|զ)Ʒ/g, "$1ʒ");
  car = car.replace(/(a|ᴃ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ɂ|ǯ|ъ|զ)Ҕ/g, "$1ҕ");
  car = car.replace(/(a|ᴃ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ɂ|ǯ|ъ|զ)Ь/g, "$1ь");
  car = car.replace(/(a|ᴃ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ɂ|ǯ|ъ|զ)Ɂ/g, "$1ɂ");
  car = car.replace(/(a|ᴃ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ɂ|ǯ|ъ|զ)Ǯ/g, "$1ǯ");
  car = car.replace(/(a|ᴃ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ɂ|ǯ|ъ|զ)Ъ/g, "$1ъ");
  car = car.replace(/(a|ᴃ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ɂ|ǯ|ъ|զ)ꟼ/g, "$1զ");
  
  car = car.replace(/(a|ᴃ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ɂ|ǯ|ъ|զ)(\u0020|\u002c|\u003b|\u0020\u002c|\u0020\u003b)Ƨ/g, "$1$2ƨ");
  car = car.replace(/(a|ᴃ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ɂ|ǯ|ъ|զ)(\u0020|\u002c|\u003b|\u0020\u002c|\u0020\u003b)Ʒ/g, "$1$2ʒ");
  car = car.replace(/(a|ᴃ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ɂ|ǯ|ъ|զ)(\u0020|\u002c|\u003b|\u0020\u002c|\u0020\u003b)Ҕ/g, "$1$2ҕ");
  car = car.replace(/(a|ᴃ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ɂ|ǯ|ъ|զ)(\u0020|\u002c|\u003b|\u0020\u002c|\u0020\u003b)Ь/g, "$1$2ь");
  car = car.replace(/(a|ᴃ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ɂ|ǯ|ъ|զ)(\u0020|\u002c|\u003b|\u0020\u002c|\u0020\u003b)Ɂ/g, "$1$2ɂ");
  car = car.replace(/(a|ᴃ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ɂ|ǯ|ъ|զ)(\u0020|\u002c|\u003b|\u0020\u002c|\u0020\u003b)Ǯ/g, "$1$2ǯ");
  car = car.replace(/(a|ᴃ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ɂ|ǯ|ъ|զ)(\u0020|\u002c|\u003b|\u0020\u002c|\u0020\u003b)Ъ/g, "$1$2ъ");
  car = car.replace(/(a|ᴃ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ɂ|ǯ|ъ|զ)(\u0020|\u002c|\u003b|\u0020\u002c|\u0020\u003b)ꟼ/g, "$1$2զ");
document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
