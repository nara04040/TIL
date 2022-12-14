# EnvironmentRecord

EnvironmentRecord에는 현재 컨텍스트와 관련된 코드의 식별자 정보들이 저장됩니다.

컨텍스트를 구성하는 함수에 지정된 매개변수 식별자, 선언한 함수가 있을 경우 그 함수 자체, var로 선언된
변수의 식별자 등이 식별자에 해당한다.

컨텍스트 내부 전체를 처음부터 끝까지 훑어나가며 **순서대로** 수집한다.

++참고++

전역 실행 컨텍스트는 변수객체를 생성하는 대신 자바스크립트 구동 환경이 별도로 제공하는 객체, global object(전역객체)를 활용한다.

전역객체에는 브라우저의 window, Node.js 의 global이 있다.



변수 정보를 수집하는 과정이 모두 끝나도 실행컨텍스트가 관여할 코드들은 실행되기 전 상태이다.

즉 코드가 실행되기 전이지만 자바스크립트 엔진은 이미 환경에 속한 코드들의 변수명을 모두 알고있는 상태이다.

'자바스크립트 엔진은 식별자들을 최상단으로 끌어올려놓은 다음 실제 코드를 실행한다.' 라는 개념에서 시작되는것이 **호이스팅(hoisting)**이다.

호이스팅이라는 단어의 해석은 끌어올리다가 맞지만 실제로는 끌어올리지않고 끌어올린 것으로 간주하자는 것이다.