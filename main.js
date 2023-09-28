"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fetchData_js_1 = __importDefault(require("./fetchData.js"));
const elements_js_1 = require("./elements.js");
const utils_js_1 = require("./utils.js");
const chart_js_1 = __importDefault(require("./chart.js"));
window.onload = function () {
    // 把原本的 import 的 data 變數改為此處宣告，等待初始化後把 fetch 到的資料存進來
    const data = [];
    // 圖表元素先宣告但不載入
    let chart = null;
    // 新增套票
    elements_js_1.addButton === null || elements_js_1.addButton === void 0 ? void 0 : elements_js_1.addButton.addEventListener("click", () => {
        const result = (0, utils_js_1.validateForm)(elements_js_1.form);
        // 確定驗證成功才新增資料到 data
        if (!result) {
            const newItem = {};
            Object.entries(elements_js_1.form).forEach(([key, value]) => {
                if (key === "rate" || key === "group" || key === "price") {
                    newItem[key] = parseInt(value.value);
                }
                else {
                    newItem[key] = value.value;
                }
            });
            newItem.id = data.length;
            // 新增到 data
            data.push(newItem);
            // 清空表單
            Object.values(elements_js_1.form).forEach((item) => {
                item.value = null;
            });
            // 顯示新圖表
            chart = (0, chart_js_1.default)(data, chart);
        }
    });
    // 顯示套票
    // 初始化 預設顯示三筆
    (0, fetchData_js_1.default)().then((res) => {
        res.forEach((item) => data.push(item));
        (elements_js_1.ticketList.innerHTML = (0, utils_js_1.showList)(data.slice(0, 3)));
        chart = (0, chart_js_1.default)(data, null);
    });
    (elements_js_1.searchNum.textContent = "");
    // 地區篩選
    elements_js_1.regionSearch === null || elements_js_1.regionSearch === void 0 ? void 0 : elements_js_1.regionSearch.addEventListener("change", (e) => {
        const target = e.target;
        const regionName = target === null || target === void 0 ? void 0 : target.value;
        let length = data.length;
        if (regionName) {
            const targetList = data.filter((item) => item.area === target.value);
            elements_js_1.ticketList.innerHTML = (0, utils_js_1.showList)(targetList);
            length = targetList.length;
            // 依照篩選的地區顯示圖表
            chart = (0, chart_js_1.default)(targetList, chart);
        }
        else {
            elements_js_1.ticketList.innerHTML = (0, utils_js_1.showList)(data);
            chart = (0, chart_js_1.default)(data, chart);
        }
        elements_js_1.searchNum.textContent = `本次搜尋共 ${length} 筆資料`;
    });
};
