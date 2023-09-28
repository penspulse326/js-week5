import { ApiDataType } from "./allTypes.js";
import fetchData from "./fetchData.js";
import {
  form,
  addButton,
  ticketList,
  regionSearch,
  searchNum,
} from "./elements.js";
import { validateForm, showList } from "./utils.js";
import showChart from "./chart.js";

window.onload = function () {
  // 把原本的 import 的 data 變數改為此處宣告，等待初始化後把 fetch 到的資料存進來
  const data: ApiDataType[] = [];

  // 圖表元素先宣告但不載入
  let chart: object | null = null;

  // 新增套票
  addButton?.addEventListener("click", () => {
    const result = validateForm(form);

    // 確定驗證成功才新增資料到 data
    if (!result) {
      let newItem = {} as ApiDataType;

      Object.entries(form).forEach(([key, value]) => {
        newItem[key] = value.value
      });

      newItem.id = data.length;

      // 新增到 data
      data.push(newItem);

      // 清空表單
      Object.values(form).forEach((item) => {
        item.value = "";
      });

      // 顯示新圖表
      chart = showChart(data, chart);
    }
  });

  // 顯示套票
  // 初始化 預設顯示三筆
  fetchData().then((res: []) => {
    res.forEach((item) => data.push(item));

    (ticketList.innerHTML = showList(data.slice(0, 3)));

    chart = showChart(data, null);
  });


  (searchNum.textContent = "");

  // 地區篩選
  regionSearch?.addEventListener("change", (e: Event) => {
    const target = e.target as HTMLSelectElement | null;
    const regionName = target?.value;
    let length = data.length;

    if (regionName) {
      const targetList = data.filter((item: { [key: string]: any }) => item.area === target.value);
      ticketList.innerHTML = showList(targetList)

      length = targetList.length;

      // 依照篩選的地區顯示圖表
      chart = showChart(targetList, chart);
    } else {
      ticketList.innerHTML = showList(data);

      chart = showChart(data, chart);
    }

    searchNum.textContent = `本次搜尋共 ${length} 筆資料`;
  });
};

