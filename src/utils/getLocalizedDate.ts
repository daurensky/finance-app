const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const getLocalizedDate = (stringDate: string) => {
  const date = new Date(stringDate)

  return `${monthNames[date.getMonth() + 1]} ${date.getDate()}, ${date.getFullYear()}`
}

export default getLocalizedDate
