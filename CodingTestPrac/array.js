// set() 을 써서 중복 없애기

const nums = [1, 2, 3, 4, 5, 6, 6, 7, 2, 2, 8, 9];
const strArr = ['윤정욱', '문수빈', '유한나라', '도연희', '황지원'];

const uniqueNums = [...new Set(nums)];
console.log(uniqueNums)