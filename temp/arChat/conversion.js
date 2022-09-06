var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/b/g, "ʙ");
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
  
  car = car.replace(/(a|ʙ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ʔ|ǯ|ъ|զ)Ƨ/g, "$1ƨ");
  car = car.replace(/(a|ʙ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ʔ|ǯ|ъ|զ)Ʒ/g, "$1ʒ");
  car = car.replace(/(a|ʙ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ʔ|ǯ|ъ|զ)Ҕ/g, "$1ҕ");
  car = car.replace(/(a|ʙ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ʔ|ǯ|ъ|զ)Ь/g, "$1ь");
  car = car.replace(/(a|ʙ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ʔ|ǯ|ъ|զ)Ɂ/g, "$1ʔ");
  car = car.replace(/(a|ʙ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ʔ|ǯ|ъ|զ)Ǯ/g, "$1ǯ");
  car = car.replace(/(a|ʙ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ʔ|ǯ|ъ|զ)Ъ/g, "$1ъ");
  car = car.replace(/(a|ʙ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ʔ|ǯ|ъ|զ)ꟼ/g, "$1զ");
  
  car = car.replace(/(a|ʙ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ʔ|ǯ|ъ|զ)(\u0020|\u002c|\u003b|\u0020\u002c|\u0020\u003b)Ƨ/g, "$1$2ƨ");
  car = car.replace(/(a|ʙ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ʔ|ǯ|ъ|զ)(\u0020|\u002c|\u003b|\u0020\u002c|\u0020\u003b)Ʒ/g, "$1$2ʒ");
  car = car.replace(/(a|ʙ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ʔ|ǯ|ъ|զ)(\u0020|\u002c|\u003b|\u0020\u002c|\u0020\u003b)Ҕ/g, "$1$2ҕ");
  car = car.replace(/(a|ʙ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ʔ|ǯ|ъ|զ)(\u0020|\u002c|\u003b|\u0020\u002c|\u0020\u003b)Ь/g, "$1$2ь");
  car = car.replace(/(a|ʙ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ʔ|ǯ|ъ|զ)(\u0020|\u002c|\u003b|\u0020\u002c|\u0020\u003b)Ɂ/g, "$1$2ʔ");
  car = car.replace(/(a|ʙ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ʔ|ǯ|ъ|զ)(\u0020|\u002c|\u003b|\u0020\u002c|\u0020\u003b)Ǯ/g, "$1$2ǯ");
  car = car.replace(/(a|ʙ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ʔ|ǯ|ъ|զ)(\u0020|\u002c|\u003b|\u0020\u002c|\u0020\u003b)Ъ/g, "$1$2ъ");
  car = car.replace(/(a|ʙ|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|ƨ|ʒ|ҕ|ь|ʔ|ǯ|ъ|զ)(\u0020|\u002c|\u003b|\u0020\u002c|\u0020\u003b)ꟼ/g, "$1$2զ");
  
  car = car.replace(/\u0020(Ƨ|ƨ)\u0020/g, "\u00202\u0020");
  car = car.replace(/\u0020(Ʒ|ʒ)\u0020/g, "\u00203\u0020");
  car = car.replace(/\u0020(Ҕ|ҕ)\u0020/g, "\u00205\u0020");
  car = car.replace(/\u0020(Ь|ь)\u0020/g, "\u00206\u0020");
  car = car.replace(/\u0020(Ɂ|ʔ)\u0020/g, "\u00207\u0020");
  car = car.replace(/\u0020(ꟼ|զ)\u0020/g, "\u00209\u0020");
  
  car = car.replace(/(1|2|3|4|5|6|7|8|9|0)(Ƨ|ƨ)/g, "$1\2");
  car = car.replace(/(1|2|3|4|5|6|7|8|9|0)(Ʒ|ʒ)/g, "$1\3");
  car = car.replace(/(1|2|3|4|5|6|7|8|9|0)(Ҕ|ҕ)/g, "$1\5");
  car = car.replace(/(1|2|3|4|5|6|7|8|9|0)(Ь|ь)/g, "$1\6");
  car = car.replace(/(1|2|3|4|5|6|7|8|9|0)(Ɂ|ʔ)/g, "$1\7");
  car = car.replace(/(1|2|3|4|5|6|7|8|9|0)(ꟼ|զ)/g, "$1\9");
  
document.transcription.text1.value=car;
}
function copy1()
{ textRange=document.transcription.text1.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
function copy2()
{ textRange=document.transcription.text2.createTextRange();   textRange.execCommand("Copy");   textRange="";
}
