export function formatDate (str) {
  const day = str.slice(8)
  const month = str.slice(5, 7)
  const year = str.slice(0, 4)
  let textMonth
  switch (month) {
    case '01':
      textMonth = 'jan'
      break;
    case '02':
      textMonth = 'feb'
      break;
    case '03':
      textMonth = 'mar'
      break;
    case '04':
      textMonth = 'apr'
      break;
    case '05':
      textMonth = 'may'
      break;
    case '06':
      textMonth = 'june'
      break;
    case '07':
      textMonth = 'july'
      break;
    case '08':
      textMonth = 'aug'
      break;
    case '09':
      textMonth = 'sept'
      break;
    case '10':
      textMonth = 'oct'
      break;
    case '11':
      textMonth = 'nov'
      break;
    case '12':
      textMonth = 'dec'
      break;
  }

  return `${day} ${textMonth} ${year}`
}