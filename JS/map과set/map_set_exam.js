// 1. 배열에서 중복 요소 제거하기

// function unique(arr) {
//     console.log(Array.from(new Set(arr)))
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// console.log(unique(values))
// unique(values)

/**
 * new Set()로 set만들어주고
 * Array.from() 으로 배열로 만들어준다
 * 으리고 Set() 안에 argument로 길 열어주고
 * unique(values)로 parameter로 values를 전달해주면 된다
 */

// =================================================================

// 2. 애너그램 걸러내기
// nap - pan
// ear - are - era
// cheaters - hectares - teachers

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean() {
    let map = new Map();

    for (let wordArr of arr) {
        let sorted = wordArr.toLocaleLowerCase().split('').sort().join('');
        map.set(sorted, wordArr);
    }
    return Array.from(map.values());
}

console.log(aclean(arr))