let arr = ["HTML", "JavaScript", "CSS"];

let sorter = copySorted(arr); // copySorted이걸 만들어라
console.log(sorter);
console.log(arr);
function copySorted(a) {
  return a.slice().sort();
}

/**
 * 1. sort는 원본배열을 건들이기때문에 slice()처리를해서 복사배열을 만든다면 정렬시켜준다.
 */
