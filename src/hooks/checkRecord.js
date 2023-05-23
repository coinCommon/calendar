export const CheckRecord = (recordData, date) => {
    let bool = false
    recordData.map(m => m.date === date).filter(f => f ? bool = true : '')
    return bool
}