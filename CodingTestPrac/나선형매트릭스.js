/**
 * 나선형 매트릭스 문제
 *
 * 2차원 배열 순회문제
 *  m X n사이즈 매트릭스 엘레멘트를 나선형 모양으로 순회
 *
 * 접근방법
 * L ,R ,T B로 나눠주고
 * L , T = 0
 * R = m[0].length-1
 * B = m.length-1
 *
 * 이후 while loop
 *  topleft -> R
 *  topright -> B
 *  Bottomright -> L
 *  Bottomleft -> T
 *
 *  base
 *  left <= right and top <= bottom
 */

/**
 * 문제 접근 방법
 *
 *  1. 4곳의 코너 포인터를 각각 변수에 저장 & 초기화
 *  2. TopLeft 코너에서 시작, 첫번째 row 왼쪽 -> 오른쪽으로 순회.
 *      순회가 끝나면 Top포인터 +1 증가
 *  3. Right Top 코너에서 시작, 맨 우측위 -> 아래로 순회. 순회 끝나면 Right포인트 -1감소
 *  4. Right Bottom 코너에서 시작 맨우측오른쪽 -> 왼쪽으로 순회. 순회후 Bottom 포인터 -1감소
 *  5. Left 포인터에서 시작, 왼쪽 -> 오른쪽으로 순회 left포인트 +1
 */

const test1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const test2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

function spiralMatrix(matrix) {
  const result = [];
  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
    }
  }
  return result;
}
console.log(spiralMatrix(test1));
console.log(spiralMatrix(test2));
