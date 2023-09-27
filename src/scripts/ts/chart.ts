import { ApiDataType } from "./allTypes.js";

export default function showChart(data: ApiDataType[], chart: any) {
  chart?.destroy();

  const newData: { [key: string]: any } = {};
  const order = ["台北", "台中", "高雄"];

  data.forEach((item) => {
    if (newData[item.area]) {
      ++newData[item.area];
    } else {
      newData[item.area] = 1;
    }
  });

  //@ts-ignore
  return c3.generate({
    bindto: ".chart", // HTML 元素綁定
    size: {
      height: 200,
      width: 200,
    },

    data: {
      labels: false,
      type: "donut",
      columns: order
        .map((item) => [item, newData[item] || 0])
        .filter(([, value]) => value !== 0),
      colors: {
        台北: "#26C0C7",
        台中: "#5151D3",
        高雄: "#E68618",
      },
    },

    donut: {
      title: "套票地區比重",
      width: 12,
      label: {
        show: false,
      },
    },
  });
}
