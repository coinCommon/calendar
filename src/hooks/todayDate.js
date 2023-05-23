export const TodayDate = (setCountMonth, setDateDayTest) => {
    setCountMonth(new Date().getMonth())
    setDateDayTest(new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()))
}

// Date.prototype.daysInMonth = function(countMonth) {
//     return 33 - new Date(this.getFullYear(), countMonth, 33).getDate();
// };