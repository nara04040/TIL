/**
 * 올바른 괄호 (Valid Parentheses)
 *  괄호가 올바르게 Paired되었다는 것은 "(", "{", "[" 등 열려있으면
 *  반드시 짝지어서 ")", "}", "]" 가 닫혀야한다는말.
 *
 * 예제
 *  "()()" , "(())()" 올바른괄호 o
 * "{}{}{" , "{{}" 올바른괄호 x
 * "[(])" 올바른 괄호 x
 */

function ValidParentheses(input) {
  const stack = [];
  for (const char of input) {
    if (char === "(" || char === "{" || char === "(") {
      stack.push(char);
    } else {
      const lastChar = stack.pop();
      if (
        (char === "}" && lastChar !== "{") ||
        (char === "]" && lastChar !== "[") ||
        (char === ")" && lastChar !== "(")
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(ValidParentheses("[)]("));
console.log(ValidParentheses("{()}"));
