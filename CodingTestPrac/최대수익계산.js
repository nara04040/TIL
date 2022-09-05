/**
 * 최대수익계산하기
 *  - n기간 동안의 주식가격 변화를 기준으로 낼수있는 가장 큰 수익 계산하기
 *
 * 문제
 *  - 주어진 기간동안 주식을 매매를하여 얻는 이익을 계산
 *  기간중 가장 쌀때 주식을 구입, 가장 비쌀때 주식을 판매
 */

/**
 * 풀이접근
 * input = [100,200,50,30,150,250];
 * 두가지 변수 초기화
 * a. maxProfit = 0
 * b. minBuyPrice = input[0]
 *
 * input 배열에 반복문 실행
 * a. 매회의 반복마다 조건문 걸기
 * b. 두가지 결정
 *      1. 현재의 가격이 minBuyPrice보다 클때
 *          -> 수익발생, maxProfit변수값 업데이트
 *      2. 현재의 가격이 minBuyPrice보다 작을때
 *          -> 수익발생(x), minBuyPrice변수값 업데이트
 *  -반복문 종료후, maxProfit값 리턴
 */

function maxProfit(prices) {
  let maxProfit = 0;
  let minBuyPrice = prices[0];

  for (let price of prices) {
    if (minBuyPrice < price) {
      maxProfit = Math.max(maxProfit, price - minBuyPrice);
    } else {
      minBuyPrice = price;
    }
  }
  return maxProfit;
}
const test1 = [10, 20, 50, 100, 80, 250];
console.log(maxProfit(test1));
