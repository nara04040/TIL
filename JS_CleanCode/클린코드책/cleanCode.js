// Bad Case

// Good Case

// 변수 Variables
// 의미있고 발음하기 쉬운 변수 이름을 사용해라

// Bad Case
const yyyymmstr = moment().format("YYYY/MM/DD");

// Good Case
const currentDate = moment().format("YYYY/MM/DD");

// 동일한 유형의 변수에 동일한 어휘를 사용하세요

// Bad Case
getUserInfo();
getClientData();
getCustomerRecord();

// Good Case
getUser();

// 검색가능한 이름을 사용하세요.
// 작성할 코드보다 읽을 코드가 더 많다. 고로 쉽고 검색이 가능하게 작성해야한다.
// 검색이 가능한 이름으로 만들어라

// Bad Case
setTimeout(blastOff, 86400000);

// Good Case
const MILLISECONDS_IN_A_DAY = 8640000;
setTimeout(blastOff, MILLISECONDS_IN_A_DAY);

// 의도를 나타내는 변수들을 사용하세요

// Bad Case
const address = "One Infinite Loop, Cupertino 95014";
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
saveCityZipCode(address.match(cityZipCodeRegex)[1], address.match(cityZipCodeRegex)[2]);

// Good Case
const address1 = "One Infinite Loop, Cupertino 95014";
const cityZipCodeRegex1 = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
const [, city, zipCode] = address.match(cityZipCodeRegex1) || [];
saveCityZipCode(city, zipCode);

// 자신만 알아보는 작명은 피해라

// Bad Case
const locations = ["서울", "인천", "수원"];
locations.forEach((l) => {
  doStuff();
  doSomeOtherStuff();
  // ...~~
  dispatch(l);
});

// Good Case
const locations1 = ["서울", "인천", "수원"];
locations1.forEach((location) => {
  doStuff();
  doSomeOtherStuff();
  // ...~~
  dispatch(location);
});

// 문맥상 필요없는 것들을 쓰지 마세요
// Bad Case
const Car1 = {
  carMake: "BMW",
  carModel: "M3",
  carColor: "파란색",
};

function paintCar(car) {
  Car1.carColor = "빨간색";
}
// Good Case
const Car = {
  carMake: "BMW",
  carModel: "M3",
  carColor: "파란색",
};
function paintCar(car) {
  Car.carColor = "빨간색";
}

// 기본 매개변수가 short circuiting 트릭이나 조건문 보다 깔끔합니다.
//  종종 short circuiting 트릭보다 깔끔합니다. 매개변수가 undefined일때만 적용된다.
// '', "", false, null, 0 , NaN 등 falsy한 값들이 기본 매개변수가 적용되지 않는다.
