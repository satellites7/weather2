// console.log(new Date().toDateString());
let time = []
const getTime = (second = 1643428800) => {
    for (let i = 0; i < 6; i++) {
        let date = new Date((second + 86400 * i) * 1000)
        let arrDate = date.toDateString().split(' ')
        time.push({ week: arrDate[0], month: arrDate[1], day: arrDate[2] })
    }
    return time;
};
export default getTime;
