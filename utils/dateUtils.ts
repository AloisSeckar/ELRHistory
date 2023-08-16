export function toDate (timestamp: string): string {
  return useDateFormat(timestamp, 'DD.MM.YYYY').value
}

export function toDateTime (timestamp: string): string {
  return useDateFormat(timestamp, 'DD.MM.YYYY HH:mm:ss').value
}
