export function formatDate (str) {
  const day = str.slice(8)
  const month = str.slice(5, 7)
  const year = str.slice(0, 4)
  let textMonth
  switch (month) {
    case '01':
      textMonth = 'янв'
      break;
    case '02':
      textMonth = 'фев'
      break;
    case '03':
      textMonth = 'март'
      break;
    case '04':
      textMonth = 'апр'
      break;
    case '05':
      textMonth = 'май'
      break;
    case '06':
      textMonth = 'июнь'
      break;
    case '07':
      textMonth = 'июль'
      break;
    case '08':
      textMonth = 'авг'
      break;
    case '09':
      textMonth = 'сен'
      break;
    case '10':
      textMonth = 'окт'
      break;
    case '11':
      textMonth = 'нояб'
      break;
    case '12':
      textMonth = 'дек'
      break;
  }

  return `${day} ${textMonth} ${year}`
}