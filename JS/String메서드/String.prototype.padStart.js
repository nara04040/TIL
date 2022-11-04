// padStart() 메서드는 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환합니다. 채워넣기는 대상 문자열의 시작(좌측)부터 적용됩니다.

// str.padStart(targetLength [, padString])
const str = "5";

console.log(str.padStart(2, "0"));

const fullNum = "2034399002125581";
const last4Digits = fullNum.slice(-4);
const maskedNum = last4Digits.padStart(fullNum.length, "*");
console.log(maskedNum);
// 요구한 전화번호나 주민등록번호같은 문자열을 만들 때 사용하면 좋을듯하다.
