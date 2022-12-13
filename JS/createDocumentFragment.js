// 빈 DocumentFragment를 생성한다.

var docFragment = document.createDocumentFragment();

var ul = document.getElementsByTagName("ul")[0]; // assuming it exists
var docfrag = document.createDocumentFragment();
var browserList = ["Internet Explorer", "Firefox", "Safari", "Chrome", "Opera"];

browserList.forEach(function (e) {
  var li = document.createElement("li");
  li.textContent = e;
  docfrag.appendChild(li);
});

ul.appendChild(docfrag);
// a list with well-known web browsers

// 가장 큰 차이점은 HTML의 DOM트리에 영향을 주지않으며 오직 메모리상에서만 정의된다는 점이다.
