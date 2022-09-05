/**
 * 팰린드롬 / 회문 (Palindrome)
 * 앞으로 & 뒤로 읽었을때 같은 문자열  (level, eye , hannah)
 *
 * 문제
 *  - 입력받은 문자열이 팰린드롬인지 판별하는 알고리즘
 *
 * level -> true
 * david -> false
 */

// 1. 추가 문자열 활용
// function checkPalindrome(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed === str;
// }
// console.log(checkPalindrome("abba"));
// console.log(checkPalindrome("david"));
// console.log(checkPalindrome("eye"));

// 2. tow pointer 활용
function checkPalindrome(str) {
  const len = str.length;
  const middle = Math.floor(len / 2);
  for (let i = 0; i < middle; i++) {
    if (str.charAt(i) !== str.charAt(len - 1 - i)) {
      return false;
    }
  }
  return true;
}

console.log(checkPalindrome("abba"));
console.log(checkPalindrome("str"));
console.log(checkPalindrome("우영우"));
