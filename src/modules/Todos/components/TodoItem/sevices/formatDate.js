export function formatDate (str) {
  const day = str.slice(8)
  const month = str.slice(5,7)
  let date
  switch (month) {
    case '01':
      date = `${day} jan`
      break;
    case '02':
      date = `${day} feb`
      break;
    case '03':
      date = `${day} mar`
      break;
    case '04':
      date = `${day} apr`
      break;
    case '05':
      date = `${day} may`
      break;
    case '06':
      date = `${day} june`
      break;
    case '07':
      date = `${day} july`
      break;
    case '08':
      date = `${day} aug`
      break;
    case '09':
      date = `${day} sept`
      break;
    case '10':
      date = `${day} oct`
      break;
    case '11':
      date = `${day} nov`
      break;
    case '12':
      date = `${day} dec`
      break;
  }

  return date
}