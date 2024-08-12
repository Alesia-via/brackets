module.exports = function check(s, bracketsConfig) {

  
  const bracketsPair = bracketsConfig.reduce((accum, item) => {
    accum[item[1]] = item[0]
    return accum
  },
    {}
  );
  const openBrackets = Object.values(bracketsPair);

  function isBracketOk(str) {
    let stack = [];
    for (let i = 0; i < str.length; i++) {
      let currentSymbol = str[i];
      
       if (openBrackets.includes(currentSymbol) && bracketsPair[currentSymbol] === currentSymbol) {
        if (stack.length > 0 && stack[stack.length - 1] === currentSymbol) {
          stack.pop();  
        } else {
          stack.push(currentSymbol);  
        }
      } else if (openBrackets.includes(currentSymbol)) {
      
        stack.push(currentSymbol);
      } else {
        if (stack.length === 0) {
          return false;
        }
        let topElement = stack[stack.length - 1];
        if (bracketsPair[currentSymbol] === topElement) {
          stack.pop();
        }
        else {
          return false;
        }
      }
    }
    return stack.length === 0;
  }

  return isBracketOk(s)

}
