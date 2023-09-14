import card from "./card.js";

// 驗證表單 // 回傳 boolean 告知是否通過
export function validateForm(form) {
  // 是否觸發警告
  let validateFlag = false;

  // 警告訊息
  const alertMessage = (key) => {
    if (key === "rate") {
      alert("星級請輸入範圍 1 ~10 的數字");
    } else {
      alert(`${key === "group" ? "組數" : "金額"}請勿輸入負數或非數字`);
    }

    validateFlag = true;
    form[key].value = null;
    alertElement(key).style.display = "flex";
  };

  // 抓取警告元素
  const alertElement = (key) => form[key].parentElement.nextElementSibling;

  // 驗證每個欄位是否有輸入問題 沒有就觸發警告 flag 並且讓代表警告的 HTML 元素顯示
  Object.entries(form).forEach(([key, value]) => {
    if (!value.value) {
      validateFlag = true;
      alertElement(key).style.display = "flex";
    } else {
      alertElement(key).style.display = "none";
    }
  });

  // 驗證特定欄位
  // rate 要介於 1~10
  if (!/^(?:[1-9]|10)$/.test(form["rate"].value)) {
    alertMessage("rate");
  }

  // group 和 price 不能小於零
  if (!/^(?:0|[1-9]\d*)$/.test(form["group"].value)) {
    alertMessage("group");
  }

  if (!/^(?:0|[1-9]\d*)$/.test(form["price"].value)) {
    alertMessage("price");
  }

  return validateFlag;
}

// 顯示列表
export function showList(arr) {
  let result = "";

  arr.forEach((item) => {
    result += card(item);
  });

  return result;
}
