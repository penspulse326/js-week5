// axios.get 套票資料
// 丟出 Promise 讓主程式可以等待 res 後再渲染
export default function fetchData() {
    //@ts-ignore
    return axios
        .get("https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json")
        .then((res) => {
        if (res.status !== 200) {
            throw new Error(`error status: ${res.status}`);
        }
        return res.data;
    })
        .catch((err) => {
        console.error("catch error:", err);
        throw err;
    });
}
