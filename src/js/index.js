const $calculator = document.querySelector(".calculator");
const $total = document.querySelector("#total");
const INITIAL_DATA = {
  leftValue: "",
  rightValue: "",
  operator: "",
  result: "0",
};
let data = { ...INITIAL_DATA };
const setData = (newData) => {
  data = { ...newData };
};
const calculate = () => {
  const { leftValue, rightValue, operator } = data;
  let result = null;
  if (operator === "+") {
    result = Number(leftValue) + Number(rightValue);
  } else if (operator === "-") {
    result = Number(leftValue) - Number(rightValue);
  } else if (operator === "X") {
    result = Number(leftValue) * Number(rightValue);
  } else if (operator === "/") {
    result = Math.floor(Number(leftValue) / Number(rightValue));
  }
  setData({ ...INITIAL_DATA, leftValue: result, result: result });
};
const render = () => {
  $total.innerText = data.result;
};
const digitHandler = (value) => {
  const { leftValue, rightValue, operator, result } = data;
  const newValue = !operator ? leftValue + value : rightValue + value;
  if (newValue.length > 3) {
    alert("세자리 이상쓸수없습니다.");
    return;
  }
  if (!operator) {
    setData({ ...data, leftValue: leftValue + value, result: result === "0" ? value : result + value });
  } else {
    setData({ ...data, rightValue: rightValue + value, result: result === "0" ? value : result + value });
  }
  render();
};
const modifierHandler = () => {
  setData({ ...INITIAL_DATA });
  render();
};
const operationHandler = (value) => {
  const { leftValue, operator } = data;
  if (!operator) {
    if (!leftValue || value === "=") alert("숫자를 입력한 후 연산자를 입력해주세요.");
    else setData({ ...data, operator: value, result: `${leftValue}${value}` });
  }
  if (operator) {
    if (value !== "=") alert("숫자를 입력한 후 연산자를 입력해주세요.");
    else calculate();
  }
  render();
};
const onClickButton = ({ target }) => {
  const { classList, innerText } = target;
  if (!classList) return;
  if (classList.contains("digit")) {
    digitHandler(innerText);
    return;
  }
  if (classList.contains("modifier")) {
    modifierHandler();
    return;
  }
  if (classList.contains("operation")) {
    operationHandler(innerText);
    return;
  }
};
$calculator.addEventListener("click", onClickButton);
