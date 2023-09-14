import data from "./data.js";
import { form, addButton } from "./elements.js";
import { validateForm } from "./utils.js";

// 新增套票
addButton.addEventListener("click", () => {
  const result = validateForm(form);

  // 確定驗證成功才新增資料到 data
  if (!result) {
    const newItem = {};

    Object.entries(form).forEach((item) => {
      if (item[0] === "rate" || item[0] === "group" || item[0] === "price") {
        newItem[item[0]] = parseInt(item[1].value);
      } else {
        newItem[item[0]] = item[1].value;
      }
    });

    // 新增到 data
    data.push(newItem);

    // 清空表單
    Object.values(form).forEach((item) => {
      item.value = null;
    });
  }
});
