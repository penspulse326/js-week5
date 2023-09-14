import data from "./data.js";
import {
  form,
  addButton,
  ticketList,
  regionSearch,
  searchNum,
} from "./elements.js";
import { validateForm, showList } from "./utils.js";

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

    newItem.id = data.length;

    // 新增到 data
    data.push(newItem);

    // 清空表單
    Object.values(form).forEach((item) => {
      item.value = null;
    });
  }
});

// 顯示套票
// 初始化 預設顯示三筆
ticketList.innerHTML = showList(data.slice(0, 3));
searchNum.textContent = "";

// 地區篩選
regionSearch.addEventListener("change", (e) => {
  const regionName = e.target.value;
  let length = data.length;

  if (regionName) {
    const targetList = data.filter((item) => item.area === e.target.value);
    ticketList.innerHTML = showList(targetList);
    length = targetList.length;
  } else {
    ticketList.innerHTML = showList(data);
  }

  searchNum.textContent = `本次搜尋共 ${length} 筆資料`;
});
