import { TicketFormType } from "./allTypes";

// 打包 form 內的 input
export const form: TicketFormType = {
  name: document.querySelector("#ticketName")!,
  imgUrl: document.querySelector("#ticketImgUrl")!,
  area: document.querySelector("#ticketRegion")!,
  price: document.querySelector("#ticketPrice")!,
  group: document.querySelector("#ticketNum")!,
  rate: document.querySelector("#ticketRate")!,
  description: document.querySelector("#ticketDescription")!,
};

// 新增按鈕
export const addButton: HTMLInputElement = document.querySelector(".addTicket-btn")!;

// 套票列表 ul
export const ticketList: HTMLUListElement = document.querySelector(".ticketCard-area")!;

// 地區篩選
export const regionSearch: HTMLSelectElement = document.querySelector(".regionSearch")!;
export const searchNum: HTMLParagraphElement = document.querySelector("#searchResult-text")!;
