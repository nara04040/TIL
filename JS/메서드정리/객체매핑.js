let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let userMapped = users.map((user) => ({
  // () 괄호에 주목하자 , 이게 없으면 코드가 생성이 안된다.
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));
console.log(userMapped);
console.log(userMapped[0].id);
console.log(userMapped[0].fullName);
