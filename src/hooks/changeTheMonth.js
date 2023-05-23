import dateFormat from "dateformat";

export const ChangeTheMonth = (dateDayTest) => {
    let array = []
    for (let u = 0; u < 12; u++) {
        for (let i = 1; i <= 7; i++) {
            array.push({date: `${dateFormat(new Date(dateDayTest.getFullYear(), dateDayTest.getMonth(), dateDayTest.getDate() - 4 + i), "yyyy-mm-dd")} ${u === 0 ? 0 : ''}${9+u}:00:00`, number: new Date(dateDayTest.getFullYear(), dateDayTest.getMonth(), dateDayTest.getDate() - 4 + i).getDate()})
        }
    }
    return array
}