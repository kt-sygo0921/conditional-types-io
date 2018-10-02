export function getCurrentTime() {
  const date = new Date()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  const label = `${hour}:${minute}:${second}`
  return { date, label }
}

export function getBooleanAsString (flag: boolean) {
  return flag ? 'true' : 'false'
}

export function getBooleanAsNumber (flag: boolean) {
  return flag ? 1 : 0
}
