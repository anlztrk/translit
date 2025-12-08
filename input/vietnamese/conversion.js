
var car;
function cyrlat () {
car = document.transcription.text1.value;
  car = car.replace(/İ/g, "I");
  car = car.replace(/ı/g, "i");
  car = car.replace(/Ä/g, "Ă");
  car = car.replace(/Æ/g, "Ă");
  car = car.replace(/Ö/g, "Ơ");
  car = car.replace(/Ö/g, "Ơ");
  car = car.replace(/Ü/g, "Ư");
  car = car.replace(/Ə/g, "Ê");
  car = car.replace(/Ş/g, "\u002b");
  car = car.replace(/ä/g, "ă");
  car = car.replace(/æ/g, "ă");
  car = car.replace(/ö/g, "ơ");
  car = car.replace(/ö/g, "ơ");
  car = car.replace(/ü/g, "ư");
  car = car.replace(/ə/g, "ê");
  car = car.replace(/ş/g, "\u002b");

  car = car.replace(/A\u002b/g, "Ă");
  car = car.replace(/Ă\u002b/g, "Â");
  car = car.replace(/Â\u002b/g, "A");
  car = car.replace(/a\u002b/g, "ă");
  car = car.replace(/ă\u002b/g, "â");
  car = car.replace(/â\u002b/g, "a");
  car = car.replace(/D\u002b/g, "Đ");
  car = car.replace(/Đ\u002b/g, "D");
  car = car.replace(/d\u002b/g, "đ");
  car = car.replace(/đ\u002b/g, "d");
  car = car.replace(/E\u002b/g, "Ê");
  car = car.replace(/Ê\u002b/g, "E");
  car = car.replace(/e\u002b/g, "ê");
  car = car.replace(/ê\u002b/g, "e");
  car = car.replace(/O\u002b/g, "Ô");
  car = car.replace(/Ô\u002b/g, "Ơ");
  car = car.replace(/Ơ\u002b/g, "O");
  car = car.replace(/o\u002b/g, "ô");
  car = car.replace(/ô\u002b/g, "ơ");
  car = car.replace(/ơ\u002b/g, "o");
  car = car.replace(/U\u002b/g, "Ư");
  car = car.replace(/Ư\u002b/g, "U");
  car = car.replace(/u\u002b/g, "ư");
  car = car.replace(/ư\u002b/g, "u");
  
  car = car.replace(/Á\u002b/g, "Ắ");
  car = car.replace(/Ắ\u002b/g, "Ấ");
  car = car.replace(/Ấ\u002b/g, "Á");
  car = car.replace(/á\u002b/g, "ắ");
  car = car.replace(/ắ\u002b/g, "ấ");
  car = car.replace(/ấ\u002b/g, "á");
  car = car.replace(/É\u002b/g, "Ế");
  car = car.replace(/Ế\u002b/g, "É");
  car = car.replace(/é\u002b/g, "ế");
  car = car.replace(/ế\u002b/g, "é");
  car = car.replace(/Ó\u002b/g, "Ố");
  car = car.replace(/Ố\u002b/g, "Ớ");
  car = car.replace(/Ớ\u002b/g, "Ó");
  car = car.replace(/ó\u002b/g, "ố");
  car = car.replace(/ố\u002b/g, "ớ");
  car = car.replace(/ớ\u002b/g, "ó");
  car = car.replace(/Ú\u002b/g, "Ứ");
  car = car.replace(/Ứ\u002b/g, "Ú");
  car = car.replace(/ú\u002b/g, "ứ");
  car = car.replace(/ứ\u002b/g, "ú");
  
  car = car.replace(/À\u002b/g, "Ằ");
  car = car.replace(/Ằ\u002b/g, "Ầ");
  car = car.replace(/Ầ\u002b/g, "À");
  car = car.replace(/à\u002b/g, "ằ");
  car = car.replace(/ằ\u002b/g, "ầ");
  car = car.replace(/ầ\u002b/g, "à");
  car = car.replace(/È\u002b/g, "Ề");
  car = car.replace(/Ề\u002b/g, "È");
  car = car.replace(/è\u002b/g, "ề");
  car = car.replace(/ề\u002b/g, "è");
  car = car.replace(/Ò\u002b/g, "Ồ");
  car = car.replace(/Ồ\u002b/g, "Ờ");
  car = car.replace(/Ờ\u002b/g, "Ò");
  car = car.replace(/ò\u002b/g, "ồ");
  car = car.replace(/ồ\u002b/g, "ờ");
  car = car.replace(/ờ\u002b/g, "ò");
  car = car.replace(/Ù\u002b/g, "Ừ");
  car = car.replace(/Ừ\u002b/g, "Ù");
  car = car.replace(/ù\u002b/g, "ừ");
  car = car.replace(/ừ\u002b/g, "ù");
  
  car = car.replace(/Ả\u002b/g, "Ẳ");
  car = car.replace(/Ẳ\u002b/g, "Ẩ");
  car = car.replace(/Ẩ\u002b/g, "Ả");
  car = car.replace(/ả\u002b/g, "ẳ");
  car = car.replace(/ẳ\u002b/g, "ẩ");
  car = car.replace(/ẩ\u002b/g, "ả");
  car = car.replace(/Ẻ\u002b/g, "Ể");
  car = car.replace(/Ể\u002b/g, "Ẻ");
  car = car.replace(/ẻ\u002b/g, "ể");
  car = car.replace(/ể\u002b/g, "ẻ");
  car = car.replace(/Ỏ\u002b/g, "Ổ");
  car = car.replace(/Ổ\u002b/g, "Ở");
  car = car.replace(/Ở\u002b/g, "Ỏ");
  car = car.replace(/ỏ\u002b/g, "ổ");
  car = car.replace(/ổ\u002b/g, "ở");
  car = car.replace(/ở\u002b/g, "ỏ");
  car = car.replace(/Ủ\u002b/g, "Ử");
  car = car.replace(/Ử\u002b/g, "Ủ");
  car = car.replace(/ủ\u002b/g, "ử");
  car = car.replace(/ử\u002b/g, "ủ");
  
  car = car.replace(/Ã\u002b/g, "Ẵ");
  car = car.replace(/Ẵ\u002b/g, "Ẫ");
  car = car.replace(/Ẫ\u002b/g, "Ã");
  car = car.replace(/ã\u002b/g, "ẵ");
  car = car.replace(/ẵ\u002b/g, "ẫ");
  car = car.replace(/ẫ\u002b/g, "ã");
  car = car.replace(/Ẽ\u002b/g, "Ễ");
  car = car.replace(/Ễ\u002b/g, "Ẽ");
  car = car.replace(/ẽ\u002b/g, "ễ");
  car = car.replace(/ễ\u002b/g, "ẽ");
  car = car.replace(/Õ\u002b/g, "Ỗ");
  car = car.replace(/Ỗ\u002b/g, "Ỡ");
  car = car.replace(/Ỡ\u002b/g, "Õ");
  car = car.replace(/õ\u002b/g, "ỗ");
  car = car.replace(/ỗ\u002b/g, "ỡ");
  car = car.replace(/ỡ\u002b/g, "õ");
  car = car.replace(/Ũ\u002b/g, "Ữ");
  car = car.replace(/Ữ\u002b/g, "Ũ");
  car = car.replace(/ũ\u002b/g, "ữ");
  car = car.replace(/ữ\u002b/g, "ũ");
  
  car = car.replace(/Ạ\u002b/g, "Ặ");
  car = car.replace(/Ặ\u002b/g, "Ậ");
  car = car.replace(/Ậ\u002b/g, "Ạ");
  car = car.replace(/ạ\u002b/g, "ặ");
  car = car.replace(/ặ\u002b/g, "ậ");
  car = car.replace(/ậ\u002b/g, "ạ");
  car = car.replace(/Ẹ\u002b/g, "Ệ");
  car = car.replace(/Ệ\u002b/g, "Ẹ");
  car = car.replace(/ẹ\u002b/g, "ệ");
  car = car.replace(/ệ\u002b/g, "ẹ");
  car = car.replace(/Ọ\u002b/g, "Ộ");
  car = car.replace(/Ộ\u002b/g, "Ợ");
  car = car.replace(/Ợ\u002b/g, "Ọ");
  car = car.replace(/ọ\u002b/g, "ộ");
  car = car.replace(/ộ\u002b/g, "ợ");
  car = car.replace(/ợ\u002b/g, "ọ");
  car = car.replace(/Ụ\u002b/g, "Ự");
  car = car.replace(/Ự\u002b/g, "Ụ");
  car = car.replace(/ụ\u002b/g, "ự");
  car = car.replace(/ự\u002b/g, "ụ");  
  
  car = car.replace(/D\u003c/g, "Đ");
  car = car.replace(/Đ\u003c/g, "D");
  car = car.replace(/d\u003c/g, "đ");
  car = car.replace(/đ\u003c/g, "d");
  
  car = car.replace(/A\u003c/g, "Á");
  car = car.replace(/Á\u003c/g, "À");
  car = car.replace(/À\u003c/g, "Ả");
  car = car.replace(/Ả\u003c/g, "Ã");
  car = car.replace(/Ã\u003c/g, "Ạ");
  car = car.replace(/Ạ\u003c/g, "A");
  
  car = car.replace(/Ă\u003c/g, "Ắ");
  car = car.replace(/Ắ\u003c/g, "Ằ");
  car = car.replace(/Ằ\u003c/g, "Ẳ");
  car = car.replace(/Ẳ\u003c/g, "Ẵ");
  car = car.replace(/Ẵ\u003c/g, "Ặ");
  car = car.replace(/Ặ\u003c/g, "Ă");
  
  car = car.replace(/Â\u003c/g, "Ấ");
  car = car.replace(/Ấ\u003c/g, "Ầ");
  car = car.replace(/Ầ\u003c/g, "Ẩ");
  car = car.replace(/Ẩ\u003c/g, "Ẫ");
  car = car.replace(/Ẫ\u003c/g, "Ậ");
  car = car.replace(/Ậ\u003c/g, "Â");
  
  car = car.replace(/E\u003c/g, "É");
  car = car.replace(/É\u003c/g, "È");
  car = car.replace(/È\u003c/g, "Ẻ");
  car = car.replace(/Ẻ\u003c/g, "Ẽ");
  car = car.replace(/Ẽ\u003c/g, "Ẹ");
  car = car.replace(/Ẹ\u003c/g, "E");
  
  car = car.replace(/Ê\u003c/g, "Ế");
  car = car.replace(/Ế\u003c/g, "Ề");
  car = car.replace(/Ề\u003c/g, "Ể");
  car = car.replace(/Ể\u003c/g, "Ễ");
  car = car.replace(/Ễ\u003c/g, "Ệ");
  car = car.replace(/Ệ\u003c/g, "Ê");
  
  car = car.replace(/I\u003c/g, "Í");
  car = car.replace(/Í\u003c/g, "Ì");
  car = car.replace(/Ì\u003c/g, "Ỉ");
  car = car.replace(/Ỉ\u003c/g, "Ĩ");
  car = car.replace(/Ĩ\u003c/g, "Ị");
  car = car.replace(/Ị\u003c/g, "I");
  
  car = car.replace(/O\u003c/g, "Ó");
  car = car.replace(/Ó\u003c/g, "Ò");
  car = car.replace(/Ò\u003c/g, "Ỏ");
  car = car.replace(/Ỏ\u003c/g, "Õ");
  car = car.replace(/Õ\u003c/g, "Ọ");
  car = car.replace(/Ọ\u003c/g, "O");
  
  car = car.replace(/Ô\u003c/g, "Ố");
  car = car.replace(/Ố\u003c/g, "Ồ");
  car = car.replace(/Ồ\u003c/g, "Ổ");
  car = car.replace(/Ổ\u003c/g, "Ỗ");
  car = car.replace(/Ỗ\u003c/g, "Ộ");
  car = car.replace(/Ộ\u003c/g, "Ô");
  
  car = car.replace(/Ơ\u003c/g, "Ớ");
  car = car.replace(/Ớ\u003c/g, "Ờ");
  car = car.replace(/Ờ\u003c/g, "Ở");
  car = car.replace(/Ở\u003c/g, "Ỡ");
  car = car.replace(/Ỡ\u003c/g, "Ợ");
  car = car.replace(/Ợ\u003c/g, "Ơ");
  
  car = car.replace(/U\u003c/g, "Ú");
  car = car.replace(/Ú\u003c/g, "Ù");
  car = car.replace(/Ù\u003c/g, "Ủ");
  car = car.replace(/Ủ\u003c/g, "Ũ");
  car = car.replace(/Ũ\u003c/g, "Ụ");
  car = car.replace(/Ụ\u003c/g, "U");
  
  car = car.replace(/Ư\u003c/g, "Ứ");
  car = car.replace(/Ứ\u003c/g, "Ừ");
  car = car.replace(/Ừ\u003c/g, "Ử");
  car = car.replace(/Ử\u003c/g, "Ữ");
  car = car.replace(/Ữ\u003c/g, "Ự");
  car = car.replace(/Ự\u003c/g, "Ư");
  
  car = car.replace(/Y\u003c/g, "Ý");
  car = car.replace(/Ý\u003c/g, "Ỳ");
  car = car.replace(/Ỳ\u003c/g, "Ỷ");
  car = car.replace(/Ỷ\u003c/g, "Ỹ");
  car = car.replace(/Ỹ\u003c/g, "Ỵ");
  car = car.replace(/Ỵ\u003c/g, "Y");
  
  car = car.replace(/a\u003c/g, "á");
  car = car.replace(/á\u003c/g, "à");
  car = car.replace(/à\u003c/g, "ả");
  car = car.replace(/ả\u003c/g, "ã");
  car = car.replace(/ã\u003c/g, "ạ");
  car = car.replace(/ạ\u003c/g, "a");
  
  car = car.replace(/ă\u003c/g, "ắ");
  car = car.replace(/ắ\u003c/g, "ằ");
  car = car.replace(/ằ\u003c/g, "ẳ");
  car = car.replace(/ẳ\u003c/g, "ẵ");
  car = car.replace(/ẵ\u003c/g, "ặ");
  car = car.replace(/ặ\u003c/g, "ă");
  
  car = car.replace(/â\u003c/g, "ấ");
  car = car.replace(/ấ\u003c/g, "ầ");
  car = car.replace(/ầ\u003c/g, "ẩ");
  car = car.replace(/ẩ\u003c/g, "ẫ");
  car = car.replace(/ẫ\u003c/g, "ậ");
  car = car.replace(/ậ\u003c/g, "â");
  
  car = car.replace(/e\u003c/g, "é");
  car = car.replace(/é\u003c/g, "è");
  car = car.replace(/è\u003c/g, "ẻ");
  car = car.replace(/ẻ\u003c/g, "ẽ");
  car = car.replace(/ẽ\u003c/g, "ẹ");
  car = car.replace(/ẹ\u003c/g, "e");
  
  car = car.replace(/ê\u003c/g, "ế");
  car = car.replace(/ế\u003c/g, "ề");
  car = car.replace(/ề\u003c/g, "ể");
  car = car.replace(/ể\u003c/g, "ễ");
  car = car.replace(/ễ\u003c/g, "ệ");
  car = car.replace(/ệ\u003c/g, "ê");
  
  car = car.replace(/i\u003c/g, "í");
  car = car.replace(/í\u003c/g, "ì");
  car = car.replace(/ì\u003c/g, "ỉ");
  car = car.replace(/ỉ\u003c/g, "ĩ");
  car = car.replace(/ĩ\u003c/g, "ị");
  car = car.replace(/ị\u003c/g, "i");
  
  car = car.replace(/o\u003c/g, "ó");
  car = car.replace(/ó\u003c/g, "ò");
  car = car.replace(/ò\u003c/g, "ỏ");
  car = car.replace(/ỏ\u003c/g, "õ");
  car = car.replace(/õ\u003c/g, "ọ");
  car = car.replace(/ọ\u003c/g, "o");
  
  car = car.replace(/ô\u003c/g, "ố");
  car = car.replace(/ố\u003c/g, "ồ");
  car = car.replace(/ồ\u003c/g, "ổ");
  car = car.replace(/ổ\u003c/g, "ỗ");
  car = car.replace(/ỗ\u003c/g, "ộ");
  car = car.replace(/ộ\u003c/g, "ô");
  
  car = car.replace(/ơ\u003c/g, "ớ");
  car = car.replace(/ớ\u003c/g, "ờ");
  car = car.replace(/ờ\u003c/g, "ở");
  car = car.replace(/ở\u003c/g, "ỡ");
  car = car.replace(/ỡ\u003c/g, "ợ");
  car = car.replace(/ợ\u003c/g, "ơ");
  
  car = car.replace(/u\u003c/g, "ú");
  car = car.replace(/ú\u003c/g, "ù");
  car = car.replace(/ù\u003c/g, "ủ");
  car = car.replace(/ủ\u003c/g, "ũ");
  car = car.replace(/ũ\u003c/g, "ụ");
  car = car.replace(/ụ\u003c/g, "u");
  
  car = car.replace(/ư\u003c/g, "ứ");
  car = car.replace(/ứ\u003c/g, "ừ");
  car = car.replace(/ừ\u003c/g, "ử");
  car = car.replace(/ử\u003c/g, "ữ");
  car = car.replace(/ữ\u003c/g, "ự");
  car = car.replace(/ự\u003c/g, "ư");
  
  car = car.replace(/y\u003c/g, "ý");
  car = car.replace(/ý\u003c/g, "ỳ");
  car = car.replace(/ỳ\u003c/g, "ỷ");
  car = car.replace(/ỷ\u003c/g, "ỹ");
  car = car.replace(/ỹ\u003c/g, "ỵ");
  car = car.replace(/ỵ\u003c/g, "y");
  
  car = car.replace(/D\u002a/g, "Đ");
  car = car.replace(/Đ\u002a/g, "D");
  car = car.replace(/d\u002a/g, "đ");
  car = car.replace(/đ\u002a/g, "d");
  
  car = car.replace(/A\u002a/g, "Á");
  car = car.replace(/Á\u002a/g, "À");
  car = car.replace(/À\u002a/g, "Ả");
  car = car.replace(/Ả\u002a/g, "Ã");
  car = car.replace(/Ã\u002a/g, "Ạ");
  car = car.replace(/Ạ\u002a/g, "A");
  
  car = car.replace(/Ă\u002a/g, "Ắ");
  car = car.replace(/Ắ\u002a/g, "Ằ");
  car = car.replace(/Ằ\u002a/g, "Ẳ");
  car = car.replace(/Ẳ\u002a/g, "Ẵ");
  car = car.replace(/Ẵ\u002a/g, "Ặ");
  car = car.replace(/Ặ\u002a/g, "Ă");
  
  car = car.replace(/Â\u002a/g, "Ấ");
  car = car.replace(/Ấ\u002a/g, "Ầ");
  car = car.replace(/Ầ\u002a/g, "Ẩ");
  car = car.replace(/Ẩ\u002a/g, "Ẫ");
  car = car.replace(/Ẫ\u002a/g, "Ậ");
  car = car.replace(/Ậ\u002a/g, "Â");
  
  car = car.replace(/E\u002a/g, "É");
  car = car.replace(/É\u002a/g, "È");
  car = car.replace(/È\u002a/g, "Ẻ");
  car = car.replace(/Ẻ\u002a/g, "Ẽ");
  car = car.replace(/Ẽ\u002a/g, "Ẹ");
  car = car.replace(/Ẹ\u002a/g, "E");
  
  car = car.replace(/Ê\u002a/g, "Ế");
  car = car.replace(/Ế\u002a/g, "Ề");
  car = car.replace(/Ề\u002a/g, "Ể");
  car = car.replace(/Ể\u002a/g, "Ễ");
  car = car.replace(/Ễ\u002a/g, "Ệ");
  car = car.replace(/Ệ\u002a/g, "Ê");
  
  car = car.replace(/I\u002a/g, "Í");
  car = car.replace(/Í\u002a/g, "Ì");
  car = car.replace(/Ì\u002a/g, "Ỉ");
  car = car.replace(/Ỉ\u002a/g, "Ĩ");
  car = car.replace(/Ĩ\u002a/g, "Ị");
  car = car.replace(/Ị\u002a/g, "I");
  
  car = car.replace(/O\u002a/g, "Ó");
  car = car.replace(/Ó\u002a/g, "Ò");
  car = car.replace(/Ò\u002a/g, "Ỏ");
  car = car.replace(/Ỏ\u002a/g, "Õ");
  car = car.replace(/Õ\u002a/g, "Ọ");
  car = car.replace(/Ọ\u002a/g, "O");
  
  car = car.replace(/Ô\u002a/g, "Ố");
  car = car.replace(/Ố\u002a/g, "Ồ");
  car = car.replace(/Ồ\u002a/g, "Ổ");
  car = car.replace(/Ổ\u002a/g, "Ỗ");
  car = car.replace(/Ỗ\u002a/g, "Ộ");
  car = car.replace(/Ộ\u002a/g, "Ô");
  
  car = car.replace(/Ơ\u002a/g, "Ớ");
  car = car.replace(/Ớ\u002a/g, "Ờ");
  car = car.replace(/Ờ\u002a/g, "Ở");
  car = car.replace(/Ở\u002a/g, "Ỡ");
  car = car.replace(/Ỡ\u002a/g, "Ợ");
  car = car.replace(/Ợ\u002a/g, "Ơ");
  
  car = car.replace(/U\u002a/g, "Ú");
  car = car.replace(/Ú\u002a/g, "Ù");
  car = car.replace(/Ù\u002a/g, "Ủ");
  car = car.replace(/Ủ\u002a/g, "Ũ");
  car = car.replace(/Ũ\u002a/g, "Ụ");
  car = car.replace(/Ụ\u002a/g, "U");
  
  car = car.replace(/Ư\u002a/g, "Ứ");
  car = car.replace(/Ứ\u002a/g, "Ừ");
  car = car.replace(/Ừ\u002a/g, "Ử");
  car = car.replace(/Ử\u002a/g, "Ữ");
  car = car.replace(/Ữ\u002a/g, "Ự");
  car = car.replace(/Ự\u002a/g, "Ư");
  
  car = car.replace(/Y\u002a/g, "Ý");
  car = car.replace(/Ý\u002a/g, "Ỳ");
  car = car.replace(/Ỳ\u002a/g, "Ỷ");
  car = car.replace(/Ỷ\u002a/g, "Ỹ");
  car = car.replace(/Ỹ\u002a/g, "Ỵ");
  car = car.replace(/Ỵ\u002a/g, "Y");
  
  car = car.replace(/a\u002a/g, "á");
  car = car.replace(/á\u002a/g, "à");
  car = car.replace(/à\u002a/g, "ả");
  car = car.replace(/ả\u002a/g, "ã");
  car = car.replace(/ã\u002a/g, "ạ");
  car = car.replace(/ạ\u002a/g, "a");
  
  car = car.replace(/ă\u002a/g, "ắ");
  car = car.replace(/ắ\u002a/g, "ằ");
  car = car.replace(/ằ\u002a/g, "ẳ");
  car = car.replace(/ẳ\u002a/g, "ẵ");
  car = car.replace(/ẵ\u002a/g, "ặ");
  car = car.replace(/ặ\u002a/g, "ă");
  
  car = car.replace(/â\u002a/g, "ấ");
  car = car.replace(/ấ\u002a/g, "ầ");
  car = car.replace(/ầ\u002a/g, "ẩ");
  car = car.replace(/ẩ\u002a/g, "ẫ");
  car = car.replace(/ẫ\u002a/g, "ậ");
  car = car.replace(/ậ\u002a/g, "â");
  
  car = car.replace(/e\u002a/g, "é");
  car = car.replace(/é\u002a/g, "è");
  car = car.replace(/è\u002a/g, "ẻ");
  car = car.replace(/ẻ\u002a/g, "ẽ");
  car = car.replace(/ẽ\u002a/g, "ẹ");
  car = car.replace(/ẹ\u002a/g, "e");
  
  car = car.replace(/ê\u002a/g, "ế");
  car = car.replace(/ế\u002a/g, "ề");
  car = car.replace(/ề\u002a/g, "ể");
  car = car.replace(/ể\u002a/g, "ễ");
  car = car.replace(/ễ\u002a/g, "ệ");
  car = car.replace(/ệ\u002a/g, "ê");
  
  car = car.replace(/i\u002a/g, "í");
  car = car.replace(/í\u002a/g, "ì");
  car = car.replace(/ì\u002a/g, "ỉ");
  car = car.replace(/ỉ\u002a/g, "ĩ");
  car = car.replace(/ĩ\u002a/g, "ị");
  car = car.replace(/ị\u002a/g, "i");
  
  car = car.replace(/o\u002a/g, "ó");
  car = car.replace(/ó\u002a/g, "ò");
  car = car.replace(/ò\u002a/g, "ỏ");
  car = car.replace(/ỏ\u002a/g, "õ");
  car = car.replace(/õ\u002a/g, "ọ");
  car = car.replace(/ọ\u002a/g, "o");
  
  car = car.replace(/ô\u002a/g, "ố");
  car = car.replace(/ố\u002a/g, "ồ");
  car = car.replace(/ồ\u002a/g, "ổ");
  car = car.replace(/ổ\u002a/g, "ỗ");
  car = car.replace(/ỗ\u002a/g, "ộ");
  car = car.replace(/ộ\u002a/g, "ô");
  
  car = car.replace(/ơ\u002a/g, "ớ");
  car = car.replace(/ớ\u002a/g, "ờ");
  car = car.replace(/ờ\u002a/g, "ở");
  car = car.replace(/ở\u002a/g, "ỡ");
  car = car.replace(/ỡ\u002a/g, "ợ");
  car = car.replace(/ợ\u002a/g, "ơ");
  
  car = car.replace(/u\u002a/g, "ú");
  car = car.replace(/ú\u002a/g, "ù");
  car = car.replace(/ù\u002a/g, "ủ");
  car = car.replace(/ủ\u002a/g, "ũ");
  car = car.replace(/ũ\u002a/g, "ụ");
  car = car.replace(/ụ\u002a/g, "u");
  
  car = car.replace(/ư\u002a/g, "ứ");
  car = car.replace(/ứ\u002a/g, "ừ");
  car = car.replace(/ừ\u002a/g, "ử");
  car = car.replace(/ử\u002a/g, "ữ");
  car = car.replace(/ữ\u002a/g, "ự");
  car = car.replace(/ự\u002a/g, "ư");
  
  car = car.replace(/y\u002a/g, "ý");
  car = car.replace(/ý\u002a/g, "ỳ");
  car = car.replace(/ỳ\u002a/g, "ỷ");
  car = car.replace(/ỷ\u002a/g, "ỹ");
  car = car.replace(/ỹ\u002a/g, "ỵ");
  car = car.replace(/ỵ\u002a/g, "y");

  car = car.normalize('NFC');
document.transcription.text1.value=car;
}
function copy1()
{ navigator.clipboard.writeText(document.transcription.text1.value);
}
function copy2()
{ navigator.clipboard.writeText(document.transcription.text2.value);
}
