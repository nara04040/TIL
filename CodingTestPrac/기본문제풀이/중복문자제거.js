// 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성.
// 제거도니 문자열의 각 문자는 원래 문자열의 순서를 유지

// function solution(s) {
//   let answer = "";
//   //   console.log(s.indexOf("k", 1));
//   for (let i = 0; i < s.length; i++) {
//     console.log(s[i], i, s.indexOf(s[i]));
//     if (s.indexOf(s[i]) === i) answer += s[i];
//   }
//   return answer;
// }
// console.log(solution("kesesektekkeesdvck"));

// 위코드 설명
/**
 * indexOf를 통해 찾는법
 * 1. for문을 s의 길이만큼 순회함
 * 2. s[i] 는 s의 0,1,2,3,...의 인자를 반환, s[0] = 'k', s[1] = 'e' ...이렇게
 * 3. i 는 s의 index번호를 반환 0,1,2,3,4,5,6...
 * 4. s.indexOf(s[i]) 는 s의 s[i]에 해당하는 index를 도출 , 하지만 중복되는 글자가 나올때 해당하는 글자의 index를 반환
 *  -> k 는 0번째 , 그리고 indexOf(s[0])의 값인 0을 도출
 *  but 하지만 , 바로 뒤에 k가 나올때는 index 넘버는 1번이겠지만, indexOf(s[0])이기에 0이 도출

 */

// ====================================================================================

function solution(s) {
  let answer = 0;
  let pos = s.indexOf("k");

  while (pos !== -1) {
    answer++;
    pos = s.indexOf("k", pos + 1);
  }

  return answer;
}
console.log(solution("ksekkset"));
