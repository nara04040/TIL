// 문자열이 정규식과 매치되는 부분을 검색한다.
// str.match(Regexp)
// Regexp : 정규표현식

// var str = "For more information, see Chapter 3.4.5.1";

// var re = /see (chapter \d+(\.\d)*)/i;
// var found = str.match(re);

// console.log(found);

var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);

console.log(matches_array);
