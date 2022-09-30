// 학급 회장을 뽑는데 후보로 기호 A, B, C, D, E 후보가 등록을 했습니다.
// 투표용지에는 반 학생들이 자기가 선택한 후보의 기호(알파벳)가 쓰여져 있으며 선생님은 그 기호를 발표하고 있습니다.
// 선생님의 발표가 끝난 후 어떤 기호의 후보가 학급 회장이 되었는지 출력하는 프로그램을 작 성하세요. 반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정합니다.
// ▣ 입력설명
// 첫 줄에는 반 학생수 N(5<=N<=50)이 주어집니다.
// 두 번째 줄에 N개의 투표용지에 쓰여져 있던 각 후보의 기호가 선생님이 발표한 순서대로 문자열로 입력됩니다.
// ▣ 출력설명
// 학급 회장으로 선택된 기호를 출력합니다.
// ▣ 입력예제 1
// 15
// BACBACCACCBDEDE
// ▣ 출력예제 1
// C

function solution(s) {
  let answer;
  let sH = new Map();
  for (let x of s) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  // Number.MIN_SAFE_INTEGER 의 정확한 정의 : 안전한 최소 정수값을 나타낸다
  // js가 나타낼수있는 가장 안전한 정수중 최소값을 보여줌으로 == 안전한 가장 큰수를 출력해낸다.
  for (let [key, val] of sH) {
    // sH는 map으로 만들어져서 A : ?, B: ?... 이런식으로 만들어져있을것,
    // 분배할당으로 [key,value]로 하여서 담아준 다음
    if (val > max) {
      // value값이 max보다크다느것은 즉, 배열중 가장 많이 나온값이라는뜻
      // 고로 최댓값이되므로 max = value로 꿔주고
      max = val;
      // answer값 알파벳(key)값으로 도출되게 만들어준다.
      answer = key;
    }
  }
  return answer;
}
console.log(solution("BACBACCACCBDEDE"));
