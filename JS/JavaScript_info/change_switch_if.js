// "switch"문을 "if"문으로 변환하기
// "switch"문을 사용해 작성된 아래 코드를 if...else 문을 사용한 코드로 변환해라.

switch (browser) {
  case "Edge":
    console.log("Edge를 사용하고 계시네요!");
    break;

  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    console.log("저희 서비스가 지원하는 브라우저를 사용하고 계시네요.");
    break;

  default:
    console.log("현재 페이지가 괜찮아 보이길 바랍니다!");
}
// ===============================================================================================
if (browser === "Edge") {
  console.log("Edge를 사용하고 계시네요!");
} else if (browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera") {
  console.log("저희 서비스가 지원하는 브라우저를 사용하고 계시네요.");
} else {
  console.log("현재 페이지가 괜찮아 보이길 바랍니다!");
}

// "if"문을 "switch"문으로 변환하기

let a = +prompt("a?", "");

if (a == 0) {
  alert(0);
}
if (a == 1) {
  alert(1);
}

if (a == 2 || a == 3) {
  alert("2,3");
}

// =========================================================================================

switch (a) {
  case 0:
    alert(0);
    break;

  case 1:
    alert(1);
    break;

  case 2:
  case 3:
    alert("2,3");
    break;
}
