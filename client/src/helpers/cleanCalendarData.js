
export function transformCalendarData (records) {
  return records.map(record => {
    return {
      title: record.profit.toString(),
      date: record.day.slice(0, 10)
    }
  })
}
