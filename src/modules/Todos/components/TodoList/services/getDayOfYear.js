import moment from 'moment'

export function getDayOfYear (date) {
  const day = date.substring(date.length - 2)
  const month = +date.substring(5, 7) - 1
  const year = date.substring(0, 4)
  return moment({ day, month, year }).dayOfYear()
}
