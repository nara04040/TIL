// function solution(s, t) {
//     let answer = 0;
//     for (let x of s) {
//       if (x === t) answer++;
//     }

//     return answer;
//   }

//   let str = "computerpogramming";
//   console.log(solution(str.toUpperCase(), "C"));

// ============================================================
// function solution(s, t) {
//   let answer = s.split(t).length;
//   console.log(answer);
//   return answer;
// }

// let str = "computerpogramming";
// console.log(solution(str.toUpperCase(), "R"));

//  ==============================================================
function solution(s, t) {
  let answer = s.split(t).length;

  return answer - 1;
}

let str = "computerpogramming";
console.log(solution(str.toUpperCase(), "C"));
