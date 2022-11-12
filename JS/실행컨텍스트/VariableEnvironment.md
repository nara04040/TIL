# VariableEnviroment
VariableEnviroment에 담기는 내용은 LexicalEnvironment(언어환경)과 같다.

하지만 최초 실행 시에 스냅샷을 유지한다는 점이 다르다.

실행 컨텍스트를 생성할 때 VariableEnviroment에 정보를 먼저 담고, 이를 복사해서 LexicalEnvironment를 만드고, 이후에 LexicalEnvironment를 주로 활용한다.