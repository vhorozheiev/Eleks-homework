/* 1. Develop a simple calculator function (+, -, /, * operations), like calc(3, 3, “+”) should return 6 (3+3). Also, handle a cases when not supported math operation is provided or wrong data format
2. Create a test suite file to verify if calculator function works correctly for positive scenarios
3. Create a test suite file to verify if calculator function works correctly for negative scenarios*/

function calculator(firstNum, secondNum, operation) {
  if (!isNaN(firstNum) & !isNaN(secondNum)) {
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    if (operation == "+") {
      return firstNum + secondNum;
    } else if (operation == "*") {
      return firstNum * secondNum;
    } else if (operation == "-") {
      return firstNum - secondNum;
    } else if (operation == "/") {
      if (secondNum == 0) {
        throw new Error("division by 0");
      } else {
        return firstNum / secondNum;
      }
    } else {
      throw new Error("Opppss!!!smt wrong");
    }
  } else {
    throw new Error("Please, enter just numbers");
  }
}
export { calculator };
