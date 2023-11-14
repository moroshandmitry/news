import he from 'he'

export const decodeText = (text?: string): string => {
  return text ? he.decode(text) : ''
}

export const truncateTextDesc = (text: string, maxLength = 139): string => {
  if (text.length > maxLength) {
    return `${decodeText(text).slice(0, maxLength)}...`
  }

  return text
}

const pluralize = (number: number, one: string, few: string, many: string): string => {
  if (number % 10 === 1 && number % 100 !== 11) {
    return one
  }

  if ([2, 3, 4].includes(number % 10) && ![12, 13, 14].includes(number % 100)) {
    return few
  }

  return many
}

export const formatPostedTime = (postedTimestamp: string): string => {
  const s = Math.floor(Date.now() / 1000 - Number(postedTimestamp))
  const m = Math.floor(s / 60)
  const h = Math.floor(m / 60)
  const d = Math.floor(h / 24)

  if (s < 60) {
    return 'только что'
  }

  if (m < 60) {
    return `${m} ${pluralize(m, 'минуту', 'минуты', 'минут')} назад`
  }

  if (h < 24) {
    return `${h} ${pluralize(h, 'час', 'часа', 'часов')} назад`
  }

  if (d === 1) {
    return 'вчера'
  }

  return `${d} ${pluralize(d, 'день', 'дня', 'дней')} назад`
}

export const applyDimension = (value: number | undefined): string | undefined => {
  return value !== undefined ? value + 'px' : undefined
}

export const isEmpty = (obj) => [Object, Array].includes((obj || {}).constructor) && !Object.entries(obj || {}).length
