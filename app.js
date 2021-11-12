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
      throw new Error("opppss!!! smth wrong");
    }
  } else {
    throw new Error("Please, enter just numbers");
  }
}
export { calculator };
